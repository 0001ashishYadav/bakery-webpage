// phone btn

const phEnSec = document.getElementById("ph-en-sec");
const desHomPage = document.getElementById("des-hom-page");
const phEnBtn = document.getElementById("phone-ent-btn");

phEnBtn.addEventListener("click", () => {
  phEnSec.classList.add("hidden");
  desHomPage.classList.remove("hidden");
});

const homeLeftTextConEl = document.getElementById("home-left-text");
const homeImgEl = document.getElementById("home-img");

const aboutImg1El = document.getElementById("about-img-1");
const aboutImg2El = document.getElementById("about-img-2");

const aboutTitleEl = document.getElementById("about-title");

const popularCardSecEl = document.getElementById("popular-card-sec");

const recentlyTitleEl = document.getElementById("recently-title");
const recentlyImgeEl = document.getElementById("recently-img");

// for home section ..................
// console.log(window);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      //   console.log(entry);

      if (entry.isIntersecting) {
        entry.target.classList.add("animate-upSlider");
      }

      if (!entry.isIntersecting) {
        entry.target.classList.remove("animate-upSlider");
      }
    });
  },
  { threshold: 0.3 }
);

if (window.innerWidth > 320) {
  observer.observe(homeLeftTextConEl);
  observer.observe(recentlyTitleEl);
}

const homeImgObj = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      //   console.log(entry);

      if (entry.isIntersecting) {
        entry.target.classList.add("animate-downSlider");
      }

      if (!entry.isIntersecting) {
        entry.target.classList.remove("animate-downSlider");
      }
    });
  },
  { threshold: 0.3 }
);

if (window.innerWidth > 320) {
  homeImgObj.observe(homeImgEl);
}

// for about sec ...................

const aboutImgObj = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      //   console.log(entry);

      if (entry.isIntersecting) {
        entry.target.classList.add("animate-rightSlider");
      }

      if (!entry.isIntersecting) {
        entry.target.classList.remove("animate-rightSlider");
      }
    });
  },
  { threshold: 0.3 }
);

if (window.innerWidth > 320) {
  aboutImgObj.observe(aboutImg1El);
  aboutImgObj.observe(aboutImg2El);
  aboutImgObj.observe(recentlyImgeEl);
}

const aboutTitleObj = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      //   console.log(entry);

      if (entry.isIntersecting) {
        entry.target.classList.add("animate-leftSlider");
      }

      if (!entry.isIntersecting) {
        entry.target.classList.remove("animate-leftSlider");
      }
    });
  },
  { threshold: 0.3 }
);

if (window.innerWidth > 320) {
  aboutTitleObj.observe(aboutTitleEl);
}

const popularObj = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      //   console.log(entry);

      if (entry.isIntersecting) {
        entry.target.classList.add("animate-downSlider");
      }

      if (!entry.isIntersecting) {
        entry.target.classList.remove("animate-downSlider");
      }
    });
  },
  { threshold: 0.3 }
);

if (window.innerWidth > 320) {
  popularObj.observe(popularCardSecEl);
}
