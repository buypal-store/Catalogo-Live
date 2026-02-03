/* global PRODUCTS */

const state = {
  category: "Todas",
  search: "",
  cart: [],
  finalPrice: 0,
  cartSeq: 0 // ✅ id único por ítem del carrito
};



const el = (id) => document.getElementById(id);

function formatPEN(n) {
  const val = Math.max(0, Math.round(Number(n) || 0));
  return `S/ ${val}`;
}

function safeImg(src) {
  return src && src.trim().length ? src : "assets/images/placeholder.jpg";
}
const CATEGORY_ORDER = [
  "Todas",
  "Basicas",
  "Largo Alcance",
  "Imou",
  "Solar Chip",
  "Solar Wi-Fi",
  "Tapo",
  "Extras"

];



function categoriesFromProducts() {
  const set = new Set(PRODUCTS.map(p => p.category));
  const existing = Array.from(set);

  const ordered = CATEGORY_ORDER.filter(cat =>
    existing.includes(cat)
  );

  return ["Todas", ...ordered];
}


function filteredProducts() {
  const q = state.search.trim().toLowerCase();
  return PRODUCTS.filter(p => {
    const byCat = state.category === "Todas" || p.category === state.category;
    const bySearch = !q || p.name.toLowerCase().includes(q) || p.id.toLowerCase().includes(q);
    return byCat && bySearch;
  });
}

function cartTotal() {
  return state.cart.reduce((acc, p) => acc + (Number(p.price) || 0), 0);
}

function cartTotal() {
  return state.cart.reduce((acc, p) => acc + (Number(p.price) || 0), 0);
}

// ✅ Descuento se calcula, NO se escribe
function computedDiscount(subtotal) {
  const fp = Number(state.finalPrice) || 0;
  // si no escribiste final o escribiste algo >= subtotal, descuento 0
  if (fp <= 0 || fp >= subtotal) return 0;
  return Math.max(0, subtotal - fp);
}

// ✅ Final: si hay finalPrice válido (< subtotal) úsalo, si no, subtotal
function finalTotalFrom(subtotal) {
  const fp = Number(state.finalPrice) || 0;
  if (fp > 0 && fp < subtotal) return fp;
  return subtotal;
}


function renderTabs() {
  const tabs = el("categoryTabs");
  tabs.innerHTML = "";
  const cats = categoriesFromProducts();

  cats.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "tab" + (state.category === cat ? " active" : "");
    btn.textContent = cat;
    btn.onclick = () => {
      state.category = cat;
      renderAll();
    };
    tabs.appendChild(btn);
  });
}

const SUBCAT_ORDER = ["Interiores", "Exteriores", "Otros"];

function normalizeSubCategory(sc) {
  const s = String(sc || "").trim().toLowerCase();
  if (s === "exteriores") return "Exteriores";
  if (s === "interiores") return "Interiores";
  return "Otros";
}

function hasAnySubCategory(items) {
  return items.some(p => String(p.subCategory || "").trim().length > 0);
}


function renderGrid() {
  const grid = el("productGrid");
  grid.innerHTML = "";

  const items = filteredProducts();

  // ✅ Si hay subCategory en los productos filtrados, agrupamos
  const useGrouping = hasAnySubCategory(items);

  if (useGrouping) {
    const groups = { Interiores: [], Exteriores: [], Otros: [] };

    items.forEach(p => {
      const key = normalizeSubCategory(p.subCategory);
      groups[key].push(p);
    });

    let anyRendered = false;

    SUBCAT_ORDER.forEach(title => {
      const arr = groups[title];
      if (!arr || arr.length === 0) return;

      anyRendered = true;

      // Subtítulo
      const h = document.createElement("div");
      h.className = "grid-subtitle";
      h.textContent = title;
      grid.appendChild(h);

      // Cards
      arr.forEach(p => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
          <div class="card-img">
            <img src="${safeImg(p.image)}" alt="${p.name}">
          </div>
          <div class="card-body">
            <div class="card-name">${p.name}</div>
            <div class="card-meta">
              <span class="badge">${p.category}</span>
              <span class="price">${formatPEN(p.price)}</span>
            </div>
          </div>
          <div class="card-actions">
            <button class="btn small ghost" data-action="zoom">Ver</button>
            <button class="btn small" data-action="add">Agregar</button>
          </div>
        `;

        card.querySelector('[data-action="add"]').onclick = () => addToCart(p);
        card.querySelector('[data-action="zoom"]').onclick = () => openModal(p);

        card.onclick = (e) => {
          if (e.target.closest("button")) return;
          openModal(p);
        };

        grid.appendChild(card);
      });
    });

    if (!anyRendered) {
      const empty = document.createElement("div");
      empty.className = "empty";
      empty.textContent = "No hay productos con ese filtro.";
      grid.appendChild(empty);
    }

    return;
  }

  // ✅ Render normal (si NO hay subCategory)
  items.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="card-img">
        <img src="${safeImg(p.image)}" alt="${p.name}">
      </div>
      <div class="card-body">
        <div class="card-name">${p.name}</div>
        <div class="card-meta">
          <span class="badge">${p.category}</span>
          <span class="price">${formatPEN(p.price)}</span>
        </div>
      </div>
      <div class="card-actions">
        <button class="btn small ghost" data-action="zoom">Ver</button>
        <button class="btn small" data-action="add">Agregar</button>
      </div>
    `;

    card.querySelector('[data-action="add"]').onclick = () => addToCart(p);
    card.querySelector('[data-action="zoom"]').onclick = () => openModal(p);

    card.onclick = (e) => {
      if (e.target.closest("button")) return;
      openModal(p);
    };

    grid.appendChild(card);
  });

  if (items.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty";
    empty.textContent = "No hay productos con ese filtro.";
    grid.appendChild(empty);
  }
}

function renderCart() {
  const list = el("cartItems");
  if (list) list.innerHTML = "";

  state.cart.forEach((p, idx) => {
    const li = document.createElement("li");
    li.className = "cart-item";
    li.innerHTML = `
      <div class="ci-left">
        <div class="ci-name">${p.name}</div>
        <div class="ci-sub">${p.category}</div>
      </div>
      <div class="ci-right">
        <div class="ci-price">${formatPEN(p.price)}</div>
        <button class="ci-remove" title="Quitar">✕</button>
      </div>
    `;

    li.querySelector(".ci-remove").onclick = (e) => {
      e.stopPropagation();
      removeAt(idx);
    };

    li.onclick = () => openModal(p);
    list.appendChild(li);
  });

  // ✅ solo total del combo
  const ct = el("cartTotal");
  if (ct) ct.textContent = formatPEN(cartTotal());
}


function renderAll() {
  renderTabs();
  renderGrid();
  renderCart();
}

function addToCart(product) {
  resetFinalPrice();

  const item = {
    ...product,
    cartId: ++state.cartSeq
  };

  // ✅ cada cámara tiene su propia memoria (64 por defecto)
  if (item.type === "camera") item.memory = "64";

  state.cart.push(item);
  renderCart();
}

function removeAt(index) {
  resetFinalPrice();
  state.cart.splice(index, 1);
  renderCart();
}

function undoLast() {
  resetFinalPrice();
  state.cart.pop();
  renderCart();
}

function clearCart() {
  state.cart = [];
  resetFinalPrice();
  renderCart();
  showCopyNote("");
}



/* ✅ MODAL */
let modalProduct = null;

function openModal(product) {
  modalProduct = product;

  el("modalImg").src = safeImg(product.image);
  el("modalName").textContent = product.name;
  el("modalPrice").textContent = formatPEN(product.price);

  // ✅ render 5 puntos
  const ul = el("modalHighlights");
  ul.innerHTML = "";

  const highlights = Array.isArray(product.highlights) ? product.highlights : [];
  highlights.slice(0, 8).forEach(text => {
    const li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
  });

  // si faltan puntos, rellena para que siempre se vean 5 (opcional)
  const missing = 5 - ul.children.length;
  for (let i = 0; i < missing; i++) {
    const li = document.createElement("li");
    li.textContent = "—";
    li.style.opacity = "0.35";
    ul.appendChild(li);
  }

  const addBtn = el("modalAdd");
  const addedNote = el("modalAddedNote");

  if (isInCart(product)) {
    addBtn.classList.add("hidden");
    addedNote.classList.remove("hidden");
  } else {
    addBtn.classList.remove("hidden");
    addedNote.classList.add("hidden");
  }


  el("modal").classList.remove("hidden");
}

function closeModal() {
  el("modal").classList.add("hidden");
  modalProduct = null;
}







function openSummary() {
  renderSummary();

  // sincroniza input descuento con el actual
  const sumInput = el("sumDiscountInput");
  if (sumInput) sumInput.value = Number(state.discount) || 0;

  el("summaryModal").classList.remove("hidden");
}

function closeSummary() {
  el("summaryModal").classList.add("hidden");
}
function renderSummary() {

  // ---- Helpers memoria ----
  function memoryExtra(mem) {
    if (mem === "128") return 20;
    if (mem === "256") return 69;
    if (mem === "512") return 149;
    return 0; // 64 incluida
  }

  function memoryImg(mem) {
    if (mem === "128") return "memorias/MEMORIA 128 GB.jpg";
    if (mem === "256") return "memorias/MEMORIA 256 GB.jpg";
    if (mem === "512") return "memorias/MEMORIA 512 GB.jpg";
    return "memorias/MEMORIA 64 GB.jpg";
  }

  function memoryText(mem) {
    if (mem === "128") return "128GB (+ S/20)";
    if (mem === "256") return "256GB (+ S/69)";
    if (mem === "512") return "512GB (+ S/149)";
    return "64GB (incluida)";
  }


  // ---- Separar items ----
  const cams = state.cart.filter(p => p.type === "camera");
  const extras = state.cart.filter(p => p.type === "extra");

  // === 1) Render líneas (cámaras + selector de memoria) ===
  const linesBox = el("summaryLines");
  if (linesBox) {
    linesBox.innerHTML = "";

    cams.forEach(p => {
      const row = document.createElement("div");
      row.className = "sum-line";
      row.innerHTML = `
        <div class="name">
          ${p.name}
          <div style="margin-top:8px; opacity:.9; font-weight:800; font-size:12px;">
            Memoria:
            <select class="mem-select" data-cartid="${p.cartId}">
              <option value="64"  ${p.memory === "64" ? "selected" : ""}>64GB (incluida)</option>
              <option value="128" ${p.memory === "128" ? "selected" : ""}>128GB (+ S/20)</option>
              <option value="256" ${p.memory === "256" ? "selected" : ""}>256GB (+ S/69)</option>
              <option value="512" ${p.memory === "512" ? "selected" : ""}>512GB (+ S/149)</option>
            </select>

          </div>
        </div>
        <div class="price">${formatPEN(Number(p.price) || 0)}</div>
      `;
      linesBox.appendChild(row);
    });
  }

  // === 2) SUBTOTAL (cámaras + memoria + extras) ===
  const camSubtotal = cams.reduce((a, p) => a + (Number(p.price) || 0), 0);
  const memTotal = cams.reduce((a, p) => a + memoryExtra(p.memory), 0);
  const extrasSubtotal = extras.reduce((a, p) => a + (Number(p.price) || 0), 0);

  const subtotal = camSubtotal + memTotal + extrasSubtotal;

  // === 3) Precio final negociado ===
  const fp = Number(state.finalPrice) || 0;
  const final = (fp > 0 && fp < subtotal) ? fp : subtotal;
  const discount = Math.max(0, subtotal - final);

  if (el("sumSubtotal")) el("sumSubtotal").textContent = formatPEN(subtotal);
  if (el("sumFinal")) el("sumFinal").textContent = formatPEN(final);
  if (el("sumDiscountValue")) el("sumDiscountValue").textContent = formatPEN(discount);

  // === 4) Render resumen del combo (cámaras + extras) ===
  const comboBox = el("comboBox");
  if (comboBox) {
    comboBox.innerHTML = "";

    // Cámaras (con memoria sumada)
    cams.forEach(p => {
      const item = document.createElement("div");
      item.className = "combo-item";

      item.innerHTML = `
        <img class="combo-img" src="${p.image}" alt="${p.name}">
        <div class="combo-meta">
          <div class="combo-name">${p.name}</div>
          <div class="combo-mem">
            <img class="mem-img" src="${memoryImg(p.memory)}" alt="Memoria ${p.memory}GB">
            <span>${memoryText(p.memory)}</span>
          </div>
        </div>
        <div class="combo-price">
          ${formatPEN((Number(p.price) || 0) + memoryExtra(p.memory))}
        </div>
      `;
      comboBox.appendChild(item);
    });

    // ✅ Extras (sin memoria)
    extras.forEach(p => {
      const item = document.createElement("div");
      item.className = "combo-item";

      item.innerHTML = `
        <img class="combo-img" src="${p.image}" alt="${p.name}">
        <div class="combo-meta">
          <div class="combo-name">${p.name}</div>
          <div class="combo-mem" style="opacity:.7;">Extra</div>
        </div>
        <div class="combo-price">${formatPEN(Number(p.price) || 0)}</div>
      `;
      comboBox.appendChild(item);
    });
  }

  // ✅ no pisar mientras escribes el precio final
  const fi = el("finalInput");
  if (fi && document.activeElement !== fi) {
    fi.value = state.finalPrice ? String(state.finalPrice) : "";
  }
}







/* Copiar texto */
function cartText() {
  const names = state.cart.map(p => p.name);
  const total = cartTotal();
  const disc = Number(state.discount) || 0;
  const final = finalTotal();

  return [
    `COMBO BuyPal (Live)`,
    `Productos: ${names.length ? names.join(" + ") : "(vacío)"}`,
    `Total: ${formatPEN(total)}`,
    `Descuento: ${formatPEN(disc)}`,
    `Final: ${formatPEN(final)}`
  ].join("\n");
}

function showCopyNote(msg) {
  el("copyNote").textContent = msg || "";
}

async function copyToClipboard() {
  try {
    await navigator.clipboard.writeText(cartText());
    showCopyNote("✅ Copiado. Pégalo en WhatsApp si lo necesitas.");
    setTimeout(() => showCopyNote(""), 2500);
  } catch {
    showCopyNote("No se pudo copiar (permiso bloqueado).");
  }
}

/* Fullscreen */
async function goFullscreen() {
  try { await document.documentElement.requestFullscreen(); } catch { }
}

/* Eventos */
function bindEvents() {
  const searchInput = el("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.search = e.target.value;
      renderGrid();
    });
  }

  const btnUndo = el("btnUndo");
  if (btnUndo) btnUndo.onclick = undoLast;

  const btnClear = el("btnClear");
  if (btnClear) btnClear.onclick = clearCart;

  const btnSummary = el("btnSummary");
  if (btnSummary) btnSummary.onclick = openSummary;

  const btnFull = el("btnFull");
  if (btnFull) btnFull.onclick = goFullscreen;

  // modal producto
  const modalClose = el("modalClose");
  if (modalClose) modalClose.onclick = closeModal;

  const modal = el("modal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target.id === "modal") closeModal();
    });
  }

  const modalAdd = el("modalAdd");
  if (modalAdd) {
    modalAdd.onclick = () => {
      if (modalProduct) addToCart(modalProduct);
      closeModal();
    };
  }

  // modal resumen (cerrar)
  const summaryClose = el("summaryClose");
  if (summaryClose) summaryClose.onclick = closeSummary;

  const summaryModal = el("summaryModal");
  if (summaryModal) {
    summaryModal.addEventListener("click", (e) => {
      if (e.target.id === "summaryModal") closeSummary();
    });
  }

  // ✅ INPUT PRECIO FINAL EN TIEMPO REAL (delegación)
  document.addEventListener("input", (e) => {
    if (e.target && e.target.id === "finalInput") {
      const clean = String(e.target.value || "").replace(/\D/g, "");
      if (e.target.value !== clean) e.target.value = clean;

      state.finalPrice = Number(clean) || 0;

      renderCart();
      renderSummary();
    }
  }, true);

  // upgrade memoria
  const btnUpgradeMemory = el("btnUpgradeMemory");
  if (btnUpgradeMemory) btnUpgradeMemory.onclick = cycleMemoryUpgrade;

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { closeModal(); closeSummary(); }
    if (e.key.toLowerCase() === "z") undoLast();
    if (e.key.toLowerCase() === "c") clearCart();
  });


  // ✅ Cambiar memoria por cámara (en resumen)
  document.addEventListener("change", (e) => {
    const sel = e.target;
    if (sel && sel.classList && sel.classList.contains("mem-select")) {
      const cartId = Number(sel.dataset.cartid);
      const item = state.cart.find(x => x.cartId === cartId);
      if (item) {
        resetFinalPrice();
        item.memory = sel.value; // "64" | "128" | "256"
        renderSummary();
        renderCart();
      }
    }
  }, true);

}





function init() {
  bindEvents();
  renderAll();
}

function isInCart(product) {
  return state.cart.some(p => p.id === product.id);
}
function resetFinalPrice() {
  state.finalPrice = 0;
}


init();
