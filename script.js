// --- MENU DATABASE ARRAY - ONLY ITEMS WITH REAL PHOTO UPLOADS ---
const menuItems = [
    // --- DINNERS & GUMBO ---
    {
        cat: "dinner", 
        img: "Baked catfish.jpeg", 
        title: "Baked Fish Dinner", 
        desc: "Perfectly seasoned, oven-baked catfish served hot over a fluffy bed of white rice. Prepared with love, flavor, and pride.", 
        price: "$15.00"
    },
    {
        cat: "dinner", 
        img: "Pan of catfish.jpeg", 
        title: "Catfish Dinner", 
        desc: "Crispy cornmeal-battered fried catfish catering trays. Made using the traditional kitchen skills Deon learned working at Seattle's historic Catfish Corner.", 
        price: "$20.00"
    },
    {
        cat: "dinner", 
        img: "Seafood gumbo.jpeg", 
        title: "Seafood Gumbo", 
        desc: "Rich, deeply flavored authentic southern gumbo loaded with chicken, hot links, shrimp, and white rice.", 
        price: "$20.00"
    },

    // --- PO' BOIS ---
    {
        cat: "Po' Boi", 
        img: "Catfish poi boy.jpeg", 
        title: "Catfish Po' Boi", 
        desc: "Generous portion of fried catfish bites on fresh hoagie bread, heavily drizzled in our house signature Rosie's Sauce.", 
        price: "$15.00"
    },

    // --- BASKETS ---
    {
        cat: "Baskets", 
        img: "Fried chicken wings.jpeg", 
        title: "Wings Basket", 
        desc: "Crispy, golden, well-seasoned fried chicken wings served over a hot bed of crinkle-cut french fries.", 
        price: "$10.00"
    },

    // --- SIDES & SAUCES ---
    {
        cat: "Side Dishes", 
        img: "Greens with turkey meat.jpeg", 
        title: "Southern Greens", 
        desc: "Tender collard greens slow-cooked to perfection with savory smoked turkey meat.", 
        price: "$5.00"
    },
    {
        cat: "Side Dishes", 
        img: "Rosie’s Sauce.jpeg", 
        title: "Rosie's Sauce (Jar)", 
        desc: "Our famous house specialty sauce, made in loving memory of Rosemary Jackson. Perfect to add to your bulk catering orders.", 
        price: "$8.00"
    },

    // --- DESSERTS ---
    {
        cat: "desserts", 
        img: "Strawberry shortcake.jpeg", 
        title: "Strawberry Shortcake Cup", 
        desc: "Layers of moist, fluffy cake with sweet strawberries in rich syrup and thick whipped cream.", 
        price: "$5.00"
    }
];

let activeFilter = 'all';
let showAll = false;

function filterMenu(cat, btn) {
  activeFilter = cat;
  showAll = false;
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  renderMenu();
}

function renderMenu() {
  const grid = document.getElementById('menu-grid');
  if (!grid) return;
  
  const items = activeFilter === 'all' ? menuItems : menuItems.filter(i => i.cat === activeFilter);
  const show = items;

  grid.innerHTML = show.map(item => `
    <div class="card">
      <div class="card-img-container">
        <img src="${item.img}" alt="${item.title}" class="card-menu-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="card-img-backup" style="display:none; font-size:2.5rem; height:180px; align-items:center; justify-content:center; background:linear-gradient(135deg, #f5e6c8, #e8d0a0); width:100%;">🍳</div>
      </div>
      <div class="card-body">
        <div class="card-title">${item.title}</div>
        <p class="card-desc">${item.desc}</p>
        <div class="card-footer">
          <span class="card-price">${item.price}</span>
          <span class="catering-label">Catering Available</span>
        </div>
      </div>
    </div>
  `).join('');

  const container = document.getElementById('view-more-container');
  if (container) container.style.display = 'none';
}

renderMenu();

// ── PROMO CAROUSEL ──
let promoIndex = 0;
const promoTrack = document.getElementById('promoCarousel');
const promoSlides = promoTrack ? promoTrack.querySelectorAll('.promo-block') : [];
const dotsContainer = document.getElementById('promoDots');

if (promoTrack && promoSlides.length > 0 && dotsContainer) {
  dotsContainer.innerHTML = '';
  promoSlides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'promo-carousel-dot' + (i === 0 ? ' active' : '');
    dot.onclick = () => promoGoTo(i);
    dotsContainer.appendChild(dot);
  });
}

function promoGoTo(n) {
  if (!promoTrack || promoSlides.length === 0) return;
  promoIndex = (n + promoSlides.length) % promoSlides.length;
  promoTrack.style.transform = `translateX(-${promoIndex * 100}%)`;
  document.querySelectorAll('.promo-carousel-dot')
    .forEach((d, i) => d.classList.toggle('active', i === promoIndex));
}

function promoSlide(dir) { promoGoTo(promoIndex + dir); }
