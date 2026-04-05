// Food grid — add filenames here when dropping new images into resources/foods/
const foodImages = [
  'dac-biet.png',
  'dau-hu.png',
  'ga.png',
  'heo-quay.png',
  'muoi-ot.png',
  'thit-nuong.png',
  'trung.jpg',
  'pho-bo.png',
  'bot-chien.png',
];

const foodGrid = document.querySelector('.food-grid');
if (foodGrid) {
  foodGrid.innerHTML = foodImages
    .map((file) => {
      const alt = file
        .replace(/\.[^.]+$/, '')
        .replace(/-/g, ' ')
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      return `<div class="food-item"><img src="resources/foods/${file}" alt="${alt}" loading="lazy" /></div>`;
    })
    .join('');
}

//Swiper
const swiper = new Swiper('.mySwiper', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 30,
  centeredSlides: true,
  freeMode: {
    enabled: true,
    momentum: true,
    momentumRatio: 0.5,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
  },
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.section').forEach((section) => {
  observer.observe(section);
});
