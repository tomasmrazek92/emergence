import { runSplit } from './utils/globalFunctions';

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
function resultsList() {
  $('.results_list').each(function () {
    let listItems = $(this).find('.results_list-item');

    listItems.each(function () {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: $(this),
          start: 'top center',
          end: 'bottom center',
          toggleActions: 'play reverse play reverse',
        },
      });

      tl.to($(this), { color: 'white' });
    });
  });
}
function animateTeamHero() {
  $('.section_hero.cc-team').each(function () {
    runSplit('.section_hero h1');
    gsap.from(
      '.section_hero .word',
      {
        yPercent: 50,
        opacity: 0,
        duration: 2,
        stagger: {
          amount: 0.1,
        },
        ease: 'power3.out',
      },
      '<'
    );
    gsap.fromTo(
      '.section_hero [data-misc]',
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
      },
      '-=1'
    );
    gsap.from('.team-hero_shape', {
      yPercent: 100,
      stagger: 0.2,
      ease: 'power3.inOut',
      duration: 1,
    });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    });

    tl.to($(this).find('.team-hero_shape-box'), { perspective: '0em' });
  });
}
function animateAboutHero() {
  $('.section_hero.cc-about').each(function () {
    runSplit('.section_hero h1');
    gsap.fromTo(
      '.section_hero .word',
      {
        yPercent: 50,
        opacity: 0,
      },
      {
        yPercent: 0,
        opacity: 1,
        duration: 2,
        stagger: {
          amount: 0.1,
        },
        ease: 'power3.out',
      },

      '<'
    );
    gsap.fromTo(
      '.about-hero_shape',
      {
        yPercent: 110,
      },
      {
        yPercent: 0,
        stagger: 0.4,
        ease: 'power3.inOut',
        duration: 3,
      }
    );

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    });

    tl.to($(this).find('.about-hero_shape-inner'), { yPercent: -100, rotate: -10 });
  });
}
function animatePortfolioHero() {
  $('.section_hero.cc-portfolio').each(function () {
    runSplit('.section_hero h1');

    let loader = gsap.timeline();

    loader.fromTo(
      '.section_hero .word',
      {
        yPercent: 50,
        opacity: 0,
      },
      {
        yPercent: 0,
        opacity: 1,
        duration: 2,
        stagger: {
          amount: 0.1,
        },
        ease: 'power3.out',
      },
      '<'
    );
    loader.fromTo(
      '.section_hero [data-misc]',
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
        ease: 'power3.out',
      },
      '-=1'
    );
    loader.fromTo(
      '.portfolio-hero_shape.cc-1',
      {
        yPercent: 110,
      },
      {
        yPercent: 0,
        stagger: 0.4,
        ease: 'power3.inOut',
        duration: 2,
      },
      '0'
    );
    loader.fromTo(
      '.portfolio-hero_shape.cc-2',
      {
        yPercent: -110,
      },
      {
        yPercent: 0,
        stagger: 0.4,
        ease: 'power3.inOut',
        duration: 2,
      },
      '0'
    );

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    });

    tl.to($(this).find('.portfolio-hero_shape-inner.cc-1'), { rotate: -5 });
    tl.to($(this).find('.portfolio-hero_shape-inner.cc-2'), { rotate: -5, yPercent: -10 }, '<');
  });
}
function animateBlogHero() {
  $('.section_hero.cc-blog').each(function () {
    runSplit('.section_hero h1');

    let loader = gsap.timeline();

    loader.fromTo(
      '.section_hero .word',
      {
        yPercent: 50,
        opacity: 0,
      },
      {
        yPercent: 0,
        opacity: 1,
        duration: 2,
        stagger: {
          amount: 0.1,
        },
        ease: 'power3.out',
      },
      '<'
    );
    loader.fromTo(
      '.section_hero [data-misc]',
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
        ease: 'power3.out',
      },
      '-=1'
    );
    loader.fromTo(
      '.blog-hero_shape.cc-1',
      {
        x: '-100vw',
        yPercent: '100',
      },
      {
        x: '0vw',
        yPercent: '0',
        stagger: 0.4,
        ease: 'power3.inOut',
        duration: 2,
      },
      '0'
    );
    loader.fromTo(
      '.blog-hero_shape.cc-2',
      {
        yPercent: -110,
      },
      {
        yPercent: 0,
        stagger: 0.4,
        ease: 'power3.inOut',
        duration: 2,
      },
      '0'
    );

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    });

    tl.to($(this).find('.blog-hero_shape-inner.cc-1'), { y: '100vh' });
    tl.to($(this).find('.blog-hero_shape-inner.cc-2'), { y: '100vh' }, '<');
  });
}
function animateConvictionHero() {
  $('.section_hero.cc-convictions').each(function () {
    runSplit('.section_hero h1');

    let loader = gsap.timeline();

    loader.fromTo(
      '.section_hero .word',
      {
        yPercent: 50,
        opacity: 0,
      },
      {
        yPercent: 0,
        opacity: 1,
        duration: 2,
        stagger: {
          amount: 0.1,
        },
        ease: 'power3.out',
      },
      '<'
    );
    loader.fromTo(
      '.section_hero [data-misc]',
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
        ease: 'power3.out',
      },
      '-=1'
    );
    loader.fromTo(
      '.convictions-hero_shape.cc-1',
      {
        yPercent: '100',
      },
      {
        yPercent: '0',
        stagger: 0.4,
        ease: 'power3.inOut',
        duration: 2,
      },
      '0'
    );
    loader.fromTo(
      '.convictions-hero_shape.cc-2',
      {
        yPercent: -110,
      },
      {
        yPercent: 0,
        stagger: 0.4,
        ease: 'power3.inOut',
        duration: 2,
      },
      '0'
    );

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    });

    tl.to($(this).find('.blog-hero_shape-inner.cc-1'), { y: '100vh' });
    tl.to($(this).find('.blog-hero_shape-inner.cc-2'), { y: '100vh' }, '<');
  });
}
function animateCTABG() {
  $('.cta-bg_wrap').each(function () {
    let wrap = $(this);
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrap,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });
    tl.fromTo(
      wrap.find('.cta-bg_shape').eq(0),
      { y: '10vh', rotate: 10 },
      { y: '-10vh', rotate: -10 }
    );
    tl.fromTo(
      wrap.find('.cta-bg_shape').eq(1),
      { y: '10vh', rotate: -10 },
      { y: '-10vh', rotate: 10 },
      '<'
    );
  });
}
function animateCTABGBIG() {
  $('.cta-big_bg').each(function () {
    let wrap = $(this);
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrap,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });
    tl.fromTo(
      wrap.find('.cta-big_bg-shape').eq(0),
      { y: '10vh', rotate: 10 },
      { y: '-10vh', rotate: -10 }
    );
    tl.fromTo(
      wrap.find('.cta-big_bg-shape').eq(1),
      { y: '10vh', rotate: -10 },
      { y: '-10vh', rotate: 10 },
      '<'
    );
    tl.fromTo(
      wrap.find('.cta-big_bg-shape').eq(2),
      { y: '10vh', rotate: 5 },
      { y: '-10vh', rotate: -5 },
      '<'
    );
  });
}
function animateSectionHeader() {
  $('.section_head').each(function () {
    let self = $(this);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: 'top center',
        onEnter: () => {
          self.addClass('in-view');
        },
      },
    });
  });
}
function shapeAppears() {
  $('[data-shape-appear]').each(function () {
    let shape = $(this);
    let rotateFrom = shape.attr('data-shape-rotate-from');
    let rotateTo = shape.attr('data-shape-rotate-to');

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: this, // Note: using 'this' directly is fine here
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });

    // Pass the object of parameters to GSAP
    tl.fromTo(shape, { rotate: rotateFrom, y: '0vh' }, { rotate: rotateTo, y: '10vh' });
  });
}

$(document).ready(function () {
  initDesktopSwiper();
  resultsList();
  animateTeamHero();
  animateAboutHero();
  animatePortfolioHero();
  animateBlogHero();
  animateConvictionHero();
  animateCTABG();
  animateCTABGBIG();
  animateSectionHeader();
  shapeAppears();
});
