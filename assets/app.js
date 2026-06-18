/* ============ بيانات المنتجات ============ */
const PRODUCTS = [
  { id:"cr-hd50",  name:"كورال أويل HD-50",        brand:"coral",  cat:"engine", spec:"SAE HD-50 · API CI-4 · 5 لتر",      price:14000, img:"products/6-Yyv22gWWjRuGVKBJ.png" },
  { id:"cr-15w40", name:"كورال أويل 15W-40",       brand:"coral",  cat:"engine", spec:"API CI4/SL تخليقي كامل · 5 لتر",     price:16500, img:"products/7-dJoNNQ93o5IWrazO.png" },
  { id:"cr-20w50a",name:"كورال أويل 20W-50",       brand:"coral",  cat:"engine", spec:"أداء عالٍ · API SL/CF · 2 لتر",      price:7500,  img:"products/8-mxB8lGKNq7uBZPQL.png" },
  { id:"cr-20w50b",name:"كورال أويل 20W-50",       brand:"coral",  cat:"engine", spec:"API SN/CF · 1 لتر",                  price:4500,  img:"products/9-Yle55KXkv7c47wE7.png" },
  { id:"cr-5w20",  name:"كورال أويل 5W-20",        brand:"coral",  cat:"engine", spec:"API SP-GL6A تخليقي · 5 لتر",         price:21000, img:"products/11-A3QrrVKPKWTaKkrQ.png" },
  { id:"cr-0w20",  name:"كورال أويل 0W-20",        brand:"coral",  cat:"engine", spec:"API SP-GL6A · حماية البرد · 5 لتر",  price:23500, img:"products/uuo--ossu-Yle56Xgzw5hl6rb7.png" },
  { id:"cr-hyd",   name:"كورال هيدروليك HYD 68",   brand:"coral",  cat:"gear",   spec:"زيت هيدروليك أداء عالٍ · 20 لتر",    price:38000, img:"products/2-A0xrrzvZ6BFDLQKe.png" },
  { id:"cr-brake", name:"كورال زيت مكابح DOT-3",   brand:"coral",  cat:"fluid",  spec:"Heavy Duty · 220 غم",               price:3500,  img:"products/10-mp877Kkx6Wiv4VqX.png" },
  { id:"sh-strong",name:"شيلد سترونغ ألترا 15W-40",brand:"shield", cat:"engine", spec:"API CH-4 · تقنية عالمية · 5 لتر",    price:18000, img:"products/12-dOqNbabRewSy1L37.png" },
  { id:"sh-react", name:"شيلد ريأكت 5W-20",        brand:"shield", cat:"engine", spec:"تخليقي · API SN · 5 لتر",           price:24000, img:"products/14-dWx0lv3R2nuqpBNl.png" },
  { id:"sh-protect",name:"شيلد بروتكت 5W-30",      brand:"shield", cat:"engine", spec:"تخليقي كامل · API SN · 5 لتر",      price:25000, img:"products/15-YrDXaWv3JMtOZ9l4.png" },
  { id:"sh-entity",name:"شيلد إنتيتي 10W-40",      brand:"shield", cat:"engine", spec:"تخليقي · API SN · 5 لتر",           price:22000, img:"products/16-AMqpn1Kx2Gt18k9W.png" },
  { id:"sh-guard", name:"شيلد غارد SAE 50",        brand:"shield", cat:"engine", spec:"للشاحنات · API CF · 5 لتر",         price:17000, img:"products/17-AwvPr95J7jC7Ezqz.png" },
  { id:"sh-prem5", name:"شيلد بريميوم 20W-50",     brand:"shield", cat:"engine", spec:"API SL · تقنية عالمية · 5 لتر",     price:16000, img:"products/18-d95rpnxWGgFok0n0.png" },
  { id:"sh-plat5", name:"شيلد بلاتينيوم 10W-30",   brand:"shield", cat:"engine", spec:"API SL · 5 لتر",                    price:19000, img:"products/19-YanzBKPK61UgnvZ4.png" },
  { id:"sh-plat1", name:"شيلد بلاتينيوم 10W-30",   brand:"shield", cat:"engine", spec:"API SL · 1 لتر",                    price:4500,  img:"products/21-Yle5MBja7pCD2xpk.png" },
  { id:"sh-prem1", name:"شيلد بريميوم 20W-50",     brand:"shield", cat:"engine", spec:"API SL · 1 لتر",                    price:4000,  img:"products/22-mnl53OkajnuNNOOW.png" },
  { id:"sh-marvel",name:"شيلد مارفل 0W-20",        brand:"shield", cat:"engine", spec:"تخليقي كامل · API SN · 5 لتر",      price:27000, img:"products/o-uuo-YrDX6kbMqgsOJKMk.png" },
  { id:"sh-gear",  name:"شيلد كينيتيك جير SAE 90",brand:"shield", cat:"gear",   spec:"زيت تروس · API GL-5 · 4 لتر",       price:15000, img:"products/20-YZ9X2zDKl6H7jvOg.png" },
  { id:"sh-atf",   name:"شيلد ATF ناقل أوتوماتيك", brand:"shield", cat:"fluid",  spec:"DX-III تخليقي · 1 لتر",             price:5000,  img:"products/23-YZ9X2z0ZEGTeQWEL.png" },
];

const fmt = n => n.toLocaleString("en-US") + " د.ع";
const $  = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

/* ============ عرض المتجر ============ */
const grid = $("#productGrid");
function brandLabel(b){ return b === "coral" ? "كورال" : "شيلد"; }

function renderProducts(filter="all"){
  const list = PRODUCTS.filter(p =>
    filter === "all" || p.cat === filter || p.brand === filter);
  grid.innerHTML = list.map(p => `
    <article class="card" data-cat="${p.cat}" data-brand="${p.brand}">
      <div class="card-media">
        <span class="badge badge--${p.brand}">${brandLabel(p.brand)}</span>
        <img src="${p.img}" alt="${p.name}" loading="lazy" />
      </div>
      <div class="card-body">
        <h3>${p.name}</h3>
        <p class="card-spec">${p.spec}</p>
        <div class="card-foot">
          <span class="price">${p.price.toLocaleString("en-US")} <small>د.ع</small></span>
          <button class="add-btn" data-add="${p.id}" aria-label="أضف ${p.name}">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
          </button>
        </div>
      </div>
    </article>`).join("");
}
renderProducts();

$("#filters").addEventListener("click", e => {
  const chip = e.target.closest(".chip");
  if(!chip) return;
  $$(".chip").forEach(c => c.classList.remove("is-active"));
  chip.classList.add("is-active");
  renderProducts(chip.dataset.filter);
});

/* ============ السلة ============ */
let cart = JSON.parse(localStorage.getItem("manar_cart") || "{}");
const cartEl     = $("#cart");
const overlay    = $("#cartOverlay");
const itemsEl    = $("#cartItems");
const countEl    = $("#cartCount");
const totalEl    = $("#cartTotal");

function saveCart(){ localStorage.setItem("manar_cart", JSON.stringify(cart)); }

function renderCart(){
  const ids = Object.keys(cart);
  let total = 0, count = 0;
  if(!ids.length){
    itemsEl.innerHTML = `<p class="cart-empty">سلّتك فارغة الآن.<br/>أضف عبواتك المفضّلة من المتجر.</p>`;
  } else {
    itemsEl.innerHTML = ids.map(id => {
      const p = PRODUCTS.find(x => x.id === id);
      const q = cart[id];
      total += p.price * q; count += q;
      return `<div class="ci">
        <img src="${p.img}" alt="${p.name}" />
        <div class="ci-info">
          <h4>${p.name}</h4>
          <span class="price">${fmt(p.price)}</span>
        </div>
        <div class="ci-qty">
          <button data-dec="${id}" aria-label="إنقاص">−</button>
          <span>${q}</span>
          <button data-inc="${id}" aria-label="زيادة">+</button>
        </div>
      </div>`;
    }).join("");
  }
  ids.forEach(id => count += 0);
  count = ids.reduce((s,id) => s + cart[id], 0);
  countEl.textContent = count;
  totalEl.textContent = fmt(total);
}

function addToCart(id){
  cart[id] = (cart[id] || 0) + 1;
  saveCart(); renderCart(); openCart();
}

grid.addEventListener("click", e => {
  const btn = e.target.closest("[data-add]");
  if(btn) addToCart(btn.dataset.add);
});

itemsEl.addEventListener("click", e => {
  const inc = e.target.closest("[data-inc]");
  const dec = e.target.closest("[data-dec]");
  if(inc){ cart[inc.dataset.inc]++; }
  if(dec){
    const id = dec.dataset.dec;
    cart[id]--; if(cart[id] <= 0) delete cart[id];
  }
  if(inc || dec){ saveCart(); renderCart(); }
});

function openCart(){ cartEl.classList.add("open"); overlay.classList.add("open"); }
function closeCart(){ cartEl.classList.remove("open"); overlay.classList.remove("open"); }
$("#cartToggle").addEventListener("click", openCart);
$("#cartClose").addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);

$("#checkoutBtn").addEventListener("click", () => {
  const ids = Object.keys(cart);
  if(!ids.length){ return; }
  let total = 0;
  const lines = ids.map(id => {
    const p = PRODUCTS.find(x => x.id === id);
    const q = cart[id]; total += p.price * q;
    return `• ${p.name} ×${q} — ${fmt(p.price * q)}`;
  });
  const text = `طلب جديد من موقع منار البصرة%0A%0A${lines.join("%0A")}%0A%0Aالمجموع: ${fmt(total)}`;
  window.open(`https://wa.me/9647700000000?text=${text}`, "_blank");
});

renderCart();

/* ============ نموذج الطلب عبر واتساب ============ */
$("#quoteForm").addEventListener("submit", e => {
  e.preventDefault();
  const f = e.target;
  const text = `طلب عرض سعر من منار البصرة%0A%0Aالاسم: ${f.name.value}%0Aالهاتف: ${f.phone.value}%0Aالتفاصيل: ${f.msg.value}`;
  window.open(`https://wa.me/9647700000000?text=${text}`, "_blank");
});

/* ============ الشريط العلوي + القائمة ============ */
const topbar = $("#topbar");
const navEl  = $(".nav");
$("#menuToggle").addEventListener("click", () => navEl.classList.toggle("open"));
navEl.addEventListener("click", e => { if(e.target.tagName === "A") navEl.classList.remove("open"); });

/* ============ الخلفية والزيت يتحركان مع التنقل ============ */
const root      = document.documentElement;
const layers    = $$("[data-depth]");
const canWrap   = $(".oilcan-wrap");
const oilCap    = $(".oilcan-cap");
const oilStream = $(".oil-stream");
const oilPool   = $(".oil-pool");
const spoutPt   = $(".spout-pt");

let targetY = 0, currentY = 0, ticking = false;

// تحريك صور الخلفية: انزياح عمودي + أفقي + دوران حسب التنقل
function moveLayers(prog, y){
  layers.forEach(el => {
    const depth = parseFloat(el.dataset.depth || 0);
    const dx    = parseFloat(el.dataset.dx    || 0);
    const rot   = parseFloat(el.dataset.rot   || 0);
    const spin  = parseFloat(el.dataset.rspin || 0);
    const tx = (prog * dx).toFixed(1);
    const ty = (-y * depth).toFixed(1);
    const rz = (rot + prog * spin).toFixed(1);
    el.style.transform = `translate3d(${tx}px, ${ty}px, 0) rotate(${rz}deg)`;
  });
}

// تثبيت بداية سيل الزيت عند فوهة العلبة تماماً (يُقاس فعلياً)
function positionOil(){
  if(!spoutPt || !oilStream) return;
  const a  = spoutPt.getBoundingClientRect();
  const cx = a.left + a.width / 2;
  const cy = a.top  + a.height / 2;
  oilStream.style.left = (cx - oilStream.offsetWidth / 2) + "px";
  oilStream.style.top  = cy + "px";
  if(oilPool) oilPool.style.left = (cx - oilPool.offsetWidth * 0.10) + "px";
}

// حالة سكب الزيت حسب تقدّم التنقل (0..1)
function setPour(prog){
  if(canWrap) canWrap.style.transform = `rotate(${(120 + prog * 22).toFixed(2)}deg)`;
  if(oilCap)  oilCap.style.transform  = `translateY(${(prog * -46).toFixed(1)}px) rotate(${(prog * -54).toFixed(1)}deg)`;
  if(oilStream){
    oilStream.style.transform = `scaleY(${prog.toFixed(3)})`;
    oilStream.style.opacity   = Math.min(1, prog * 1.7).toFixed(3);
  }
  if(oilPool){
    oilPool.style.transform = `scaleX(${(0.12 + prog * 0.92).toFixed(3)})`;
    oilPool.style.opacity   = Math.min(0.92, prog * 1.4).toFixed(3);
  }
  positionOil();
}

function progOf(y){
  const max = root.scrollHeight - window.innerHeight;
  return max > 0 ? Math.min(1, Math.max(0, y / max)) : 0;
}
function apply(y){ const p = progOf(y); moveLayers(p, y); setPour(p); }

function loop(){
  currentY += (targetY - currentY) * 0.12;
  apply(currentY);
  if(Math.abs(targetY - currentY) > 0.4){ requestAnimationFrame(loop); }
  else { ticking = false; }
}

function onScroll(){
  targetY = window.scrollY || window.pageYOffset;
  topbar.classList.toggle("scrolled", targetY > 30);
  apply(targetY);                       // مباشر — يعمل حتى لو خُنق rAF
  if(!ticking){ requestAnimationFrame(loop); ticking = true; }
}

window.addEventListener("scroll", onScroll, { passive:true });
window.addEventListener("resize", () => apply(window.scrollY || 0), { passive:true });
window.addEventListener("load",   () => apply(window.scrollY || 0));
apply(window.scrollY || 0);

/* ============ ظهور تدريجي عند التمرير ============ */
const io = new IntersectionObserver(entries => {
  entries.forEach(en => { if(en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target); } });
}, { threshold:0.14 });
$$(".reveal").forEach(el => io.observe(el));

/* ============ تمييز رابط القسم النشط ============ */
const secs = $$("main .scene");
const navLinks = $$(".nav a");
const navIo = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if(en.isIntersecting){
      navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
    }
  });
}, { threshold:0.4 });
secs.forEach(s => navIo.observe(s));

$("#year").textContent = new Date().getFullYear();
