/**
 * Condomart - Application Frontend Execution Layer
 * Architectural Target: Vanilla Modular Reactive Functions
 */

// Production Data Layer Modeling Mimicking Arogga Structure Data Outlines
const DEFAULT_CATALOGUE = [
    // ---- Condoms ----
    {
        id: "p1",
        title: "Durex Performa Condoms (3s Pack)",
        brand: "Durex",
        category: "condoms",
        price: 180,
        icon: "fas fa-layer-group",
        image: "images/condom-plain.svg",
        stock: 25
    },
    {
        id: "p2",
        title: "Sensation Chocolate Ribbed (10s Pack)",
        brand: "Sensation",
        category: "condoms",
        price: 220,
        icon: "fas fa-layer-group",
        image: "images/condom-ribbed.svg",
        stock: 0
    },
    {
        id: "p6",
        title: "Skore Textured Dot Condoms (3s)",
        brand: "Skore",
        category: "condoms",
        price: 150,
        icon: "fas fa-layer-group",
        image: "images/condom-dot.svg",
        stock: 18
    },
    {
        id: "p9",
        title: "Durex RealFeel Ultra Thin Condoms (10s)",
        brand: "Durex",
        category: "condoms",
        price: 320,
        icon: "fas fa-layer-group",
        image: "images/condom-thin.svg",
        stock: 12
    },
    {
        id: "p10",
        title: "Moods Ultra Dot Condoms (12s)",
        brand: "Moods",
        category: "condoms",
        price: 260,
        icon: "fas fa-layer-group",
        image: "images/condom-dot.svg",
        stock: 30
    },
    {
        id: "p11",
        title: "KamaSutra LongLast Condoms (3s)",
        brand: "KamaSutra",
        category: "condoms",
        price: 160,
        icon: "fas fa-layer-group",
        image: "images/condom-plain.svg",
        stock: 22
    },
    {
        id: "p12",
        title: "Skore Condom Variety Pack (6s)",
        brand: "Skore",
        category: "condoms",
        price: 250,
        icon: "fas fa-layer-group",
        image: "images/condom-variety.svg",
        stock: 15
    },
    // ---- Lubricants & Gels ----
    {
        id: "p3",
        title: "K-Y Jelly Personal Lubricant 50g",
        brand: "K-Y",
        category: "lubricants",
        price: 450,
        icon: "fas fa-water",
        image: "images/lube-bottle.svg",
        stock: 20
    },
    {
        id: "p7",
        title: "Durex Play Saucy Strawberry Lube 50ml",
        brand: "Durex",
        category: "lubricants",
        price: 580,
        icon: "fas fa-water",
        image: "images/lube-bottle.svg",
        stock: 17
    },
    {
        id: "p13",
        title: "Durex Play Massage 2-in-1 Lube 200ml",
        brand: "Durex",
        category: "lubricants",
        price: 850,
        icon: "fas fa-water",
        image: "images/lube-massage.svg",
        stock: 10
    },
    {
        id: "p14",
        title: "Astroglide Water-Based Lubricant 100ml",
        brand: "Astroglide",
        category: "lubricants",
        price: 720,
        icon: "fas fa-water",
        image: "images/lube-water.svg",
        stock: 14
    },
    {
        id: "p15",
        title: "Sliquid Organics Natural Lube 125ml",
        brand: "Sliquid",
        category: "lubricants",
        price: 980,
        icon: "fas fa-water",
        image: "images/lube-water.svg",
        stock: 9
    },
    {
        id: "p16",
        title: "Sliquid Silk Silicone Lube 125ml",
        brand: "Sliquid",
        category: "lubricants",
        price: 1050,
        icon: "fas fa-water",
        image: "images/lube-silk.svg",
        stock: 8
    },
    {
        id: "p17",
        title: "Pleasure Intimate Gel Warming 50ml",
        brand: "Intima",
        category: "lubricants",
        price: 560,
        icon: "fas fa-water",
        image: "images/lube-warming.svg",
        stock: 11
    },
    // ---- Contraceptive & Pregnancy Test Kits ----
    {
        id: "p32",
        title: "i-know Pregnancy Test Kit (1s)",
        brand: "i-know",
        category: "contraceptive",
        price: 120,
        icon: "fas fa-vial",
        image: "images/test-kit.svg",
        stock: 40
    },
    {
        id: "p33",
        title: "Pregakem Pregnancy Test Strip (3s)",
        brand: "Pregakem",
        category: "contraceptive",
        price: 180,
        icon: "fas fa-vial",
        image: "images/test-kit.svg",
        stock: 35
    },
    {
        id: "p34",
        title: "Trust Contraceptive Diaphragm Kit",
        brand: "Trust",
        category: "contraceptive",
        price: 650,
        icon: "fas fa-shield-alt",
        image: "images/contraceptive.svg",
        stock: 13
    },
    {
        id: "p35",
        title: "Emergency Contraceptive Pill (1s)",
        brand: "Plan B",
        category: "contraceptive",
        price: 350,
        icon: "fas fa-shield-alt",
        image: "images/contraceptive.svg",
        stock: 16
    },
    // ---- Delay Sprays ----
    {
        id: "p36",
        title: "Stud 100 Delay Spray for Men 12ml",
        brand: "Stud 100",
        category: "delay",
        price: 950,
        icon: "fas fa-spray-can",
        image: "images/delay-spray.svg",
        stock: 7
    },
    {
        id: "p37",
        title: "Promescent Climax Control Spray 30ml",
        brand: "Promescent",
        category: "delay",
        price: 1450,
        icon: "fas fa-spray-can",
        image: "images/delay-spray.svg",
        stock: 19
    },
    {
        id: "p38",
        title: "Durex Play Longer Delay Spray 20ml",
        brand: "Durex",
        category: "delay",
        price: 780,
        icon: "fas fa-spray-can",
        image: "images/delay-spray.svg",
        stock: 21
    },
    // ---- Pills ----
    {
        id: "p39",
        title: "Sildenafil 50mg Tablets (4s)",
        brand: "Generic",
        category: "pills",
        price: 600,
        icon: "fas fa-pills",
        image: "images/pill.svg",
        stock: 26
    },
    {
        id: "p40",
        title: "Tadalafil 10mg Tablets (2s)",
        brand: "Generic",
        category: "pills",
        price: 720,
        icon: "fas fa-pills",
        image: "images/pill.svg",
        stock: 23
    },
    {
        id: "p5",
        title: "Panax Ginseng Vitality Capsules (30s)",
        brand: "NutraLife",
        category: "pills",
        price: 1200,
        icon: "fas fa-capsules",
        image: "images/pill.svg",
        stock: 14
    }
];

// Category Representative Image Mapping (locally stored, discreet generic imagery)
const CATEGORY_IMAGES = {
    "condoms":       "images/condom-plain.svg",
    "lubricants":    "images/lube-bottle.svg",
    "contraceptive": "images/contraceptive.svg",
    "delay":         "images/delay-spray.svg",
    "pills":         "images/pill.svg"
};

function getProductImage(product) {
    if (product.image) return product.image;
    return CATEGORY_IMAGES[product.category] || "images/condom-plain.svg";
}

// Product persistence (admin can add/edit/delete; falls back to defaults)
const PRODUCTS_STORAGE_KEY = "condomart_products";
const VALID_CATEGORIES = ["condoms", "lubricants", "contraceptive", "delay", "pills"];

function loadProducts() {
    try {
        const stored = JSON.parse(localStorage.getItem(PRODUCTS_STORAGE_KEY));
        if (Array.isArray(stored) && stored.length) {
            // Drop any products whose category is no longer valid (cleanup after category changes)
            const cleaned = stored.filter(p => VALID_CATEGORIES.includes(p.category));
            return cleaned.length ? cleaned : JSON.parse(JSON.stringify(DEFAULT_CATALOGUE));
        }
    } catch (e) {}
    return JSON.parse(JSON.stringify(DEFAULT_CATALOGUE));
}

function saveProducts(products) {
    localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(products));
}

// Wishlist persistence (account-scoped fallback to device)
const WISHLIST_KEY = "condomart_wishlist";

function loadWishlist() {
    try { return JSON.parse(localStorage.getItem(WISHLIST_KEY)) || []; }
    catch (e) { return []; }
}
function saveWishlist(list) {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(list));
}
function isInWishlist(id) {
    return loadWishlist().includes(id);
}
function toggleWishlist(id) {
    let list = loadWishlist();
    if (list.includes(id)) list = list.filter(x => x !== id);
    else list.push(id);
    saveWishlist(list);
    return list.includes(id);
}
function renderWishlistBadge() {
    const badge = document.getElementById("wishlistBadge");
    if (!badge) return;
    const count = loadWishlist().length;
    badge.textContent = count;
    badge.style.display = count > 0 ? "flex" : "none";
}

// Application Global Reactive State Layout
let PRODUCT_CATALOGUE = loadProducts();
let cartState = {
    items: {} // keyed by product id -> { product, qty }
};

// Order persistence layer for admin panel
const ORDERS_STORAGE_KEY = "condomart_orders";

function loadOrders() {
    try {
        return JSON.parse(localStorage.getItem(ORDERS_STORAGE_KEY)) || [];
    } catch (e) {
        return [];
    }
}

function saveOrder(order) {
    const orders = loadOrders();
    orders.push(order);
    localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));
}

// Initial DOM Execution Context Registration
document.addEventListener("DOMContentLoaded", () => {
    PRODUCT_CATALOGUE = loadProducts();
    initAppNavigation();
    initCatalogView(PRODUCT_CATALOGUE);
    initInteractiveSearch();
    initCategoryFilters();
    initCartPanel();
    initQuickView();
    initToast();
    initCheckout();
    initWishlistPanel();
    initMobileNav();
    renderCart();
    renderWishlistBadge();
});

/**
 * Navigation Structural Interaction Hooks
 */
function initAppNavigation() {
    const header = document.getElementById("main-header");
    const mobileToggle = document.getElementById("mobileMenuToggle");
    const mainNav = document.getElementById("mainNav");

    // Sticky Scroll Observer Interaction Logic
    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });

    // Mobile Hamburger Dropdown Action Drawer Interface Menu Hook
    mobileToggle.addEventListener("click", () => {
        const isOpen = mainNav.classList.toggle("open");
        mobileToggle.setAttribute("aria-expanded", isOpen);
        
        // Dynamically shift icons for UX feedback
        const icon = mobileToggle.querySelector("i");
        if(isOpen) {
            icon.className = "fas fa-times";
        } else {
            icon.className = "fas fa-bars";
        }
    });
}

/**
 * Dynamic View Rendering Engine Layer for Products Matrix Layout
 */
function initCatalogView(products) {
    const targetGrid = document.getElementById("productsGrid");
    const counterLabel = document.getElementById("resultsCount");
    
    // Safety verification check bounds validation handling
    if (!targetGrid) return;

    // Reset loop views content text HTML node string buffer
    targetGrid.innerHTML = "";

    if (products.length === 0) {
        targetGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--color-text-muted);">
                <i class="fas fa-search-minus" style="font-size: 3rem; margin-bottom: 10px;"></i>
                <p>No matching wellness products found. Please try refining your query criteria.</p>
            </div>
        `;
        counterLabel.textContent = "0 products found";
        return;
    }

    counterLabel.textContent = `Showing ${products.length} verified item(s)`;

    // Process collection structural mapping array loops
    products.forEach(product => {
        const card = document.createElement("article");
        card.className = "product-card";
        card.setAttribute("data-id", product.id);

        const stockBadge = getStockBadge(product.stock);
        const inWishlist = isInWishlist(product.id);

        card.innerHTML = `
            ${stockBadge}
            <button class="wishlist-btn ${inWishlist ? 'active' : ''}" data-wish="${product.id}" aria-label="Save to wishlist">
                <i class="${inWishlist ? 'fas' : 'far'} fa-heart"></i>
            </button>
            <div class="product-image-container" aria-hidden="true">
                <img src="${getProductImage(product)}" alt="${product.title}" loading="lazy">
            </div>
            <span class="product-brand">${product.brand}</span>
            <h3 class="product-title">${product.title}</h3>
            <div class="product-meta-row">
                <span class="product-price">৳ ${product.price}</span>
                <span class="discreet-badge" title="Guaranteed Secure Outer Packaging">
                    <i class="fas fa-user-secret"></i> Private Box
                </span>
            </div>
            <div class="product-card-actions">
                <button class="btn-add-cart" data-add="${product.id}" ${product.stock <= 0 ? 'disabled' : ''}>
                    ${product.stock <= 0 ? 'Out of Stock' : 'Add to Cart'}
                </button>
                <button class="btn-quickview" data-view="${product.id}" aria-label="Quick view">
                    <i class="fas fa-eye"></i>
                </button>
            </div>
        `;
        targetGrid.appendChild(card);
    });
}

function getStockBadge(stock) {
    if (stock <= 0) return `<span class="stock-badge out">Out of Stock</span>`;
    if (stock <= 10) return `<span class="stock-badge low">Only ${stock} left</span>`;
    return `<span class="stock-badge in">In Stock</span>`;
}

/**
 * Active Client-side Simulated Search Architecture Engine
 */
function initInteractiveSearch() {
    const input = document.getElementById("searchInput");
    if (!input) return;

    input.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        
        const filtered = PRODUCT_CATALOGUE.filter(product => {
            return product.title.toLowerCase().includes(query) || 
                   product.brand.toLowerCase().includes(query) ||
                   product.category.toLowerCase().includes(query);
        });

        // Synchronize Active Filters View
        resetNavActiveState();
        initCatalogView(filtered);
    });
}

/**
 * Taxonomy Component Filter Interactions Configuration Hooks Loop
 */
function initCategoryFilters() {
    const links = document.querySelectorAll(".nav-item");
    const structuralCards = document.querySelectorAll(".category-card");

    // Unified dispatch listener router routine processing unit
    const handleFilterSelection = (category) => {
        if (!category) return;

        // Reset query strings field metrics safely
        const input = document.getElementById("searchInput");
        if(input) input.value = "";

        if (category === "all") {
            initCatalogView(PRODUCT_CATALOGUE);
        } else {
            const collection = PRODUCT_CATALOGUE.filter(p => p.category === category);
            initCatalogView(collection);
        }
    };

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            links.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
            
            handleFilterSelection(link.getAttribute("data-category"));
            
            // Auto close mobile layout drawer on item chosen interaction selection loops
            document.getElementById("mainNav").classList.remove("open");
            const toggleIcon = document.getElementById("mobileMenuToggle").querySelector("i");
            if(toggleIcon) toggleIcon.className = "fas fa-bars";

            // Seamlessly scroll user viewport focus onto the filtered products
            document.getElementById("products-showcase").scrollIntoView({ behavior: 'smooth' });
        });
    });

    structuralCards.forEach(card => {
        card.addEventListener("click", () => {
            const activeCategory = card.getAttribute("data-category");
            
            // Synchronize Secondary Bar Active State indicator links UI highlights
            links.forEach(l => {
                if(l.getAttribute("data-category") === activeCategory) {
                    l.classList.add("active");
                } else {
                    l.classList.remove("active");
                }
            });

            handleFilterSelection(activeCategory);
            
            // Seamlessly scroll user viewport focus coordinates directly onto viewport elements
            document.getElementById("products-showcase").scrollIntoView({ behavior: 'smooth' });
        });
    });
}

function resetNavActiveState() {
    const links = document.querySelectorAll(".nav-item");
    links.forEach(l => {
        if(l.getAttribute("data-category") === "all") {
            l.classList.add("active");
        } else {
            l.classList.remove("active");
        }
    });
}

/**
 * Shopping Cart Panel Interaction Layer
 */
function initCartPanel() {
    const cartButton = document.getElementById("cartButton");
    const panel = document.getElementById("cartPanel");
    const overlay = document.getElementById("cartOverlay");
    const closeBtn = document.getElementById("cartClose");
    const checkoutBtn = document.getElementById("cartCheckout");

    const openPanel = () => {
        panel.classList.add("open");
        overlay.classList.add("open");
        panel.setAttribute("aria-hidden", "false");
    };
    const closePanel = () => {
        panel.classList.remove("open");
        overlay.classList.remove("open");
        panel.setAttribute("aria-hidden", "true");
    };

    cartButton.addEventListener("click", openPanel);
    overlay.addEventListener("click", closePanel);
    closeBtn.addEventListener("click", closePanel);

    // Delegate add-to-cart clicks on dynamically rendered product cards
    document.getElementById("productsGrid").addEventListener("click", (e) => {
        const addBtn = e.target.closest("[data-add]");
        if (addBtn) {
            if (addBtn.disabled) return;
            executeCartIncrement(addBtn.getAttribute("data-add"));
            openPanel();
            showToast("Added to basket");
            return;
        }
        const wishBtn = e.target.closest("[data-wish]");
        if (wishBtn) {
            const id = wishBtn.getAttribute("data-wish");
            const active = toggleWishlist(id);
            wishBtn.classList.toggle("active", active);
            wishBtn.querySelector("i").className = active ? "fas fa-heart" : "far fa-heart";
            renderWishlistBadge();
            showToast(active ? "Saved to wishlist" : "Removed from wishlist");
            return;
        }
        const viewBtn = e.target.closest("[data-view]");
        if (viewBtn) {
            openQuickView(viewBtn.getAttribute("data-view"));
        }
    });

    checkoutBtn.addEventListener("click", () => {
        const ids = Object.keys(cartState.items);
        if (ids.length === 0) return;
        openCheckout();
    });
}

/**
 * Render Cart Panel Contents & Totals
 */
function renderCart() {
    const body = document.getElementById("cartPanelBody");
    const badge = document.getElementById("cartBadge");
    const link = document.getElementById("cartButton");
    const totalEl = document.getElementById("cartTotal");

    const ids = Object.keys(cartState.items);
    const totalQty = ids.reduce((sum, id) => sum + cartState.items[id].qty, 0);
    const totalPrice = ids.reduce((sum, id) => sum + cartState.items[id].qty * cartState.items[id].product.price, 0);

    if (badge) badge.textContent = totalQty;
    if (link) link.setAttribute("aria-label", `Shopping Basket, ${totalQty} items`);
    if (totalEl) totalEl.textContent = "৳ " + totalPrice;

    // Micro visual feedback on badge
    if (badge) {
        badge.style.transform = "scale(1.3)";
        setTimeout(() => { badge.style.transform = "scale(1)"; }, 300);
    }

    if (ids.length === 0) {
        body.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-basket"></i>
                <p>Your basket is empty.</p>
            </div>
        `;
        return;
    }

    body.innerHTML = ids.map(id => {
        const entry = cartState.items[id];
        const p = entry.product;
        return `
            <div class="cart-item" data-item="${id}">
                <div class="cart-item-icon"><img src="${getProductImage(p)}" alt="${p.title}" loading="lazy"></div>
                <div class="cart-item-info">
                    <span class="cart-item-brand">${p.brand}</span>
                    <h4 class="cart-item-title">${p.title}</h4>
                    <span class="cart-item-price">৳ ${p.price} each</span>
                </div>
                <div class="cart-item-controls">
                    <button class="qty-btn" data-dec="${id}" aria-label="Decrease quantity">−</button>
                    <span class="qty-value">${entry.qty}</span>
                    <button class="qty-btn" data-inc="${id}" aria-label="Increase quantity">+</button>
                </div>
                <div class="cart-item-subtotal">৳ ${p.price * entry.qty}</div>
            </div>
        `;
    }).join("");

    body.querySelectorAll("[data-inc]").forEach(btn => {
        btn.addEventListener("click", () => executeCartIncrement(btn.getAttribute("data-inc")));
    });
    body.querySelectorAll("[data-dec]").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-dec");
            if (cartState.items[id]) {
                cartState.items[id].qty -= 1;
                if (cartState.items[id].qty <= 0) delete cartState.items[id];
                renderCart();
            }
        });
    });
}

function initWishlistPanel() {
    const btn = document.getElementById("wishlistButton");
    const panel = document.getElementById("wishlistPanel");
    const overlay = document.getElementById("wishlistOverlay");
    const closeBtn = document.getElementById("wishlistClose");
    if (!btn || !panel) return;

    const open = () => { renderWishlistPanel(); panel.classList.add("open"); overlay.classList.add("open"); panel.setAttribute("aria-hidden","false"); };
    const close = () => { panel.classList.remove("open"); overlay.classList.remove("open"); panel.setAttribute("aria-hidden","true"); };

    btn.addEventListener("click", open);
    overlay.addEventListener("click", close);
    closeBtn.addEventListener("click", close);

    document.getElementById("wishlistPanelBody").addEventListener("click", (e) => {
        const add = e.target.closest("[data-wadd]");
        if (add) {
            executeCartIncrement(add.getAttribute("data-wadd"));
            const cp = document.getElementById("cartPanel");
            cp.classList.add("open"); document.getElementById("cartOverlay").classList.add("open");
            showToast("Added to basket");
            open();
            return;
        }
        const rem = e.target.closest("[data-wrem]");
        if (rem) {
            const id = rem.getAttribute("data-wrem");
            toggleWishlist(id);
            renderWishlistPanel(); renderWishlistBadge();
            // refresh product cards wishlist state
            document.querySelectorAll(`[data-wish="${id}"]`).forEach(b => {
                b.classList.remove("active"); b.querySelector("i").className = "far fa-heart";
            });
        }
    });
}

function renderWishlistPanel() {
    const body = document.getElementById("wishlistPanelBody");
    if (!body) return;
    const list = loadWishlist();
    if (list.length === 0) {
        body.innerHTML = `<div class="cart-empty"><i class="fas fa-heart"></i><p>Your wishlist is empty.</p></div>`;
        return;
    }
    body.innerHTML = list.map(id => {
        const p = PRODUCT_CATALOGUE.find(x => x.id === id);
        if (!p) return "";
        return `
            <div class="cart-item" data-item="${id}">
                <div class="cart-item-icon"><img src="${getProductImage(p)}" alt="${p.title}"></div>
                <div class="cart-item-info">
                    <span class="cart-item-brand">${p.brand}</span>
                    <h4 class="cart-item-title">${p.title}</h4>
                    <span class="cart-item-price">৳ ${p.price}</span>
                </div>
                <div class="cart-item-controls" style="grid-area:controls;">
                    <button class="qty-btn" data-wadd="${id}"><i class="fas fa-cart-plus"></i></button>
                    <button class="qty-btn" data-wrem="${id}"><i class="fas fa-trash"></i></button>
                </div>
            </div>`;
    }).join("");
}

function initMobileNav() {
    const home = document.getElementById("mbnHome");
    const wish = document.getElementById("mbnWish");
    const cart = document.getElementById("mbnCart");
    const acc = document.getElementById("mbnAcc");
    if (home) home.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    if (wish) wish.addEventListener("click", () => document.getElementById("wishlistButton").click());
    if (cart) cart.addEventListener("click", () => {
        const cp = document.getElementById("cartPanel");
        cp.classList.add("open"); document.getElementById("cartOverlay").classList.add("open");
    });
    if (acc) acc.addEventListener("click", () => document.getElementById("accountButton").click());
}
// Delivery areas: Chattogram City Corporation (main town) = 50tk, other upazilas/unions = 80tk
const MAIN_TOWN_FEE = 50;
const OUTER_FEE = 80;
const DELIVERY_AREAS = [
    // --- Chattogram City Corporation (Main Town, 41 wards) ---
    { id: "ccc-kotwali", name: "Kotwali (Old Town)", fee: MAIN_TOWN_FEE },
    { id: "ccc-pahartali", name: "Pahartali", fee: MAIN_TOWN_FEE },
    { id: "ccc-chawkbazar", name: "Chawkbazar", fee: MAIN_TOWN_FEE },
    { id: "ccc-double-mooring", name: "Double Mooring", fee: MAIN_TOWN_FEE },
    { id: "ccc-port", name: "Port (Bandar)", fee: MAIN_TOWN_FEE },
    { id: "ccc-panchlaish", name: "Panchlaish", fee: MAIN_TOWN_FEE },
    { id: "ccc-khulshi", name: "Khulshi", fee: MAIN_TOWN_FEE },
    { id: "ccc-halishahar", name: "Halishahar", fee: MAIN_TOWN_FEE },
    { id: "ccc-bakolia", name: "Bakolia", fee: MAIN_TOWN_FEE },
    { id: "ccc-bayazid", name: "Bayazid Bostami", fee: MAIN_TOWN_FEE },
    { id: "ccc-chandgaon", name: "Chandgaon", fee: MAIN_TOWN_FEE },
    { id: "ccc-sitakunda", name: "Sitakunda (CCC)", fee: MAIN_TOWN_FEE },
    { id: "ccc-patenga", name: "Patenga", fee: MAIN_TOWN_FEE },
    { id: "ccc-epz", name: "EPZ / Karnaphuli", fee: MAIN_TOWN_FEE },
    { id: "ccc-agrabad", name: "Agrabad", fee: MAIN_TOWN_FEE },
    { id: "ccc-gec", name: "GEC Circle", fee: MAIN_TOWN_FEE },
    { id: "ccc-nasirabad", name: "Nasirabad", fee: MAIN_TOWN_FEE },
    { id: "ccc-lalkhanbazar", name: "Lalkhan Bazar", fee: MAIN_TOWN_FEE },
    { id: "ccc-reazuddin", name: "Reazuddin Bazar", fee: MAIN_TOWN_FEE },
    { id: "ccc-newmarket", name: "New Market / Jubilee Rd", fee: MAIN_TOWN_FEE },
    { id: "ccc-kadam-mobara", name: "Kadam Mubarak", fee: MAIN_TOWN_FEE },
    { id: "ccc-akbarshah", name: "Akbar Shah", fee: MAIN_TOWN_FEE },
    { id: "ccc-mohra", name: "Mohra", fee: MAIN_TOWN_FEE },
    { id: "ccc-oxyzen", name: "Oxygen", fee: MAIN_TOWN_FEE },
    { id: "ccc-sadarghat", name: "Sadarghat", fee: MAIN_TOWN_FEE },
    { id: "ccc-mehedibag", name: "Mehedibag", fee: MAIN_TOWN_FEE },
    { id: "ccc-collegegate", name: "College Gate", fee: MAIN_TOWN_FEE },
    { id: "ccc-kaziromi", name: "Kazi Romi Rahman Goli", fee: MAIN_TOWN_FEE },
    { id: "ccc-foyzabad", name: "Foyzabad", fee: MAIN_TOWN_FEE },
    { id: "ccc-banshbaria", name: "Banshbaria", fee: MAIN_TOWN_FEE },
    { id: "ccc-sikondar", name: "Sikondar", fee: MAIN_TOWN_FEE },
    { id: "ccc-barak", name: "Barak", fee: MAIN_TOWN_FEE },
    { id: "ccc-jaliakoli", name: "Jaliakoli", fee: MAIN_TOWN_FEE },
    { id: "ccc-saralia", name: "Saralia", fee: MAIN_TOWN_FEE },
    { id: "ccc-sonali", name: "Sonali Resort", fee: MAIN_TOWN_FEE },
    { id: "ccc-sikondarpur", name: "Sikondarpur", fee: MAIN_TOWN_FEE },
    { id: "ccc-kadamtali", name: "Kadamtali", fee: MAIN_TOWN_FEE },
    { id: "ccc-bagmoniram", name: "Bagmoniram", fee: MAIN_TOWN_FEE },
    { id: "ccc-profur", name: "Profur Ghona", fee: MAIN_TOWN_FEE },
    { id: "ccc-barkol", name: "Barkol", fee: MAIN_TOWN_FEE },
    { id: "ccc-baluchara", name: "Baluchara", fee: MAIN_TOWN_FEE },

    // --- Municipalities (Outer, 80tk) ---
    { id: "mun-raozan", name: "Raozan Municipality", fee: OUTER_FEE },
    { id: "mun-mirsharai", name: "Mirsharai Municipality", fee: OUTER_FEE },
    { id: "mun-sandwip", name: "Sandwip Municipality", fee: OUTER_FEE },
    { id: "mun-sitakunda", name: "Sitakunda Municipality", fee: OUTER_FEE },
    { id: "mun-hathazari", name: "Hathazari Municipality", fee: OUTER_FEE },
    { id: "mun-fatikchhari", name: "Fatikchhari Municipality", fee: OUTER_FEE },
    { id: "mun-banskhali", name: "Banskhali Municipality", fee: OUTER_FEE },
    { id: "mun-boalkhali", name: "Boalkhali Municipality", fee: OUTER_FEE },
    { id: "mun-patiya", name: "Patiya Municipality", fee: OUTER_FEE },
    { id: "mun-anowara", name: "Anowara Municipality", fee: OUTER_FEE },
    { id: "mun-lohagara", name: "Lohagara Municipality", fee: OUTER_FEE },
    { id: "mun-satkania", name: "Satkania Municipality", fee: OUTER_FEE },
    { id: "mun-chandanaish", name: "Chandanaish Municipality", fee: OUTER_FEE },

    // --- Upazilas / Unions (Outer, 80tk) ---
    { id: "up-raozan", name: "Raozan Upazila", fee: OUTER_FEE },
    { id: "up-mirsharai", name: "Mirsharai Upazila", fee: OUTER_FEE },
    { id: "up-sandwip", name: "Sandwip Upazila", fee: OUTER_FEE },
    { id: "up-sitakunda", name: "Sitakunda Upazila", fee: OUTER_FEE },
    { id: "up-hathazari", name: "Hathazari Upazila", fee: OUTER_FEE },
    { id: "up-fatikchhari", name: "Fatikchhari Upazila", fee: OUTER_FEE },
    { id: "up-banskhali", name: "Banskhali Upazila", fee: OUTER_FEE },
    { id: "up-boalkhali", name: "Boalkhali Upazila", fee: OUTER_FEE },
    { id: "up-patiya", name: "Patiya Upazila", fee: OUTER_FEE },
    { id: "up-anowara", name: "Anowara Upazila", fee: OUTER_FEE },
    { id: "up-lohagara", name: "Lohagara Upazila", fee: OUTER_FEE },
    { id: "up-satkania", name: "Satkania Upazila", fee: OUTER_FEE },
    { id: "up-chandanaish", name: "Chandanaish Upazila", fee: OUTER_FEE },
    { id: "up-karnafuli", name: "Karnafuli Upazila", fee: OUTER_FEE },
    { id: "union-raozan", name: "Raozan Unions", fee: OUTER_FEE },
    { id: "union-hathazari", name: "Hathazari Unions", fee: OUTER_FEE },
    { id: "union-patiya", name: "Patiya Unions", fee: OUTER_FEE },
    { id: "union-satkania", name: "Satkania Unions", fee: OUTER_FEE },
    { id: "union-anowara", name: "Anowara Unions", fee: OUTER_FEE },
    { id: "union-mirsharai", name: "Mirsharai Unions", fee: OUTER_FEE }
];
const LOCATION_KEY = "condomart_location";

function getLocation() {
    try {
        const l = JSON.parse(localStorage.getItem(LOCATION_KEY));
        if (l && l.id) return l;
    } catch (e) {}
    return { id: "ccc-gec", name: "GEC Circle", fee: MAIN_TOWN_FEE };
}
function saveLocation(loc) { localStorage.setItem(LOCATION_KEY, JSON.stringify(loc)); }

function updateLocationDisplays() {
    const cur = getLocation();
    const nameEls = document.querySelectorAll(".loc-name");
    nameEls.forEach(el => el.textContent = cur.name);
    const feeTop = document.getElementById("locFeeTop");
    if (feeTop) feeTop.textContent = "৳" + cur.fee;
    const areaName = document.getElementById("deliveryAreaName");
    if (areaName) areaName.textContent = cur.name;
    const feeEl = document.getElementById("deliveryFee");
    if (feeEl) feeEl.textContent = "৳" + cur.fee;
}

function initLocationMenu(cfg) {
    const btn = document.getElementById(cfg.btn);
    const menu = document.getElementById(cfg.menu);
    const list = document.getElementById(cfg.list);
    const searchInput = document.getElementById(cfg.search);
    if (!btn || !menu) return;

    const renderList = (filter = "") => {
        const cur = getLocation();
        const q = filter.trim().toLowerCase();
        const areas = DELIVERY_AREAS.filter(a => a.name.toLowerCase().includes(q));
        if (areas.length === 0) {
            list.innerHTML = `<div class="loc-empty">No area found.</div>`;
            return;
        }
        list.innerHTML = areas.map(a =>
            `<button class="loc-option ${a.id === cur.id ? 'active' : ''}" data-loc="${a.id}">
                <span>${a.name}</span> <span class="loc-opt-fee">৳${a.fee}</span>
            </button>`
        ).join("");
    };

    const render = () => {
        // sync this instance's button label + fee
        const cur = getLocation();
        const nameEl = btn.querySelector(".loc-name");
        const feeEl = btn.querySelector(".loc-fee");
        if (nameEl) nameEl.textContent = cur.name;
        if (feeEl) feeEl.textContent = "৳" + cur.fee;
        if (list) renderList(searchInput ? searchInput.value : "");
    };
    render();

    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        menu.classList.toggle("open");
        if (menu.classList.contains("open") && searchInput) setTimeout(() => searchInput.focus(), 50);
    });
    if (searchInput) {
        searchInput.addEventListener("input", (e) => renderList(e.target.value));
        searchInput.addEventListener("click", (e) => e.stopPropagation());
    }
    menu.addEventListener("click", (e) => {
        const opt = e.target.closest("[data-loc]");
        if (!opt) return;
        const area = DELIVERY_AREAS.find(a => a.id === opt.getAttribute("data-loc"));
        saveLocation(area);
        render();
        menu.classList.remove("open");
        updateLocationDisplays();
        updateCheckoutTotals();
    });
    document.addEventListener("click", () => menu.classList.remove("open"));
}

// Legacy single entry-point kept for backward compatibility
function initLocationSelector() {
    initLocationMenu({ btn: "locationBtn", menu: "locationMenu", list: "locationList", search: "locationSearch" });
}

/* ==========================================================================
   Toast Notifications
   ========================================================================== */
function initToast() {
    if (!document.getElementById("toastContainer")) {
        const el = document.createElement("div");
        el.id = "toastContainer";
        el.className = "toast-container";
        document.body.appendChild(el);
    }
}
function showToast(message) {
    const container = document.getElementById("toastContainer");
    if (!container) return;
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    container.appendChild(toast);
    setTimeout(() => toast.classList.add("show"), 10);
    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 300);
    }, 2200);
}

/* ==========================================================================
   Quick View Modal
   ========================================================================== */
function initQuickView() {
    const modal = document.getElementById("quickViewModal");
    const closeBtn = document.getElementById("quickViewClose");
    if (!modal) return;
    closeBtn.addEventListener("click", () => modal.classList.remove("open"));
    modal.addEventListener("click", (e) => { if (e.target === modal) modal.classList.remove("open"); });
}
function openQuickView(id) {
    const product = PRODUCT_CATALOGUE.find(p => p.id === id);
    if (!product) return;
    const modal = document.getElementById("quickViewModal");
    const desc = product.description || `${product.brand} ${product.title} — delivered in a 100% discreet, unbranded box. Genuine product with confidential billing.`;
    modal.querySelector("#qvImage").src = getProductImage(product);
    modal.querySelector("#qvBrand").textContent = product.brand;
    modal.querySelector("#qvTitle").textContent = product.title;
    modal.querySelector("#qvPrice").textContent = "৳ " + product.price;
    modal.querySelector("#qvDesc").textContent = desc;
    modal.querySelector("#qvStock").innerHTML = getStockBadge(product.stock);
    const addBtn = modal.querySelector("#qvAdd");
    addBtn.disabled = product.stock <= 0;
    addBtn.textContent = product.stock <= 0 ? "Out of Stock" : "Add to Cart";
    addBtn.onclick = () => {
        if (product.stock <= 0) return;
        executeCartIncrement(id);
        const panel = document.getElementById("cartPanel");
        panel.classList.add("open");
        document.getElementById("cartOverlay").classList.add("open");
        panel.setAttribute("aria-hidden", "false");
        modal.classList.remove("open");
        showToast("Added to basket");
    };
    modal.classList.add("open");
}

/* ==========================================================================
   Checkout Flow (name / phone / address + COD)
   ========================================================================== */
function cartSubtotal() {
    const ids = Object.keys(cartState.items);
    return ids.reduce((sum, id) => sum + cartState.items[id].qty * cartState.items[id].product.price, 0);
}
function updateCheckoutTotals() {
    const sub = cartSubtotal();
    const loc = getLocation();
    const total = sub + (sub > 0 ? loc.fee : 0);
    const subEl = document.getElementById("checkoutSubtotal");
    const feeEl = document.getElementById("checkoutFee");
    const totEl = document.getElementById("checkoutTotal");
    if (subEl) subEl.textContent = "৳ " + sub;
    if (feeEl) feeEl.textContent = "৳ " + (sub > 0 ? loc.fee : 0);
    if (totEl) totEl.textContent = "৳ " + total;
}
function openCheckout() {
    const modal = document.getElementById("checkoutModal");
    if (!modal) return;
    const acc = getAccount();
    if (acc) {
        const nameEl = document.getElementById("coName");
        const emailEl = document.getElementById("coEmail");
        if (nameEl && !nameEl.value) nameEl.value = acc.name;
        if (emailEl && !emailEl.value) emailEl.value = acc.email;
    }
    const loc = getLocation();
    const coArea = document.getElementById("coArea");
    if (coArea) coArea.textContent = loc.name;
    renderCheckoutItems();
    updateCheckoutTotals();
    modal.classList.add("open");
}
function renderCheckoutItems() {
    const wrap = document.getElementById("checkoutItems");
    if (!wrap) return;
    const ids = Object.keys(cartState.items);
    wrap.innerHTML = ids.map(id => {
        const e = cartState.items[id];
        return `<div class="co-item"><span>${e.product.title} × ${e.qty}</span><span>৳ ${e.product.price * e.qty}</span></div>`;
    }).join("");
}
function initCheckout() {
    const modal = document.getElementById("checkoutModal");
    const closeBtn = document.getElementById("checkoutClose");
    const form = document.getElementById("checkoutForm");
    if (!modal) return;
    closeBtn.addEventListener("click", () => modal.classList.remove("open"));
    modal.addEventListener("click", (e) => { if (e.target === modal) modal.classList.remove("open"); });

    // Delivery location selector inside the checkout (order confirm time)
    initLocationMenu({ btn: "checkoutLocBtn", menu: "checkoutLocationMenu", list: "checkoutLocationList", search: "checkoutLocationSearch" });

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const ids = Object.keys(cartState.items);
        if (ids.length === 0) return;

        const loc = getLocation();
        const lines = ids.map(id => {
            const entry = cartState.items[id];
            return {
                id: entry.product.id,
                title: entry.product.title,
                brand: entry.product.brand,
                price: entry.product.price,
                qty: entry.qty,
                subtotal: entry.product.price * entry.qty
            };
        });
        const subtotal = lines.reduce((sum, l) => sum + l.subtotal, 0);
        const total = subtotal + loc.fee;

        // Decrement stock
        lines.forEach(l => {
            const prod = PRODUCT_CATALOGUE.find(p => p.id === l.id);
            if (prod) prod.stock = Math.max(0, prod.stock - l.qty);
        });
        saveProducts(PRODUCT_CATALOGUE);

        const order = {
            id: "ORD-" + Date.now(),
            placedAt: new Date().toISOString(),
            customer: {
                name: document.getElementById("coName").value.trim(),
                phone: document.getElementById("coPhone").value.trim(),
                address: document.getElementById("coAddress").value.trim(),
                area: loc.name
            },
            items: lines,
            subtotal,
            deliveryFee: loc.fee,
            total: total,
            status: "Pending"
        };

        saveOrder(order);
        cartState.items = {};
        renderCart();
        document.getElementById("cartPanel").classList.remove("open");
        document.getElementById("cartOverlay").classList.remove("open");
        modal.classList.remove("open");
        form.reset();
        showToast("Order placed! ID: " + order.id);
        alert("Thank you! Your discreet COD order " + order.id + " is confirmed.");
    });
}

/**
 * Global Cart State Management Transaction Interceptor Engine
 */
window.executeCartIncrement = function(productId) {
    const product = PRODUCT_CATALOGUE.find(p => p.id === productId);
    if (!product) return;

    const current = cartState.items[productId] ? cartState.items[productId].qty : 0;
    if (product.stock <= 0) { showToast("Out of stock"); return; }
    if (current >= product.stock) { showToast("Max stock reached"); return; }

    if (!cartState.items[productId]) {
        cartState.items[productId] = { product, qty: 0 };
    }
    cartState.items[productId].qty += 1;

    renderCart();
};

/* ==========================================================================
   Account Layer: Register / Login (local, privacy-first)
   ========================================================================== */
const ACCOUNT_STORAGE_KEY = "condomart_account";

function getAccount() {
    try { return JSON.parse(localStorage.getItem(ACCOUNT_STORAGE_KEY)); }
    catch (e) { return null; }
}

function saveAccount(account) {
    localStorage.setItem(ACCOUNT_STORAGE_KEY, JSON.stringify(account));
}

function initAccount() {
    const accountButton = document.getElementById("accountButton");
    const modal = document.getElementById("accountModal");
    const closeBtn = document.getElementById("accountModalClose");
    const form = document.getElementById("accountForm");
    const nameInput = document.getElementById("accName");
    const emailInput = document.getElementById("accEmail");
    const passInput = document.getElementById("accPass");
    const submitBtn = document.getElementById("accountSubmit");
    const toggleLink = document.getElementById("accountToggle");
    const toggleText = document.getElementById("accountToggleText");
    const accountText = document.getElementById("accountText");

    let mode = "register"; // or "login"

    const setMode = (newMode) => {
        mode = newMode;
        if (mode === "register") {
            nameInput.style.display = "block";
            nameInput.previousElementSibling.style.display = "block";
            submitBtn.textContent = "Create Account";
            toggleText.textContent = "Already have an account?";
            toggleLink.textContent = "Login";
        } else {
            nameInput.style.display = "none";
            nameInput.previousElementSibling.style.display = "none";
            submitBtn.textContent = "Login";
            toggleText.textContent = "New to Condomart?";
            toggleLink.textContent = "Create Account";
        }
    };

    const openModal = () => {
        const acc = getAccount();
        if (acc) { // already logged in -> logout option
            if (confirm("Logged in as " + acc.name + ". Logout?")) {
                localStorage.removeItem(ACCOUNT_STORAGE_KEY);
                updateAccountUI();
            }
            return;
        }
        modal.classList.add("open");
    };
    const closeModal = () => modal.classList.remove("open");

    accountButton.addEventListener("click", openModal);
    closeBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
    toggleLink.addEventListener("click", () => setMode(mode === "register" ? "login" : "register"));

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = emailInput.value.trim().toLowerCase();
        const pass = passInput.value;

        let accounts = {};
        try { accounts = JSON.parse(localStorage.getItem("condomart_users")) || {}; }
        catch (e) { accounts = {}; }

        if (mode === "register") {
            if (accounts[email]) {
                alert("An account with this email already exists. Please login.");
                setMode("login");
                return;
            }
            const name = nameInput.value.trim();
            accounts[email] = { name, pass };
            localStorage.setItem("condomart_users", JSON.stringify(accounts));
            const acc = { name, email };
            saveAccount(acc);
            alert("Account created successfully. Welcome, " + name + "!");
        } else {
            const user = accounts[email];
            if (!user || user.pass !== pass) {
                alert("Invalid email or password.");
                return;
            }
            const acc = { name: user.name, email };
            saveAccount(acc);
            alert("Welcome back, " + user.name + "!");
        }

        closeModal();
        form.reset();
        updateAccountUI();
    });

    function updateAccountUI() {
        const acc = getAccount();
        if (acc) {
            accountText.textContent = acc.name.split(" ")[0];
            accountButton.setAttribute("aria-label", "Logged in as " + acc.name);
        } else {
            accountText.textContent = "Account";
        }
    }

    updateAccountUI();
}

// Initialise account after DOM ready
document.addEventListener("DOMContentLoaded", () => {
    initAccount();
});

// Live-refresh catalogue when admin edits products in another tab
window.addEventListener("storage", (e) => {
    if (e.key === PRODUCTS_STORAGE_KEY) {
        PRODUCT_CATALOGUE = loadProducts();
        initCatalogView(PRODUCT_CATALOGUE);
        renderCart();
    }
});
