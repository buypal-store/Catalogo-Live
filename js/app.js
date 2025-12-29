/* global PRODUCTS */

const state = {
  category: "Todas",
  search: "",
  cart: [],
  discount: 0,
  memoryUpgrade: "64", // "64" | "128" | "256"

};

const el = (id) => document.getElementById(id);

function formatPEN(n) {
  const val = Math.max(0, Math.round(Number(n) || 0));
  return `S/ ${val}`;
}

function safeImg(src) {
  return src && src.trim().length ? src : "assets/images/placeholder.jpg";
}

function categoriesFromProducts() {
  const set = new Set(PRODUCTS.map(p => p.category));
  return ["Todas", ...Array.from(set).sort((a,b)=>a.localeCompare(b))];
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

function finalTotal() {
  return Math.max(0, cartTotal() - (Number(state.discount) || 0));
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

function renderGrid() {
  const grid = el("productGrid");
  grid.innerHTML = "";

  const items = filteredProducts();

  // ✅ Si estoy en categoría "Imou", render con subtítulos
  if (state.category !== "Todas") { 
    // Agrupar por subCategory
    const groups = {
      "Interiores": [],
      "Exteriores": [],
      "Otros": []
    };

    items.forEach(p => {
      const sc = (p.subCategory || "Otros").trim();
      if (sc.toLowerCase() === "interiores") groups["Interiores"].push(p);
      else if (sc.toLowerCase() === "exteriores") groups["Exteriores"].push(p);
      else groups["Otros"].push(p);
    });

    // Orden simple: Interiores -> Exteriores -> Otros
    const order = ["Interiores", "Exteriores", "Otros"];

    let anyRendered = false;

    order.forEach(title => {
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
      empty.textContent = "No hay cámaras Imou con ese filtro.";
      grid.appendChild(empty);
    }

    return; // 👈 importante para que no siga al render normal
  }

  // ✅ Render normal (todas las demás categorías)
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
  list.innerHTML = "";

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

    // ✅ Click en la X: quitar
    li.querySelector(".ci-remove").onclick = (e) => {
      e.stopPropagation();       // evita que abra el modal
      removeAt(idx);
    };

    // ✅ Click en el item: abrir modal (como "Ver grande")
    li.onclick = () => openModal(p);

    list.appendChild(li);
  });

  el("cartTotal").textContent = formatPEN(cartTotal());
  el("finalTotal").textContent = formatPEN(finalTotal());
}

function renderAll() {
  renderTabs();
  renderGrid();
  renderCart();
}

function addToCart(product) {
  state.cart.push(product);
  renderCart();
}

function removeAt(index) {
  state.cart.splice(index, 1);
  renderCart();
}

function undoLast() {
  state.cart.pop();
  renderCart();
}

function clearCart() {
  state.cart = [];
  state.discount = 0;
  el("discountInput").value = 0;
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
  highlights.slice(0, 5).forEach(text => {
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

function countCamerasInCart() {
  // OJO: esto requiere que tus cámaras tengan product.type = "camera"
  // Si aún no lo tienes, dime y lo hacemos por category === "Imou"/etc.
  return state.cart.filter(p => p.type === "camera").length;
}

function upgradePricePerCamera() {
  if (state.memoryUpgrade === "128") return 20;
  if (state.memoryUpgrade === "256") return 69;
  return 0; // 64GB gratis
}

function cycleMemoryUpgrade() {
  if (state.memoryUpgrade === "64") state.memoryUpgrade = "128";
  else if (state.memoryUpgrade === "128") state.memoryUpgrade = "256";
  else state.memoryUpgrade = "64";

  renderSummary();
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
  const cams = state.cart.filter(p => p.type === "camera");
  const camerasCount = cams.length;

  // ===== Líneas cámaras =====
  const linesBox = el("summaryLines");
  if (linesBox) {
    linesBox.innerHTML = "";
    cams.forEach(p => {
      const row = document.createElement("div");
      row.className = "sum-line";
      row.innerHTML = `
        <div class="name">${p.name}</div>
        <div class="price">${formatPEN(p.price)}</div>
      `;
      linesBox.appendChild(row);
    });
  }

  // ===== Upgrade memoria por cámara =====
  const perCam = (state.memoryUpgrade === "128") ? 20
               : (state.memoryUpgrade === "256") ? 69
               : 0;
  const upgradeTotal = perCam * camerasCount;

  // Subtotal: cámaras + upgrade
  const camSubtotal = cams.reduce((a, p) => a + (Number(p.price) || 0), 0);
  const subtotal = camSubtotal + upgradeTotal;

  const discount = Number(state.discount) || 0;
  const final = Math.max(0, subtotal - discount);

  el("sumSubtotal").textContent = formatPEN(subtotal);
  el("sumFinal").textContent = formatPEN(final);

  // ===== Extras (solo si hay cámaras) =====
  const extrasBox = el("summaryExtras");
  const upgradeNote = el("upgradeNote");

  if (extrasBox) {
    if (camerasCount > 0) {
      extrasBox.classList.remove("hidden");

      // textos
      if (state.memoryUpgrade === "64") {
        el("extraLabel").textContent = "MicroSD 64GB incluida";
        el("extraQty").textContent = `(x${camerasCount})`;
        if (upgradeNote) upgradeNote.textContent = "";
      } else if (state.memoryUpgrade === "128") {
        el("extraLabel").textContent = "MicroSD 128GB (upgrade)";
        el("extraQty").textContent = `(x${camerasCount})`;
        if (upgradeNote) upgradeNote.textContent = `Se suma: ${formatPEN(upgradeTotal)}`;
      } else {
        el("extraLabel").textContent = "MicroSD 256GB (upgrade)";
        el("extraQty").textContent = `(x${camerasCount})`;
        if (upgradeNote) upgradeNote.textContent = `Se suma: ${formatPEN(upgradeTotal)}`;
      }

      // imagen (ajusta rutas reales)
      const img = el("extraImg");
      if (img) {
        if (state.memoryUpgrade === "64") img.src = "imagenes/microsd_64.png";
        else if (state.memoryUpgrade === "128") img.src = "imagenes/microsd_128.png";
        else img.src = "imagenes/microsd_256.png";
      }

    } else {
      extrasBox.classList.add("hidden");
    }
  }
}
function cycleMemoryUpgrade() {
  if (state.memoryUpgrade === "64") state.memoryUpgrade = "128";
  else if (state.memoryUpgrade === "128") state.memoryUpgrade = "256";
  else state.memoryUpgrade = "64";
  renderSummary();
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
  try { await document.documentElement.requestFullscreen(); } catch {}
}

/* Eventos */
function bindEvents() {
  el("searchInput").addEventListener("input", (e) => {
    state.search = e.target.value;
    renderGrid();
  });

  el("btnUndo").onclick = undoLast;
  el("btnClear").onclick = clearCart;

  el("btnApplyDiscount").onclick = () => {
    state.discount = Number(el("discountInput").value) || 0;
    renderCart();
  };

  el("discountInput").addEventListener("input", () => {
    state.discount = Number(el("discountInput").value) || 0;
    renderCart();
  });

  // Botón resumen
  const btnSummary = el("btnSummary");
  if (btnSummary) btnSummary.onclick = openSummary;

  el("btnFull").onclick = goFullscreen;

  // Modal producto
  el("modalClose").onclick = closeModal;
  el("modal").addEventListener("click", (e) => {
    if (e.target.id === "modal") closeModal();
  });

  el("modalAdd").onclick = () => {
    if (modalProduct) addToCart(modalProduct);
    closeModal();
  };

  // Modal resumen
  const summaryClose = el("summaryClose");
  if (summaryClose) summaryClose.onclick = closeSummary;

  const summaryModal = el("summaryModal");
  if (summaryModal) {
    summaryModal.addEventListener("click", (e) => {
      if (e.target.id === "summaryModal") closeSummary();
    });
  }

  // Descuento desde el modal resumen (sincroniza con el del carrito)
  const sumDiscountInput = el("sumDiscountInput");
  if (sumDiscountInput) {
    sumDiscountInput.addEventListener("input", () => {
      state.discount = Number(sumDiscountInput.value) || 0;
      el("discountInput").value = state.discount;
      renderCart();
      renderSummary();
    });
  }

  // Upgrade memoria
  const btnUpgradeMemory = el("btnUpgradeMemory");
  if (btnUpgradeMemory) btnUpgradeMemory.onclick = cycleMemoryUpgrade;

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { closeModal(); closeSummary(); }
    if (e.key.toLowerCase() === "z") undoLast();
    if (e.key.toLowerCase() === "c") clearCart();
  });
}



function init() {
  bindEvents();
  renderAll();
}

function isInCart(product) {
  return state.cart.some(p => p.id === product.id);
}

init();
