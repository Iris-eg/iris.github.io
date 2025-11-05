document.addEventListener("DOMContentLoaded", function() {

  // --- 1. منطق الـ Pop-up (Lightbox) ---
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const portfolioItems = document.querySelectorAll(".portfolio-img"); // تأكد من وجود الصور
  const closeBtn = document.querySelector(".close-btn");

  if (lightbox && lightboxImg && portfolioItems.length > 0 && closeBtn) {
      portfolioItems.forEach(item => {
        item.addEventListener("click", () => {
          const largeImgSrc = item.getAttribute("data-src");
          lightboxImg.src = largeImgSrc;
          lightbox.classList.add("show");
        });
      });

      closeBtn.addEventListener("click", () => {
        lightbox.classList.remove("show");
      });

      lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
          lightbox.classList.remove("show");
        }
      });
  }

  // --- 2. منطق شريط التنقل (Navbar) عند السكرول ---
  const navbar = document.getElementById("navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }

  // --- 3. منطق الـ Scroll-Reveal Animation ---
  const revealElements = document.querySelectorAll(".reveal");

  if (revealElements.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };

    function revealCallback(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // إضافة الكلاس ليتم التحريك
          entry.target.classList.add("active");
          
          // إيقاف المراقبة بعد ظهور العنصر
          observer.unobserve(entry.target);
        }
      });
    }

    const revealObserver = new IntersectionObserver(revealCallback, observerOptions);

    revealElements.forEach(el => {
      const delay = el.getAttribute("data-delay");
      if (delay) {
        el.style.transitionDelay = `${delay}ms`;
      }
      revealObserver.observe(el);
    });
  }

});