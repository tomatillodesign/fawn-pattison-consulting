const headers = document.querySelectorAll(".clb-section-header-wrapper");

const observer = new IntersectionObserver( 
  ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
  { threshold: [1] }
);

headers.forEach(function (el, index) {
    console.log(el);
    observer.observe(el);
});

