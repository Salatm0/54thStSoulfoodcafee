// --- MENU DATABASE ARRAY WITH YOUR EXACT FILENAMES & NEW PRICES ---
const menuItems = [
    // --- DINNERS ($20.00) & BAKED FISH ($15.00) ---
    {cat:"dinner", img:"images/Baked catfish.jpeg", title:"Baked Fish Dinner", desc:"Perfectly seasoned, oven-baked catfish served hot over a fluffy bed of white rice.", price:"$15.00"},
    {cat:"dinner", img:"images/Pan of catfish.jpeg", title:"Catfish Dinner", desc:"Crispy fried catfish with your choice of two signature sides and fresh cornbread.", price:"$20.00"},
    {cat:"dinner", img:"images/Pan of catfish.jpeg", title:"Chicken Strip Dinner", desc:"Golden fried chicken strips with your choice of two signature sides and cornbread.", price:"$20.00"},
    {cat:"dinner", img:"images/Fried shrimp.jpeg", title:"Shrimp Dinner", desc:"Perfectly battered and fried shrimp served with your choice of two sides and cornbread.", price:"$20.00"},
    {cat:"dinner", img:"images/Pan of catfish.jpeg", title:"Rib Dinner", desc:"Tender ribs with a tangy barbecue glaze on the side, served with two sides and cornbread.", price:"$20.00"},
    {cat:"dinner", img:"images/Seafood gumbo.jpeg", title:"Seafood Gumbo", desc:"Rich, deeply flavored authentic southern gumbo loaded with chicken, hot links, shrimp, and white rice.", price:"$20.00"},

    // --- PO' BOIS ($15.00) ---
    {cat:"Po' Boi", img:"images/Catfish poi boy.jpeg", title:"Catfish Po' Boi", desc:"Fried catfish bites on fresh hoagie bread heavily drizzled in our house signature Rosie's Sauce.", price:"$15.00"},
    {cat:"Po' Boi", img:"images/Catfish poi boy.jpeg", title:"Chicken Po' Boi", desc:"Fried chicken on hoagie bread drizzled in our signature Rosie's Sauce.", price:"$15.00"},
    {cat:"Po' Boi", img:"images/Catfish poi boy.jpeg", title:"Shrimp Po' Boi", desc:"Fried Shrimp stacked inside hoagie bread drizzled with house Rosie's Sauce.", price:"$15.00"},

    // --- BASKETS ($10.00 / burger $15.00) ---
    {cat:"Baskets", img:"images/Fried chicken wings.jpeg", title:"Wings Basket", desc:"Crispy seasoned fried chicken wings served over a hot bed of crinkle-cut french fries.", price:"$10.00"},
    {cat:"Baskets", img:"images/Pan of catfish.jpeg", title:"Catfish Basket", desc:"Fried catfish chunks accompanied by crinkle-cut fries.", price:"$10.00"},
    {cat:"Baskets", img:"images/Fried shrimp.jpeg", title:"Shrimp Basket", desc:"Golden fried shrimp served alongside a mountain of crispy fries.", price:"$10.00"},
    {cat:"Baskets", img:"images/Pan of catfish.jpeg", title:"Money Burger Basket", desc:"Beef Patty, Oh Boy Oberto Beef Hot Link, onions, lettuce, cheese, and Rosie's Sauce on toasted buns with fries.", price:"$15.00"},

    // --- SIDE DISHES & SAUCE ($5.00 / $8.00) ---
    {cat:"Side Dishes", img:"images/Greens with turkey meat.jpeg", title:"Southern Greens", desc:"Tender collard greens slow-cooked to perfection with savory smoked turkey meat.", price:"$5.00"},
    {cat:"Side Dishes", img:"images/Pan of catfish.jpeg", title:"Cheesy Macaroni", desc:"Creamy macaroni pasta completely baked inside a rich cheese sauce coating.", price:"$5.00"},
    {cat:"Side Dishes", img:"images/Pan of catfish.jpeg", title:"Beans and Rice", desc:"Tender beans paired with fluffy white rice, creating a simple and hearty side dish.", price:"$5.00"},
    {cat:"Side Dishes", img:"images/Pan of catfish.jpeg", title:"Dirty Rice", desc:"Savory rice mixed with seasoned ground meat and aromatic spices.", price:"$5.00"},
    {cat:"Side Dishes", img:"images/Rosie’s Sauce.jpeg", title:"Rosie's Sauce (Jar)", desc:"Our house specialty sauce made in loving memory of Rosemary Jackson. Perfect for takeaway orders.", price:"$8.00"},

    // --- DRINKS ($3.00 / $5.00) ---
    {cat:"drinks", img:"images/Pan of catfish.jpeg", title:"Strawberry Lemonade", desc:"Freshly squeezed lemonade blended thoroughly with sweet pureed strawberries.", price:"$5.00"},
    {cat:"drinks", img:"images/Pan of catfish.jpeg", title:"Classic Lemonade / Kool-Aid", desc:"Nostalgic refreshing beverages, sweetened just right.", price:"$3.00"},
    {cat:"drinks", img:"images/Pan of catfish.jpeg", title:"Bottled Water", desc:"Pure and essential hydration.", price:"$1.00"},

    // --- DESSERTS ($5.00) ---
    {cat:"desserts", img:"images/Strawberry shortcake.jpeg", title:"Strawberry Shortcake Cup", desc:"Layers of fluffy cake with sweet strawberries in syrup and whipped cream.", price:"$5.00"},
    {cat:"desserts", img:"images/Strawberry shortcake.jpeg", title:"Homemade Banana Pudding", desc:"Creamy pudding layered with vanilla wafers and fresh banana slices.", price:"$5.00"},
    {cat:"desserts", img:"images/Strawberry shortcake.jpeg", title:"Cake Of The Day", desc:"A fresh slice of our premium rotating daily homemade surprise cake flavors.", price:"$5.00"}
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
  const items = activeFilter === 'all' ? menuItems : menuItems.filter(i => i.cat === activeFilter);
  const show = showAll ? items : items.slice(0, 8);

  grid.innerHTML = show.map(item => `
    <div class="card">
      <div class="card-img-container">
        <img src="${item.img}" alt="${item.title}" class="card-menu-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="card-img-backup" style="display:none; font-size:2.5rem; height:180px; align-items:center; justify-content:center; background:linear-gradient(135deg, #f5e6c8, #e8d0a0);">🍳</div>
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
  if (container) container.style.display = activeFilter === 'all' ? 'block' : 'none';

  const btn = document.getElementById('view-more-btn');
  if (btn) btn.textContent = showAll ? 'Show Less ↑' : 'View Full Menu Options';
}

function toggleShowAll() {
  showAll = !showAll;
  renderMenu();
}

// Initial Run
renderMenu();

// ── PROMO CAROUSEL ──
let promoIndex = 0;
const promoTrack = document.getElementById('promoCarousel');
const promoSlides = promoTrack.querySelectorAll('.promo-block');
const dotsContainer = document.getElementById('promoDots');

if (promoTrack && promoSlides.length > 0) {
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
