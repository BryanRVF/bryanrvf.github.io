// Lista completa de productos (43 items)
const products = [
    { id: 1, name: "Ropero de melamina con espacio para TV", category: "roperos", price: 1520, dimensions: "Alto: 200 cm | Largo: 260 cm | Prof: 48 cm", feature: "Espacio para TV", image:  "images/img1.jpg" },
    { id: 2, name: "Ropero blanco con puertas corredizas", category: "roperos", price: 1320, dimensions: "Alto: 225 cm | Largo: 150 cm | Prof: 53 cm", feature: "Puertas corredizas", image: "images/img2.jpg" },
    { id: 3, name: "Ropero de 3 cuerpos con puertas corredizas", category: "roperos", price: 1850, dimensions: "Alto: 210 cm | Largo: 200 cm | Prof: 52 cm", feature: "3 cuerpos", image: "images/img3.jpg" },
    { id: 4, name: "Ropero de melamina con puertas de vidrio e iluminación LED", category: "roperos", price: 1420, dimensions: "Alto: 200 cm | Largo: 140 cm | Prof: 50 cm", feature: "Vidrio + LED", image: "https://picsum.photos/id/177/400/300" },
    { id: 5, name: "Ropero color océano con blanco", category: "roperos", price: 970, dimensions: "Alto: 225 cm | Ancho: 120 cm | Prof: 50 cm", feature: "Color océano", image: "https://picsum.photos/id/26/400/300" },
    { id: 6, name: "Ropero blanco con macadamia", category: "roperos", price: 970, dimensions: "Alto: 225 cm | Ancho: 121 cm | Prof: 53 cm", feature: "Dos tonos", image: "https://picsum.photos/id/135/400/300" },
    { id: 7, name: "Ropero duna con gris", category: "roperos", price: 870, dimensions: "Alto: 185 cm | Ancho: 110 cm | Prof: 52 cm", feature: "Estilo duna", image: "https://picsum.photos/id/96/400/300" },
    { id: 8, name: "Ropero brixton", category: "roperos", price: 820, dimensions: "Alto: 185 cm | Ancho: 120 cm | Prof: 48 cm", feature: "Modelo Brixton", image: "https://picsum.photos/id/119/400/300" },
    { id: 9, name: "Ropero blanco con espejo", category: "roperos", price: 590, dimensions: "Alto: 185 cm | Ancho: 120 cm | Prof: 48 cm", feature: "Con espejo", image: "https://picsum.photos/id/106/400/300" },
    { id: 10, name: "Cómoda brixton con espejo", category: "comodas", price: 630, dimensions: "Alto: 175 cm | Ancho: 120 cm | Prof: 45 cm", feature: "Con espejo", image: "https://picsum.photos/id/179/400/300" },
    { id: 11, name: "Cómoda grande de melamina", category: "comodas", price: 750, dimensions: "Alto: 120 cm | Largo: 140 cm | Prof: 45 cm", feature: "Grande", image: "https://picsum.photos/id/20/400/300" },
    { id: 12, name: "Cómoda blanca", category: "comodas", price: 360, dimensions: "Alto: 95 cm | Ancho: 70 cm | Prof: 47 cm", feature: "Blanca", image: "https://picsum.photos/id/26/400/300" },
    { id: 13, name: "Cómoda macadamia con espejo", category: "comodas", price: 570, dimensions: "Alto: 100 cm | Largo: 110 cm | Prof: 45 cm", feature: "Macadamia + espejo", image: "https://picsum.photos/id/135/400/300" },
    { id: 14, name: "Veladores blancos grandes", category: "veladores", price: 420, dimensions: "Alto: 60 cm | Ancho: 50 cm | Prof: 40 cm", feature: "Pares", image: "https://picsum.photos/id/169/400/300" },
    { id: 15, name: "Veladores bellota", category: "veladores", price: 350, dimensions: "Alto: 45 cm | Ancho: 55 cm | Prof: 38 cm", feature: "Color bellota", image: "https://picsum.photos/id/177/400/300" },
    { id: 16, name: "Ropero abierto", category: "roperos_abiertos", price: 390, dimensions: "Alto: 185 cm | Ancho: 123 cm | Prof: 40 cm", feature: "Abierto", image: "https://picsum.photos/id/96/400/300" },
    { id: 17, name: "Colgador", category: "roperos_abiertos", price: 290, dimensions: "Alto: 185 cm | Ancho: 100 cm | Prof: 40 cm", feature: "Colgador simple", image: "https://picsum.photos/id/106/400/300" },
    { id: 18, name: "Ropero abierto doble repisa", category: "roperos_abiertos", price: 580, dimensions: "Alto: 185 cm | Ancho: 162 cm | Prof: 40 cm", feature: "Doble repisa", image: "https://picsum.photos/id/119/400/300" },
    { id: 19, name: "Ropero abierto con cajonera", category: "roperos_abiertos", price: 700, dimensions: "Alto: 190 cm | Ancho: 150 cm | Prof: 40 cm", feature: "Con cajonera", image: "https://picsum.photos/id/179/400/300" },
    { id: 20, name: "Ropero de 150", category: "roperos_abiertos", price: 750, dimensions: "Alto: 185 cm | Largo: 150 cm | Prof: 40 cm", feature: "150 cm", image: "https://picsum.photos/id/108/400/300" },
    { id: 21, name: "Zapatera con espejo", category: "zapateras", price: 350, dimensions: "Alto: 185 cm | Ancho: 76 cm | Prof: 33 cm", feature: "Con espejo", image: "https://picsum.photos/id/20/400/300" },
    { id: 22, name: "Zapatera para 36 pares", category: "zapateras", price: 550, dimensions: "Alto: 185 cm | Ancho: 100 cm | Prof: 33 cm", feature: "36 pares", image: "https://picsum.photos/id/26/400/300" },
    { id: 23, name: "Zapatera Hollywood", category: "zapateras", price: 870, dimensions: "Alto: 185 cm | Largo: 110 cm | Prof: 38 cm", feature: "Estilo Hollywood", image: "https://picsum.photos/id/135/400/300" },
    { id: 24, name: "Espejo Hollywood", category: "espejos", price: 290, dimensions: "Alto: 180 cm | Ancho: 80 cm", feature: "Estilo Hollywood", image: "https://picsum.photos/id/169/400/300" },
    { id: 25, name: "Espejo cuerpo completo", category: "espejos", price: 160, dimensions: "Alto: 170 cm | Ancho: 61 cm", feature: "Cuerpo completo", image: "https://picsum.photos/id/177/400/300" },
    { id: 26, name: "Organizador Hollywood", category: "organizadores", price: 420, dimensions: "Alto: 180 cm | Ancho: 120 cm", feature: "Organizador Hollywood", image: "https://picsum.photos/id/96/400/300" },
    { id: 27, name: "Organizadores Hollywood (2 tamaños)", category: "organizadores", price: 250, dimensions: "Altos: 180 cm / 160 cm", feature: "2 tamaños", image: "https://picsum.photos/id/106/400/300" },
    { id: 28, name: "Tocador Hollywood estándar", category: "tocadores", price: 870, dimensions: "Alto: 161 cm | Largo: 130 cm | Prof: 42 cm", feature: "Hollywood estándar", image: "https://picsum.photos/id/119/400/300" },
    { id: 29, name: "Tocador Hollywood premium", category: "tocadores", price: 950, dimensions: "Alto: 161 cm | Largo: 130 cm | Prof: 42 cm", feature: "Versión premium", image: "https://picsum.photos/id/179/400/300" },
    { id: 30, name: "Tocador Hollywood alto", category: "tocadores", price: 870, dimensions: "Alto: 180 cm | Ancho: 120 cm | Prof: 42 cm", feature: "Modelo alto", image: "https://picsum.photos/id/108/400/300" },
    { id: 31, name: "Tocador mediano", category: "tocadores", price: 650, dimensions: "Alto: 161 cm | Ancho: 85 cm | Prof: 42 cm", feature: "Mediano", image: "https://picsum.photos/id/20/400/300" },
    { id: 32, name: "Tocador pequeño", category: "tocadores", price: 430, dimensions: "Alto: 161 cm | Ancho: 70 cm | Prof: 42 cm", feature: "Pequeño", image: "https://picsum.photos/id/26/400/300" },
    { id: 33, name: "Tocador pequeño con puerta push", category: "tocadores", price: 550, dimensions: "Alto: 161 cm | Ancho: 70 cm | Prof: 42 cm", feature: "Puerta push", image: "https://picsum.photos/id/135/400/300" },
    { id: 34, name: "Tocador zapatera Hollywood", category: "tocadores", price: 870, dimensions: "Alto: 178 cm | Largo: 130 cm | Prof: 42 cm", feature: "Zapatera integrada", image: "https://picsum.photos/id/169/400/300" },
    { id: 35, name: "Centro de TV con iluminación azul", category: "centros_entretenimiento", price: 380, dimensions: "Largo: 155 cm | Alto: 60 cm | Prof: 38 cm", feature: "Iluminación azul", image: "https://picsum.photos/id/177/400/300" },
    { id: 36, name: "Centro macadamia", category: "centros_entretenimiento", price: 420, dimensions: "Largo: 155 cm | Alto: 60 cm | Prof: 37 cm", feature: "Color macadamia", image: "https://picsum.photos/id/96/400/300" },
    { id: 37, name: "Centro con LED", category: "centros_entretenimiento", price: 450, dimensions: "Largo: 155 cm | Alto: 67 cm | Prof: 37 cm", feature: "Con LED", image: "https://picsum.photos/id/106/400/300" },
    { id: 38, name: "Centro brixton", category: "centros_entretenimiento", price: 870, dimensions: "Alto: 190 cm | Largo: 200 cm | Prof: 40 cm", feature: "Modelo Brixton", image: "https://picsum.photos/id/119/400/300" },
    { id: 39, name: "Escritorio para 2 (brixton)", category: "escritorios", price: 530, dimensions: "Largo: 200 cm | Alto: 80 cm | Prof: 50 cm", feature: "Para 2 personas", image: "https://picsum.photos/id/179/400/300" },
    { id: 40, name: "Escritorio librero", category: "escritorios", price: 340, dimensions: "Alto: 140 cm | Largo: 130 cm | Prof: 45 cm", feature: "Con librero", image: "https://picsum.photos/id/108/400/300" },
    { id: 41, name: "Escritorio blanco", category: "escritorios", price: 250, dimensions: "Largo: 110 cm | Alto: 80 cm | Prof: 50 cm", feature: "Blanco", image: "https://picsum.photos/id/20/400/300" },
    { id: 42, name: "Escritorio gamer", category: "escritorios", price: 550, dimensions: "Largo: 140 cm | Alto: 80 cm | Prof: 45 cm", feature: "Gamer", image: "https://picsum.photos/id/26/400/300" },
    { id: 43, name: "Escritorio duna con LED", category: "escritorios", price: 570, dimensions: "Largo: 120 cm | Alto: 140 cm | Prof: 50 cm", feature: "Duna + LED", image: "https://picsum.photos/id/135/400/300" }
];

const categories = [
    { id: "todos", icon: "✨", name: "Todos" },
    { id: "roperos", icon: "🚪", name: "Roperos" },
    { id: "comodas", icon: "📦", name: "Cómodas" },
    { id: "veladores", icon: "🛏️", name: "Veladores" },
    { id: "roperos_abiertos", icon: "🧥", name: "Roperos Abiertos" },
    { id: "zapateras", icon: "👞", name: "Zapateras" },
    { id: "espejos", icon: "🪞", name: "Espejos" },
    { id: "organizadores", icon: "📋", name: "Organizadores" },
    { id: "tocadores", icon: "💄", name: "Tocadores" },
    { id: "centros_entretenimiento", icon: "📺", name: "Centros TV" },
    { id: "escritorios", icon: "💻", name: "Escritorios" }
];

let currentFilter = "todos";

function renderFilters() {
    const filterContainer = document.getElementById("filterContainer");
    filterContainer.innerHTML = categories.map(cat => `
        <button class="filter-btn ${currentFilter === cat.id ? 'active' : ''}" data-category="${cat.id}">
            <div class="filter-icon">${cat.icon}</div>
            <div class="filter-label">${cat.name}</div>
        </button>
    `).join("");

    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            currentFilter = btn.getAttribute("data-category");
            renderFilters();
            renderCatalog();
        });
    });
}

function getCategoryName(catId) {
    const cat = categories.find(c => c.id === catId);
    return cat ? cat.name : catId;
}

function getCategoryIcon(catId) {
    const cat = categories.find(c => c.id === catId);
    return cat ? cat.icon : "✨";
}

function renderCatalog() {
    const filtered = currentFilter === "todos" 
        ? products 
        : products.filter(p => p.category === currentFilter);

    const grid = document.getElementById("catalogGrid");
    
    if (filtered.length === 0) {
        grid.innerHTML = `<div style="text-align:center; grid-column:1/-1; padding:3rem; color:#9a9aae;">✨ No encontramos productos en esta categoría... ¡pronto más novedades! ✨</div>`;
        return;
    }

    grid.innerHTML = filtered.map(product => `
        <div class="product-card" data-id="${product.id}">
            <img class="product-img" src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <span class="product-category">${getCategoryIcon(product.category)} ${getCategoryName(product.category)}</span>
                <div class="product-price">S/ ${product.price.toLocaleString()} <span>PEN</span></div>
                <div class="product-dimensions">📏 ${product.dimensions}</div>
                ${product.feature ? `<div class="product-feature">✨ ${product.feature}</div>` : ''}
                <button class="btn-detail" data-id="${product.id}">Ver detalles 🔍</button>
            </div>
        </div>
    `).join("");

    document.querySelectorAll(".btn-detail").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const id = parseInt(btn.getAttribute("data-id"));
            const product = products.find(p => p.id === id);
            if (product) openModal(product);
        });
    });

    document.querySelectorAll(".product-card").forEach(card => {
        card.addEventListener("click", (e) => {
            if (e.target.classList.contains("btn-detail")) return;
            const id = parseInt(card.getAttribute("data-id"));
            const product = products.find(p => p.id === id);
            if (product) openModal(product);
        });
    });
}

function openModal(product) {
    const modal = document.getElementById("modal");
    document.getElementById("modalTitle").textContent = product.name;
    document.getElementById("modalImg").src = product.image;
    document.getElementById("modalDetails").innerHTML = `
        <div class="modal-detail">
            <strong>💰 Precio:</strong> S/ ${product.price.toLocaleString()} PEN
        </div>
        <div class="modal-detail">
            <strong>📏 Medidas:</strong> ${product.dimensions}
        </div>
        ${product.feature ? `<div class="modal-detail"><strong>✨ Característica:</strong> ${product.feature}</div>` : ''}
        <div class="modal-detail">
            <strong>🏷️ Categoría:</strong> ${getCategoryIcon(product.category)} ${getCategoryName(product.category)}
        </div>
        <div class="modal-detail">
            <strong>🛠️ Material:</strong> Melamina de alta calidad con acabados premium
        </div>
    `;
    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

document.getElementById("modalClose").addEventListener("click", closeModal);
window.addEventListener("click", (e) => {
    if (e.target === document.getElementById("modal")) closeModal();
});

renderFilters();
renderCatalog();

// ========== FUNCIONALIDAD MENÚ HAMBURGUESA PARA CATEGORÍAS ==========
const categoriesToggle = document.getElementById('categoriesToggle');
const categoriesGrid = document.getElementById('filterContainer');

if (categoriesToggle && categoriesGrid) {
    categoriesToggle.addEventListener('click', () => {
        categoriesGrid.classList.toggle('show');
        categoriesToggle.classList.toggle('active');
    });
}