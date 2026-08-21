document.documentElement.classList.add("js-reveal");

const memes = [
  { file: "1.png",  text: "فقط اورتینک کن؛ چون معلومه فکر اول کافی نبوده." },
  { file: "2.png",  text: "تفریح‌های موردعلاقه‌ش؛ بیرون رفتن، سفر، کوه و هر چیزی که بشه بعدش درباره‌ش اورتینک کرد." },
  { file: "3.png",  text: "هندزفری که رفت تو گوش، دیگه کسی رو آدم حساب نمی‌کنه." },
  { file: "4.png",  text: "امید و نور شرکته؛ انقدر روشن که مستقیم نگاه کنی کور می‌شی." },
  { file: "5.png",  text: "لجباز؟ نه بابا. فقط تا وقتی همه قبول کنن حق با اونه ادامه می‌ده." },
  { file: "6.png",  text: "پاستا برای پگاه غذا نیست؛ سبک زندگیه." },
  { file: "7.png",  text: "نوشیدنی‌های موردعلاقه: موهیتو و شیک‌های شکلاتی خوشمزه؛ آب هم احتمالاً وقتی مجبور باشه." },
  { file: "8.png",  text: "شیرینی؟ تقریباً بله. باقلوا، ناپلئونی، کشمشی، کیک یزدی... رژیم از چت خارج شد." },
  { file: "9.png",  text: "گل دوست داره؛ آفتابگردون، لیلیوم، رز... لطفاً بدون کیوی تحویل شود." },
  { file: "10.png", text: "حجم غذاش یه ذره‌ست؛ ولی پاستا که باشه قوانین فیزیک قابل مذاکره‌ان." },
  { file: "11.png", text: "شنا، اریال یوگا و کوهنوردی؛ ورزش می‌کنه که برای اورتینک استقامت کافی داشته باشه." },
  { file: "12.png", text: "تکیه‌کلام‌ها: «یزید تو»، «تو رو به علی»، «چشم عباس‌آقا»؛ پکیج کامل." },
  { file: "13.png", text: "دستت به پشتت که نمی‌رسه؟ سؤال مهمی بود، جلسه تموم." },
  { file: "14.png", text: "تقی به توق بخوره: احتمال گریه فعال می‌شود. سیستم سالم است." },
  { file: "15.png", text: "یه پا کدبانو؛ نون‌پنیر درست می‌کنه، هلو. Michelin فعلاً در حال بررسیه." },
  { file: "16.png", text: "از اضافه‌وزن لذت می‌بره؛ از رژیم‌هاش نه. رابطه‌ای پیچیده ولی پایدار." },
  { file: "17.png", text: "زمستون + هودی مشکی + پیاده‌روی + داریوش = Pegah Core در حالت ایده‌آل." },
  { file: "18.png", text: "لپ‌تاپشم انقدر خفنه که کرونا هم نمی‌گیره." },
  { file: "19.png", text: "حکم، هفت‌خبیث و کلاً بازی رقابتی؛ باهاش بازی کن، ولی برای باختت آماده باش." },
  { file: "20.png", text: "میز جای نشستن نیست بچه! بیا پایین، سرمون درد گرفت." },
  { file: "21.png", text: "کیوی رو خیلی دوست... نه صبر کن؛ به کیوی حساسیت داره. این میم واحد کنترل کیفیت رو رد نکرد." },
  { file: "22.png", text: "از صداهای یهویی می‌ترسه و ساعت ۹ می‌خوابه؛ بعد از ۲۱:۰۰ فقط پیام بگذارید." },
  { file: "23.png", text: "داداشم یه‌تنه رکورد پسرا رو هم زده؛ ماشاالله ساعد." }
];

function shuffle(items) {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function createMemeCard(meme, index) {
  const figure = document.createElement("figure");
  figure.className = "meme-card";

  const img = document.createElement("img");
  img.src = meme.file;
  img.alt = `میم پگاه شماره ${meme.file.replace(".png", "")}`;
  img.decoding = "async";
  img.loading = index < 4 ? "eager" : "lazy";

  img.addEventListener("error", () => {
    figure.classList.add("is-missing");
  });

  const caption = document.createElement("figcaption");
  caption.innerHTML = `<span class="meme-number">#${meme.file.replace(".png", "")}</span>${meme.text}`;

  figure.appendChild(img);
  figure.appendChild(caption);
  return figure;
}

function renderMemes() {
  const grid = document.getElementById("memeGrid");
  if (!grid) return;

  const randomized = shuffle(memes);
  const fragment = document.createDocumentFragment();
  randomized.forEach((meme, index) => fragment.appendChild(createMemeCard(meme, index)));
  grid.replaceChildren(fragment);
}

function buildLogoRail() {
  const rail = document.getElementById("logoRail");
  if (!rail) return;

  const width = window.innerWidth;
  let count = 5;
  if (width < 430) count = 4;
  else if (width < 700) count = 6;
  else if (width < 1100) count = 9;
  else count = 13;

  rail.innerHTML = Array.from({ length: count }, (_, i) =>
    `<img src="logo.png" alt="${i === 0 ? "لوگوی Pegah Core" : ""}" ${i > 0 ? 'aria-hidden="true"' : ""}>`
  ).join("");
}

function initReveal() {
  const items = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    items.forEach(item => item.classList.add("show"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.02, rootMargin: "0px 0px 120px 0px" });

  items.forEach(item => observer.observe(item));
}

const shuffleBtn = document.getElementById("shuffleBtn");
if (shuffleBtn) {
  shuffleBtn.addEventListener("click", renderMemes);
}

let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(buildLogoRail, 120);
}, { passive: true });

renderMemes();
buildLogoRail();
initReveal();
