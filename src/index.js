// Function to initialize Swiper only on desktop (992px+)
function initDesktopSwiper() {
  let swiper;

  // Function to check window width and initialize or destroy Swiper accordingly
  function checkWidth() {
    const windowWidth = $(window).width();

    let sliderWrap = $('.ai-slider');

    if (!sliderWrap.length) return;

    // If window width is 992px or more and swiper doesn't exist
    if (windowWidth >= 992 && (!swiper || swiper.destroyed)) {
      // Initialize Swiper
      swiper = new Swiper('.ai-slider', {
        // Your Swiper options here
        slidesPerView: 'auto',
        spaceBetween: 32,
        navigation: {
          nextEl: '.swiper-arrow.next',
          prevEl: '.swiper-arrow.prev',
        },
      });
    }
    // If window width is less than 992px and swiper exists
    else if (windowWidth < 992 && swiper && !swiper.destroyed) {
      // Destroy Swiper instance
      swiper.destroy(true, true);
      swiper = undefined;
    }
  }

  // Check width on page load
  $(document).ready(function () {
    checkWidth();
  });

  // Check width on window resize (with debounce for better performance)
  let resizeTimer;
  $(window).resize(function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      checkWidth();
    }, 250);
  });
}

$(document).ready(function () {
  initDesktopSwiper();
});
