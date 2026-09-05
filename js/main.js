/* Advlity — site data + interactions */

const services = [
  { number: "01", title: "Marketing Strategy", description: "Develop tailored marketing strategies that identify the right audience, define clear objectives, and select the most effective channels and messaging to maximize brand growth and campaign performance." },
  { number: "02", title: "Social Media Marketing", description: "Always-on content, community management and channel strategy that keeps your brand top of mind." },
  { number: "03", title: "Performance Marketing (media buying)", description: "Plan, launch, and optimize paid advertising campaigns across digital platforms to reach the right audiences, maximize return on ad spend, and drive measurable results such as leads, sales, app installs, or conversions." },
  { number: "04", title: "Content Creation & Copywriting", description: "Create engaging visual and written content that captures the brand’s voice, communicates its message clearly, and turns ideas into compelling content that connects with the target audience." },
  { number: "05", title: "Graphic Design", description: "Create visually compelling designs that strengthen brand identity, communicate ideas clearly, and deliver consistent, engaging visuals across digital and marketing platforms." },
  { number: "06", title: "Video & Reel Production", description: "Produce engaging, high-quality videos and short-form reels that capture attention, communicate the brand’s story, and turn creative ideas into compelling content for social media and digital campaigns." },
];

const companies = [
  {
    id: "wozmo",
    name: "WOZMO",
    logo: "images/Wozmo/Logo.jpg",
    industry: "Cold calling & Lead Generation",
    brief: "Real Estate Lead Generation | USA The Challenge Wozmo needed a professional digital presence that could clearly communicate its services and connect with the U.S. real estate market. Our Approach We built the brand’s social media presence from the ground up — developing the strategy, content direction, creative assets, and paid campaigns around its core services. ",
    services: [
      "Social Media Strategy ",
      "Content · Reels ",
      "Creative Design ",
      "Paid Ads",
    ],
    images: [
      "images/Wozmo/photo_5825910867315331837_y.jpg",
      "images/Wozmo/photo_5825910867315331838_y.jpg",
      "images/Wozmo/photo_5825910867315331839_y.jpg",
      "images/Wozmo/photo_5825910867315331840_y.jpg"
    ],
    videos: [
      "images/Wozmo/wozmo 2-4.mp4",
      "images/Wozmo/wozmo 4-1.mp4"
    ],
  },
  {
    id: "FeEltagen",
    name: "Fe Eltagen",
    logo: "images/Fe Eltagen/Logo.jpg",
    industry: "Food & Beverage",
    brief: "Eastern Egyptian Cuisine | Alexandria The Challenge A restaurant needed a stronger social presence that could turn its food, offers, and promotions into content people actually engage with. Our Approach We created a content and marketing direction built around the restaurant’s products and offers, supported by creative visuals, Reels, and paid campaigns. ",
    services: [
      "Social Media Marketing",
      "Event Coverage ",
      "Content Creation",
      "Paid Ads"
    ],
    images: [
      "images/Fe Eltagen/photo_5825910867315331841_y.jpg",
      "images/Fe Eltagen/photo_5825910867315331842_y.jpg",
      "images/Fe Eltagen/photo_5825910867315331843_y.jpg",
      "images/Fe Eltagen/photo_5825910867315331844_y.jpg",
      "images/Fe Eltagen/photo_5825910867315331845_y.jpg",
      "images/Fe Eltagen/photo_5825910867315331846_y.jpg"
    ],
    videos: [
      "images/Fe Eltagen/في الطاجن 1-1 (1).mp4",
      "images/Fe Eltagen/في الطاجن 1-1.mp4"
    ],
  },
  {
    id: "ELAHEBA",
    name: "ELAHEBA",
    logo: "images/ELAHEBA/Logo.jpg",
    industry: "Religious Tourism",
    brief: "Religious Tourism The Focus Keeping the audience connected to the journey — from the events and experiences happening on the ground to the content shared online. Our Approach We handled the brand’s social media marketing and advertising while continuously covering its activities and turning real moments into engaging content. ",
    services: [
      "Social Media Marketing",
      "Event Coverage",
      "Content Creation",
      "Paid Ads"
    ],
    images: [
      "images/ELAHEBA/photo_5825910867315331862_y.jpg",
      "images/ELAHEBA/photo_5825910867315331863_y.jpg",
      "images/ELAHEBA/photo_5825910867315331864_y.jpg",
      "images/ELAHEBA/photo_5825910867315331865_y.jpg",
      "images/ELAHEBA/photo_5825910867315331866_y.jpg",
      "images/ELAHEBA/photo_5825910867315331867_y.jpg"
    ],
    videos: [
      "images/ELAHEBA/0615(4).mp4"
    ],
  },
  {
    id: "Seagull",
    name: "Seagull",
    logo: "images/Seagull/Logo.jpg",
    industry: "Tourism & Travel",
    brief: "Tourism & Travel The Focus Creating travel content that feels informative, visual, and engaging. Our Approach From social media marketing and advertising to video production and in-house voice-over, we handled the content process end-to-end. ",
    services: [
      "Social Media Marketing",
      "Video Production",
      "Voice-over",
      "Paid Ads"
    ],
    images: [
      "images/Seagull/photo_5825910867315331847_y.jpg",
      "images/Seagull/photo_5825910867315331848_y.jpg",
      "images/Seagull/photo_5825910867315331850_y.jpg",
      "images/Seagull/photo_5825910867315331851_y.jpg",
      "images/Seagull/photo_5825910867315331852_y.jpg",
      "images/Seagull/photo_5825910867315331861_y.jpg"
    ],
    videos: [
      "images/Seagull/WhatsApp Video 2026-09-05 at 20.38.46.mp4",
      "images/Seagull/WhatsApp Video 2026-09-05 at 20.38.46 (1).mp4",
      "images/Seagull/WhatsApp Video 2026-09-05 at 20.39.09.mp4"
    ],
  },
  {
    id: "MKFurniture",
    name: "MK Furniture",
    logo: "images/MK Furniture/Logo.jpg",
    industry: "Furniture & Home Solutions",
    brief: "Furniture & Home Solutions The Focus Putting the real product at the center of the brand’s social presence. Our Approach We developed a content plan focused on showcasing MK Furniture’s actual products in a way that makes them clear, attractive, and relevant to the customer. ",
    services: [
      "Social Media Marketing",
      "Content Strategy",
      "Product Content",
      "Paid Ads",
      "Creative Design"
    ],
    images: [
      "images/MK Furniture/photo_5825910867315331853_y.jpg",
      "images/MK Furniture/photo_5825910867315331854_y.jpg",
      "images/MK Furniture/photo_5825910867315331855_y.jpg",
      "images/MK Furniture/photo_5825910867315331856_y.jpg",
      "images/MK Furniture/photo_5825910867315331857_y.jpg",
      "images/MK Furniture/photo_5825910867315331858_y.jpg"
    ],
    videos: []
  }
];

const publicClients = companies.map((company) => ({
  id: company.id,
  name: company.name,
  logo: company.logo,
  public: true,
}));

const privateClients = [
  {
    id: "HASSANIN",
    name: "HASSANIN",
    logo: "images/HASSANAIN/Logo.jpg",
    public: false,
  },
  {
    id: "NOVORA",
    name: "NOVORA",
    logo: "images/NOVORA/Logo.jpg",
    public: false,
  },

];

// Legacy projects array (used for homepage work grid)
const projects = companies.map((c) => ({
  name: c.name,
  industry: c.industry,
  services: c.services.slice(0, 2).join(" + "),
  image: c.images[0],
  alt: `${c.name} project showcase`,
  id: c.id
}));

const steps = [
  { step: "01", name: "Discover", text: "We understand your business, audience, goals, and market." },
  { step: "02", name: "Strategize", text: "We develop the marketing strategy and creative direction your brand needs." },
  { step: "03", name: "Create & Execute", text: "We bring ideas to life through content, design, campaigns, and performance marketing." },
  { step: "04", name: "Grow & Optimize", text: "We measure performance, improve what works, and build toward sustainable growth." },
];

const esc = (s) => String(s).replace(/[&<>\"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const assetUrl = (path) => {
  if (!String(path).startsWith("images/")) return path;
  const nestedPage = /\/(?:home|portfolio)\//.test(window.location.pathname);
  return nestedPage ? `../${path}` : path;
};

const getCardBrief = (brief) => {
  const cleaned = String(brief || "")
    .replace(/\|/g, " ")
    .replace(/\b(the challenge|usa)\b/gi, "")
    .replace(/\s+/g, " ")
    .replace(/\s+([,.!?])/g, "$1")
    .trim();

  const words = cleaned.split(" ").filter(Boolean);
  const trimmed = words.length > 12 ? `${words.slice(0, 12).join(" ")}...` : cleaned;

  return trimmed || "Growth marketing built for measurable results.";
};

function renderCaseStudyCards() {
  const grid = document.getElementById("caseStudyCards");
  if (!grid) return;
  
  grid.innerHTML = companies
    .map((company) => `
      <article class="case-study-card reveal" data-company-id="${esc(company.id)}">
        <div class="card-logo">
          <img src="${esc(assetUrl(company.logo))}" alt="${esc(company.name)} logo" width="120" height="80" />
        </div>
        <div class="card-content">
          <p class="eyebrow">${esc(company.industry)}</p>
          <h3>${esc(company.name)}</h3>
          <p class="card-services">${company.services.join(", ")}</p>
          <p class="card-brief">${esc(getCardBrief(company.brief))}</p>
        </div>
        <div class="card-action">
          <span class="view-link">View Case Study →</span>
        </div>
      </article>
    `)
    .join("");

  // Add click handlers to open case study modal
  grid.querySelectorAll(".case-study-card").forEach((card) => {
    card.addEventListener("click", () => {
      const companyId = card.dataset.companyId;
      const company = companies.find((c) => c.id === companyId);
      if (company) showCaseStudyModal(company);
    });
  });
}

function renderCaseStudyModal(company, index) {
  const prevId = index > 0 ? companies[index - 1].id : companies[companies.length - 1].id;
  const nextId = index < companies.length - 1 ? companies[index + 1].id : companies[0].id;
  
  let videosHTML = "";
  if (company.videos && company.videos.length > 0) {
    videosHTML = `
      <div class="case-study-videos">
        <h3>Project Videos</h3>
        <div class="videos-grid">
          ${company.videos
            .map((video) => `
              <div class="video-container">
                <video controls width="100%" height="auto">
                  <source src="${esc(assetUrl(video))}" type="video/mp4">
                  Your browser does not support the video tag.
                </video>
              </div>
            `)
            .join("")}
        </div>
      </div>
    `;
  }

  const imagesHTML = company.images
    .map((img) => `
      <div class="gallery-item" data-gallery-image="${esc(assetUrl(img))}">
        <img src="${esc(assetUrl(img))}" alt="${esc(company.name)} project image" width="600" height="400" loading="lazy" />
      </div>
    `)
    .join("");

  const html = `
    <div class="modal-header">
      <button class="modal-close" id="closeModal" aria-label="Close">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
      </button>
      <div class="modal-nav">
        <button class="modal-nav-btn prev" id="prevCaseStudy" aria-label="Previous case study" title="Previous">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        <span class="modal-counter"><span id="currentIndex">${index + 1}</span> / <span id="totalCount">${companies.length}</span></span>
        <button class="modal-nav-btn next" id="nextCaseStudy" aria-label="Next case study" title="Next">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>

    <div class="modal-content">
      <div class="modal-inner-container">
        <div class="case-study-header">
          <div class="header-logo">
            <img src="${esc(assetUrl(company.logo))}" alt="${esc(company.name)} logo" width="200" height="100" />
          </div>
          <div class="header-info">
            <p class="eyebrow">${esc(company.industry)}</p>
            <h2>${esc(company.name)}</h2>
          </div>
        </div>

        <div class="case-study-sections">
          <section class="case-section">
            <h3>Brief</h3>
            <p>${esc(company.brief)}</p>
          </section>

          <section class="case-section">
            <h3>Services Provided</h3>
            <ul class="services-list">
              ${company.services.map((s) => `<li>${esc(s)}</li>`).join("")}
            </ul>
          </section>

        </div>

        <div class="case-study-gallery">
          <h3>Project Gallery</h3>
          <div class="gallery-grid">
            ${imagesHTML}
          </div>
        </div>

        ${videosHTML}
      </div>
    </div>

    <div class="modal-footer">
      <button class="modal-nav-full prev" id="prevCaseStudyFooter" aria-label="Previous case study">← Previous</button>
      <button class="modal-nav-full next" id="nextCaseStudyFooter" aria-label="Next case study">Next →</button>
    </div>
  `;

  return html;
}

function showCaseStudyModal(company) {
  const modal = document.getElementById("caseStudyModal");
  const modalBody = document.getElementById("modalBody");
  
  const index = companies.findIndex((c) => c.id === company.id);
  modalBody.innerHTML = renderCaseStudyModal(company, index);
  
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
  
  attachModalHandlers(index);
  attachGalleryHandlers();
}

function closeCaseStudyModal() {
  const modal = document.getElementById("caseStudyModal");
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

function attachModalHandlers(currentIndex) {
  const prevBtns = document.querySelectorAll("#prevCaseStudy, #prevCaseStudyFooter");
  const nextBtns = document.querySelectorAll("#nextCaseStudy, #nextCaseStudyFooter");
  const closeBtn = document.getElementById("closeModal");

  closeBtn?.addEventListener("click", closeCaseStudyModal);

  prevBtns.forEach((btn) =>
    btn?.addEventListener("click", () => {
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : companies.length - 1;
      showCaseStudyModal(companies[prevIndex]);
    })
  );

  nextBtns.forEach((btn) =>
    btn?.addEventListener("click", () => {
      const nextIndex = currentIndex < companies.length - 1 ? currentIndex + 1 : 0;
      showCaseStudyModal(companies[nextIndex]);
    })
  );

  // Close on backdrop click
  const modal = document.getElementById("caseStudyModal");
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) closeCaseStudyModal();
  });

  // Close on Escape key
  const handleEscape = (e) => {
    if (e.key === "Escape" && modal?.classList.contains("active")) {
      closeCaseStudyModal();
    }
  };
  document.addEventListener("keydown", handleEscape);
}

function attachGalleryHandlers() {
  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxClose = document.getElementById("lightboxClose");
  const lightboxPrev = document.getElementById("lightboxPrev");
  const lightboxNext = document.getElementById("lightboxNext");

  if (!galleryItems.length || !lightbox) return;

  let currentImageIndex = 0;

  function showLightbox(index) {
    currentImageIndex = index;
    const img = galleryItems[index].querySelector("img");
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add("active");
  }

  function closeLightbox() {
    lightbox.classList.remove("active");
  }

  galleryItems.forEach((item, i) => {
    item.addEventListener("click", () => showLightbox(i));
  });

  lightboxClose?.addEventListener("click", closeLightbox);

  lightboxPrev?.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
    showLightbox(currentImageIndex);
  });

  lightboxNext?.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
    showLightbox(currentImageIndex);
  });

  lightbox?.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Keyboard navigation
  const handleKeyboard = (e) => {
    if (!lightbox.classList.contains("active")) return;
    if (e.key === "ArrowLeft") {
      currentImageIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
      showLightbox(currentImageIndex);
    } else if (e.key === "ArrowRight") {
      currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
      showLightbox(currentImageIndex);
    } else if (e.key === "Escape") {
      closeLightbox();
    }
  };
  document.addEventListener("keydown", handleKeyboard);
}

function render() {
  const servicesGrid = document.getElementById("servicesGrid");
  if (servicesGrid) servicesGrid.innerHTML = services
    .map((s) => `
      <article class="service-card reveal">
        <div>
          <span class="num">${s.number}</span>
          <h3>${esc(s.title)}</h3>
          <p>${esc(s.description)}</p>
        </div>
        <span class="rule"></span>
      </article>`)
    .join("");

  const workGrid = document.getElementById("workGrid");
  if (workGrid) {
    const clientsToShow = [...publicClients, ...privateClients];

    workGrid.innerHTML = clientsToShow
      .map((client) => `
        <article class="client-card reveal" aria-label="${esc(client.name)} client">
          <div class="client-logo">
            ${client.logo
              ? `<img src="${esc(assetUrl(client.logo))}" alt="${esc(client.name)} logo" width="180" height="110" loading="lazy" />`
              : `<span class="client-name-only">${esc(client.name)}</span>`}
          </div>
          <p>${esc(client.name)}</p>
        </article>`)
      .join("");
  }

  const stepsGrid = document.getElementById("stepsGrid");
  if (stepsGrid) stepsGrid.innerHTML = steps
    .map((s) => `
      <div class="step-card reveal">
        <span class="num">${s.step}</span>
        <h4>${esc(s.name)}</h4>
        <p>${esc(s.text)}</p>
      </div>`)
    .join("");

  const servicePickers = document.querySelectorAll("[data-service-picker]");
  servicePickers.forEach((picker) => {
    const menu = picker.querySelector(".multi-select-menu");
    const toggle = picker.querySelector(".multi-select-toggle");
    const label = picker.querySelector(".multi-select-label");
    if (!menu || !toggle || !label) return;

    menu.innerHTML = services
      .map((service) => `
        <label class="multi-option">
          <input type="checkbox" value="${esc(service.title)}" data-service-option />
          <span>${esc(service.title)}</span>
        </label>
      `)
      .join("");

    const syncSelection = () => {
      const checked = [...menu.querySelectorAll("[data-service-option]:checked")].map((input) => input.value);
      if (!checked.length) {
        label.textContent = "Select one or more services";
        return;
      }
      label.textContent = checked.length === 1 ? checked[0] : `${checked.length} services selected`;
    };

    toggle.addEventListener("click", () => {
      const isOpen = picker.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    menu.querySelectorAll("[data-service-option]").forEach((input) => {
      input.addEventListener("change", syncSelection);
    });

    document.addEventListener("click", (event) => {
      if (!picker.contains(event.target)) {
        picker.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    syncSelection();
  });

  // Only render portfolio case studies on the portfolio page.
  const isPortfolioPage = document.getElementById("caseStudyCards") !== null;
  if (isPortfolioPage) {
    renderCaseStudyCards();
  }
}

/* Navbar */
function initNav() {
  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("mobileMenu");
  if (!navbar || !toggle || !menu) return;

  const onScroll = () => navbar.classList.toggle("scrolled", window.scrollY > 20);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  menu.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

/* Scroll reveal */
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  items.forEach((el) => io.observe(el));
}

/* Contact form */
function validate(v) {
  const errors = {};
  if (v.name.trim().length < 2) errors.name = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) errors.email = "Please enter a valid email address.";
  if (!/^[+0-9\s()-]{7,20}$/.test(v.phone.trim())) errors.phone = "Please enter a valid phone number.";
  const selectedServices = Array.isArray(v.service) ? v.service : [v.service].filter(Boolean);
  if (!selectedServices.length) errors.service = "Please select at least one service.";
  if (v.message.trim().length < 10) errors.message = "Tell us a little more (min. 10 characters).";
  return errors;
}

function initForm() {
  const form = document.getElementById("contactForm");
  const btn = document.getElementById("submitBtn");
  if (!form || !btn) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const selectedServices = Array.from(form.querySelectorAll("[data-service-option]:checked")).map((option) => option.value).filter(Boolean);
    const values = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      service: selectedServices,
      message: form.message.value,
    };

    const errors = validate(values);
    form.querySelectorAll("[data-error-for]").forEach((el) => {
      el.textContent = errors[el.dataset.errorFor] || "";
    });
    if (Object.keys(errors).length) return;

    btn.disabled = true;
    btn.textContent = "Sending…";

    // Connect a real endpoint here later, e.g. fetch("/api/contact", {...}).
    setTimeout(() => {
      sessionStorage.setItem("contact_submitted", "1");
      window.location.href = window.location.pathname.includes("/home/") || window.location.pathname.includes("/portfolio/")
        ? "../thank-you/thank-you.html"
        : "thank-you/thank-you.html";
    }, 500);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  render();
  initNav();
  initReveal();
  initForm();
  document.getElementById("year").textContent = new Date().getFullYear();
});
