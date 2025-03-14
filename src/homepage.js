import { runSplit } from './utils/globalFunctions';

function runHero() {
  // Split

  runSplit('.hero_wrap h1');

  let tl = gsap.timeline();

  // Init Reveal
  tl.from(
    '.section_hp-hero .word',
    {
      yPercent: 50,
      opacity: 0,
      duration: 2,
      stagger: {
        amount: 0.5,
      },
      ease: 'power3.out',
    },
    '<'
  );
  tl.from(
    ['.hero_wrap p', '.nav_wrapper'],
    {
      opacity: 0,
      duration: 0.5,
    },
    '-=1'
  );

  // Reveal and scroll anim
  function initShapeReveal() {
    let tl = gsap.timeline({
      onComplete: () => {
        animateHero();
      },
    });
    // Init reval
    tl.set('.hp-hero_bg-box', { scale: 4, rotate: 45, y: '90em', x: '-25em' });
    tl.set('.hp-hero_bg-shape.hp-2', { rotate: -90, y: '-15em', x: '10em' }, '<');
    $('.hp-hero_bg').css('visibility', 'visible');
    tl.from(
      '.hp-hero_bg-shape.hp-1 .hp-hero_bg-shape-inner',
      {
        y: '20vw',
        duration: 3,
        ease: 'power3.inOut',
      },
      '<'
    );
    tl.from(
      '.hp-hero_bg-shape.hp-2 .hp-hero_bg-shape-inner',
      {
        y: '20vw',
        duration: 3,
        ease: 'power3.inOut',
      },
      '<'
    );
  }
  function animateHero() {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.section_hp-hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        immediateRender: true,
      },
    });

    tl.to('.hp-hero_bg-box', { scale: 1, rotate: 0, y: '0em', x: '0em' });
    tl.to('.hp-hero_bg-shape.hp-2', { rotate: 0, y: '0em', x: '0em' }, '<');
    tl.to(
      ['.hero_wrap h1', '.hero_wrap p'],
      {
        keyframes: {
          '0%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        stagger: 0.1,
      },
      '<'
    );
  }

  //Init
  initShapeReveal();
}

function shapeAppears() {
  $('[data-shape-appear]').each(function () {
    let shape = $(this);
    let direction = shape.attr('data-shape-appear');

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: this, // Note: using 'this' directly is fine here
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });

    // Pass the object of parameters to GSAP
    if ((direction = 'right')) {
      tl.from(shape, { rotate: 15, y: '10vh' });
    }
  });
}

$(document).ready(function () {
  runHero();
  shapeAppears();
});
