// ==========================================
// KONFIGURASI WHATSAPP
// Ganti nomor WhatsApp bisnis di sini.
// Gunakan format internasional tanpa tanda + atau spasi.
// ==========================================
const WHATSAPP_NUMBER = "6285811467045";

// ==========================================
// DATA PAKET WISATA
// Tambahkan atau edit paket di bagian ini.
// Data ini menjadi sumber utama card, filter,
// modal detail dan pesan WhatsApp.
// ==========================================
const packages = [
  {
    id: "curug-cibingbin",
    name: "Trekking Curug Cibingbin",
    category: "Trekking",
    image: "https://curugcibingbin.com/wp-content/uploads/2021/09/azzamzackarys_CRA3f-hLwuY-e1683194766140.jpg",
    badge: null,
    rating: null,
    reviews: null,
    normalPrice: null,
    promoPrice: null,
    duration: "Sesuaikan",
    location: "Sentul, Bogor",
    description: "Eksplorasi jalur alam menuju Curug Cibingbin dengan suasana hijau khas kawasan Sentul.",
    facilities: ["Guide lokal", "Pendampingan perjalanan"],
    itinerary: ["Meeting point", "Persiapan trekking", "Trekking menuju curug", "Eksplorasi", "Kembali ke meeting point"],
    notes: ["Gunakan sepatu yang nyaman", "Bawa air minum pribadi"]
  },
  {
    id: "curug-bidadari",
    name: "Trekking Curug Bidadari",
    category: "Trekking",
    image: "https://joglosemar.id/wp-content/uploads/2025/05/curug-tujuh-bidadari.jpg",
    badge: "Favorit",
    rating: null,
    reviews: null,
    normalPrice: null,
    promoPrice: null,
    duration: "Sesuaikan",
    location: "Sentul, Bogor",
    description: "Pilihan trekking untuk menikmati suasana alam dan area Curug Bidadari.",
    facilities: ["Guide lokal", "Pendampingan perjalanan"],
    itinerary: ["Meeting point", "Persiapan", "Trekking", "Eksplorasi", "Kembali"],
    notes: ["Gunakan pakaian yang nyaman", "Bawa perlengkapan pribadi"]
  },
  {
    id: "trekking-corporate",
    name: "Trekking Corporate",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1621414050946-1b936a78491f?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badge: null,
    rating: null,
    reviews: null,
    normalPrice: null,
    promoPrice: null,
    duration: "Custom",
    location: "Sentul, Bogor",
    description: "Format trekking untuk agenda perusahaan yang dapat dikonsultasikan berdasarkan jumlah peserta dan kebutuhan kegiatan.",
    facilities: ["Konsultasi rute", "Pendampingan grup"],
    itinerary: ["Briefing", "Persiapan", "Aktivitas trekking", "Eksplorasi", "Penutupan"],
    notes: ["Jumlah peserta dan kebutuhan agenda dikonsultasikan terlebih dahulu"]
  },
  {
    id: "offroad-curug-bidadari",
    name: "Offroad Curug Bidadari",
    category: "Offroad",
    image: "https://sentultravel.id/wp-content/uploads/2025/08/CDN02446-2000x1333.jpg",
    badge: null,
    rating: null,
    reviews: null,
    normalPrice: null,
    promoPrice: null,
    duration: "Custom",
    location: "Sentul, Bogor",
    description: "Nikmati pengalaman offroad menuju kawasan Curug Bidadari dengan rute yang dapat disesuaikan melalui konsultasi.",
    facilities: ["Pendampingan perjalanan"],
    itinerary: ["Meeting point", "Persiapan", "Perjalanan offroad", "Eksplorasi", "Kembali"],
    notes: ["Detail kendaraan dan rute dikonfirmasi sebelum keberangkatan"]
  },
  {
    id: "offroad-jeep-sentul",
    name: "Offroad Jeep Sentul",
    category: "Offroad",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBupsvrq6ZoxajQCrWguvSsMSZnBbs_eKP5OBYy-pM1B5-NSqMsFdwa1M&s=10",
    badge: "Paling Populer",
    rating: null,
    reviews: null,
    normalPrice: null,
    promoPrice: null,
    duration: "Custom",
    location: "Sentul, Bogor",
    description: "Eksplorasi jalur Sentul dengan pengalaman Jeep offroad yang cocok untuk agenda bersama teman atau grup.",
    facilities: ["Pendampingan perjalanan"],
    itinerary: ["Meeting point", "Briefing", "Offroad", "Eksplorasi", "Kembali"],
    notes: ["Rute dan durasi mengikuti paket yang disepakati"]
  },
  {
    id: "leuwi-hejo",
    name: "Trekking Leuwi Hejo",
    category: "Trekking",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEkCwxS8tkvPsRz6b6179CRyYRytQaUDgAst2EHNMcMwogTH9cHybcxhYK&s=10",
    badge: "Best Seller",
    rating: null,
    reviews: null,
    normalPrice: null,
    promoPrice: null,
    duration: "Custom",
    location: "Sentul, Bogor",
    description: "Jalur trekking menuju kawasan Leuwi Hejo dengan suasana hutan dan aliran air yang menjadi daya tarik perjalanan.",
    facilities: ["Guide lokal", "Pendampingan perjalanan"],
    itinerary: ["Meeting point", "Persiapan", "Trekking", "Eksplorasi", "Kembali"],
    notes: ["Kondisi jalur dapat berubah mengikuti cuaca"]
  },
  {
    id: "bukit-paniisan",
    name: "Trekking Bukit Paniisan",
    category: "Trekking",
    image: "https://statik.tempo.co/data/2023/08/27/id_1231615/1231615_720.jpg",
    badge: null,
    rating: null,
    reviews: null,
    normalPrice: null,
    promoPrice: null,
    duration: "Custom",
    location: "Sentul, Bogor",
    description: "Trekking dengan tujuan Bukit Paniisan untuk kamu yang ingin menikmati perjalanan alam dan suasana perbukitan.",
    facilities: ["Guide lokal", "Pendampingan perjalanan"],
    itinerary: ["Meeting point", "Persiapan", "Trekking menanjak", "Eksplorasi", "Kembali"],
    notes: ["Siapkan fisik sesuai tingkat aktivitas yang dipilih"]
  },
  {
    id: "goa-garunggang",
    name: "Trekking Goa Garunggang",
    category: "Trekking",
    image: "https://backend.adventuraja.com/gallery/6177815d2913d3dd5739aff0/trekking-sentul-gua%20garunggang-.jpg",
    badge: "Eksplorasi",
    rating: null,
    reviews: null,
    normalPrice: null,
    promoPrice: null,
    duration: "Custom",
    location: "Sentul, Bogor",
    description: "Eksplorasi kawasan Goa Garunggang dengan kombinasi jalur trekking dan lanskap alam yang khas.",
    facilities: ["Guide lokal", "Pendampingan perjalanan"],
    itinerary: ["Meeting point", "Persiapan", "Trekking", "Eksplorasi kawasan", "Kembali"],
    notes: ["Gunakan alas kaki yang memiliki grip baik"]
  },
  {
    id: "leuwi-asih",
    name: "Trekking Leuwi Asih",
    category: "Trekking",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToalG9GDlhEMBnC0AULsxuxdlGl4dTVCKsu_Ga5bdMEUxWyNA0ORyMxHw&s=10",
    badge: null,
    rating: null,
    reviews: null,
    normalPrice: null,
    promoPrice: null,
    duration: "Custom",
    location: "Sentul, Bogor",
    description: "Pilihan trekking untuk menikmati jalur hijau dan suasana alam kawasan Leuwi Asih.",
    facilities: ["Guide lokal", "Pendampingan perjalanan"],
    itinerary: ["Meeting point", "Persiapan", "Trekking", "Eksplorasi", "Kembali"],
    notes: ["Detail jalur dikonfirmasi sesuai kondisi lapangan"]
  },
  {
    id: "curug-hordeng",
    name: "Trekking Curug Hordeng",
    category: "Trekking",
    image: "https://sentultravel.id/wp-content/uploads/2023/05/IMG_0384-M100-97-1024x683.jpg",
    badge: null,
    rating: null,
    reviews: null,
    normalPrice: null,
    promoPrice: null,
    duration: "Custom",
    location: "Sentul, Bogor",
    description: "Perjalanan trekking menuju Curug Hordeng untuk menikmati lanskap alam dan suasana air terjun.",
    facilities: ["Guide lokal", "Pendampingan perjalanan"],
    itinerary: ["Meeting point", "Persiapan", "Trekking", "Eksplorasi", "Kembali"],
    notes: ["Perhatikan kondisi cuaca dan jalur sebelum perjalanan"]
  },
  {
    id: "curug-love",
    name: "Trekking Curug Love",
    category: "Trekking",
    image: "https://sentultravel.id/wp-content/uploads/2023/05/CURUG-LOVE-WA-8-1024x590.jpg",
    badge: null,
    rating: null,
    reviews: null,
    normalPrice: null,
    promoPrice: null,
    duration: "Custom",
    location: "Sentul, Bogor",
    description: "Jelajahi jalur menuju Curug Love dan nikmati perjalanan outdoor bersama grup pilihanmu.",
    facilities: ["Guide lokal", "Pendampingan perjalanan"],
    itinerary: ["Meeting point", "Persiapan", "Trekking", "Eksplorasi", "Kembali"],
    notes: ["Gunakan perlengkapan trekking yang sesuai"]
  },
  {
    id: "puncak-kuta",
    name: "Trekking Puncak Kuta",
    category: "Trekking",
    image: "https://www.mytrip.co.id/editor/images/Puncak%20Kuta%20spot%201%20by%20PTS.jpg",
    badge: null,
    rating: null,
    reviews: null,
    normalPrice: null,
    promoPrice: null,
    duration: "Custom",
    location: "Sentul, Bogor",
    description: "Trekking menuju Puncak Kuta dengan pengalaman menjelajah jalur perbukitan di kawasan Sentul.",
    facilities: ["Guide lokal", "Pendampingan perjalanan"],
    itinerary: ["Meeting point", "Persiapan", "Trekking", "Eksplorasi", "Kembali"],
    notes: ["Sesuaikan perlengkapan dengan tingkat jalur dan cuaca"]
  }
];

// ==========================================
// DATA TESTIMONI
// Ganti seluruh data placeholder dengan
// testimoni asli sebelum dipublikasikan.
// ==========================================
const testimonials = [
  {
    name: "Susilo",
    rating: 5,
    location: "Magelang, Indonesia",
    comment: "Pertama kali trekking di Sentul dan ternyata seru banget. Guide dari Go Trekking Sentul juga ramah dan membantu dari awal sampai selesai."
  },
  {
    name: "Ardi",
    rating: 5,
    location: "Bandung, Indonesia",
    comment: "Puas banget ikut Go Trekking Sentul. Jalurnya seru, pemandangannya bagus, dan semuanya terasa cukup terorganisir."
  },
  {
    name: "Anggono",
    rating: 5,
    location: "Solo, Indonesia",
    comment: "Go Trekking Sentul cocok buat yang mau refreshing bareng teman. Trekking-nya seru, capeknya dapet, tapi puasnya juga dapet."
  }
];

const packageGrid = document.querySelector("#package-grid");
const showMoreButton = document.querySelector("#show-more");
const filterButtons = [...document.querySelectorAll(".filter-button")];
const modal = document.querySelector("#package-modal");
const modalBody = document.querySelector("#modal-body");
const closeModalButtons = [...document.querySelectorAll("[data-close-modal]")];
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const header = document.querySelector(".site-header");

let activeFilter = "Semua";
let showingAll = false;
let lastFocusedElement = null;

const initialVisibleCount = 6;

// ==========================================
// FORMAT HARGA
// Harga null tidak akan menampilkan blok
// harga kosong.
// ==========================================
function formatPrice(value) {
  return new Intl.NumberFormat("id-ID").format(value);
}

// ==========================================
// WHATSAPP
// Semua CTA memakai nomor dari satu konfigurasi.
// ==========================================
function openWhatsApp(packageName = "") {
  const message = packageName
    ? `Halo, saya tertarik dengan paket ${packageName}. Bisa info lebih lanjut?`
    : "Halo, saya ingin konsultasi tentang paket trekking dan aktivitas outdoor di Sentul. Bisa info lebih lanjut?";

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function bindWhatsAppLinks() {
  document.querySelectorAll("[data-whatsapp-general]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      openWhatsApp();
    });
  });
}

// ==========================================
// RENDER PACKAGE CARD
// Satu fungsi menghasilkan semua card dari
// data packages.
// ==========================================
function renderPackageCard(item) {
  const hasPromo = item.promoPrice !== null && item.promoPrice !== undefined;
  const hasNormalPrice = item.normalPrice !== null && item.normalPrice !== undefined;
  const hasRating = item.rating !== null && item.reviews !== null;

  let priceMarkup = "";

  if (hasPromo) {
    const saving = hasNormalPrice ? item.normalPrice - item.promoPrice : null;

    priceMarkup = `
      <div class="price-row">
        ${hasNormalPrice ? `<span class="normal-price">Rp${formatPrice(item.normalPrice)}</span>` : ""}
        <strong class="promo-price">Rp${formatPrice(item.promoPrice)}</strong>
        <span class="price-unit">/orang</span>
      </div>
      ${saving !== null ? `<span class="saving">Hemat Rp${formatPrice(saving)}</span>` : ""}
    `;
  } else if (hasNormalPrice) {
    priceMarkup = `
      <div class="price-row">
        <strong class="regular-price">Rp${formatPrice(item.normalPrice)}</strong>
        <span class="price-unit">/orang</span>
      </div>
    `;
  }

  const ratingMarkup = hasRating
    ? `<p class="rating">★ ${item.rating} · ${item.reviews} ulasan</p>`
    : "";

  const badgeMarkup = item.badge
    ? `<span class="package-badge">${item.badge}</span>`
    : "";

  return `
    <article class="package-card">
      <div class="package-image-wrap">
        <img
          class="package-image"
          src="${item.image}"
          alt="${item.name}"
          loading="lazy"
          width="900"
          height="675"
        >
        ${badgeMarkup}
        <span class="package-category">${item.category}</span>
      </div>
      <div class="package-content">
        ${ratingMarkup}
        <h3>${item.name}</h3>
        ${priceMarkup}
        <div class="package-meta">
          <span>${item.duration}</span>
          <span>${item.location}</span>
        </div>
        <button class="detail-button" type="button" data-package-id="${item.id}">
          Lihat Detail
        </button>
      </div>
    </article>
  `;
}

// ==========================================
// RENDER PACKAGE GRID
// Filter dan "Lihat Semua" bekerja dari data
// yang sama, tanpa menulis card manual di HTML.
// ==========================================
function renderPackages() {
  const filteredPackages = activeFilter === "Semua"
    ? packages
    : packages.filter((item) => item.category === activeFilter);

  const visiblePackages = showingAll || filteredPackages.length <= initialVisibleCount
    ? filteredPackages
    : filteredPackages.slice(0, initialVisibleCount);

  packageGrid.innerHTML = visiblePackages.length
    ? visiblePackages.map(renderPackageCard).join("")
    : `<div class="no-results">Belum ada paket pada kategori ini.</div>`;

  showMoreButton.hidden = filteredPackages.length <= initialVisibleCount || activeFilter !== "Semua";
  showMoreButton.textContent = showingAll ? "Tampilkan Lebih Sedikit" : "Lihat Semua Paket";
}

// ==========================================
// MODAL DETAIL
// Foto sengaja tidak dimasukkan ke modal.
// Field kosong tidak menghasilkan section kosong.
// ==========================================
function listSection(title, items, className = "detail-list") {
  if (!Array.isArray(items) || items.length === 0) return "";

  return `
    <section class="modal-section">
      <h3>${title}</h3>
      <ul class="${className}">
        ${items.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </section>
  `;
}

function openPackageModal(packageId, trigger) {
  const item = packages.find((pkg) => pkg.id === packageId);
  if (!item) return;

  lastFocusedElement = trigger;

  const hasPromo = item.promoPrice !== null && item.promoPrice !== undefined;
  const hasNormalPrice = item.normalPrice !== null && item.normalPrice !== undefined;
  const hasRating = item.rating !== null && item.reviews !== null;

  let priceMarkup = "";

  if (hasPromo) {
    const saving = hasNormalPrice ? item.normalPrice - item.promoPrice : null;
    priceMarkup = `
      <div class="modal-price">
        ${hasNormalPrice ? `<span class="normal-price">Rp${formatPrice(item.normalPrice)}</span>` : ""}
        <strong class="promo-price">Rp${formatPrice(item.promoPrice)}</strong>
        <span class="price-unit">/orang</span>
        ${saving !== null ? `<span class="modal-saving">Hemat Rp${formatPrice(saving)}</span>` : ""}
      </div>
    `;
  } else if (hasNormalPrice) {
    priceMarkup = `
      <div class="modal-price">
        <strong class="regular-price">Rp${formatPrice(item.normalPrice)}</strong>
        <span class="price-unit">/orang</span>
      </div>
    `;
  }

  const ratingMarkup = hasRating
    ? `<p class="modal-rating">★ ${item.rating} · ${item.reviews} ulasan</p>`
    : "";

  modalBody.innerHTML = `
    <p class="modal-kicker">${item.category}</p>
    <h2 class="modal-title" id="modal-title">${item.name}</h2>
    ${ratingMarkup}
    ${priceMarkup}

    <section class="modal-section">
      <h3>Tentang Paket</h3>
      <p>${item.description}</p>
    </section>

    <div class="modal-details">
      <div class="modal-detail">
        <small>Durasi</small>
        <strong>${item.duration}</strong>
      </div>
      <div class="modal-detail">
        <small>Lokasi</small>
        <strong>${item.location}</strong>
      </div>
    </div>

    ${listSection("Yang Termasuk", item.facilities)}
    ${listSection("Itinerary", item.itinerary, "itinerary-list")}
    ${listSection("Catatan", item.notes, "notes-list")}

    <button class="button button-primary modal-whatsapp" type="button" data-modal-whatsapp>
      Tanya Paket via WhatsApp
    </button>
  `;

  modal.querySelector("[data-modal-whatsapp]").addEventListener("click", () => {
    openWhatsApp(item.name);
  });

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  requestAnimationFrame(() => {
    modal.querySelector(".modal-close").focus();
  });
}

function closePackageModal() {
  if (!modal.classList.contains("is-open")) return;

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");

  if (lastFocusedElement) {
    lastFocusedElement.focus();
    lastFocusedElement = null;
  }
}

// ==========================================
// FILTER
// ==========================================
function setupFilters() {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      showingAll = false;

      filterButtons.forEach((item) => {
        item.classList.toggle("is-active", item === button);
      });

      renderPackages();
    });
  });
}

// ==========================================
// NAVIGASI
// ==========================================
function setupNavigation() {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  window.addEventListener("scroll", () => {
    header.classList.toggle("is-scrolled", window.scrollY > 30);
  }, { passive: true });
}

// ==========================================
// EVENT LISTENER UTAMA
// ==========================================
packageGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-package-id]");
  if (!button) return;

  openPackageModal(button.dataset.packageId, button);
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", closePackageModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closePackageModal();

  if (event.key === "Tab" && modal.classList.contains("is-open")) {
    const focusable = modal.querySelectorAll(
      'button:not([disabled]), a[href], input:not([disabled]), textarea:not([disabled]), select:not([disabled])'
    );

    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

showMoreButton.addEventListener("click", () => {
  showingAll = !showingAll;
  renderPackages();
});

// ==========================================
// RENDER TESTIMONI
// ==========================================
function renderTestimonials() {
  const testimonialGrid = document.querySelector("#testimonial-grid");

  testimonialGrid.innerHTML = testimonials.map((item) => `
    <article class="testimonial-card">
      <div class="testimonial-stars" aria-label="${item.rating} dari 5 bintang">
        ${"★".repeat(item.rating)}
      </div>
      <blockquote>“${item.comment}”</blockquote>
      <p class="testimonial-name">${item.name}</p>
      <p class="testimonial-location">${item.location}</p>
    </article>
  `).join("");
}

// ==========================================
// INIT
// ==========================================
function init() {
  document.querySelector("#year").textContent = new Date().getFullYear();

  renderPackages();
  renderTestimonials();
  bindWhatsAppLinks();
  setupFilters();
  setupNavigation();
}

init();
