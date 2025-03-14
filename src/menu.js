// Scroll
const navbar = $('.nav_wrapper');
const scrollHeight = $(navbar).height();

$(window).on('scroll', () => {
  if (navbar.length) {
    // First check if we've scrolled past initial threshold
    if (window.scrollY > scrollHeight * 2) {
      navbar.addClass('fixed');
    } else {
      navbar.removeClass('fixed');
    }
  }
});

// Click
// Function to create observer and handle class change
function createObserver(targetSelector, callback) {
  const targetNodes = $(targetSelector);
  targetNodes.each(function () {
    const observer = new MutationObserver((mutationsList) => {
      mutationsList.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          callback(mutation.target);
        }
      });
    });
    observer.observe(this, { attributes: true, attributeFilter: ['class'] }); // Pass the DOM node directly
  });
}
function dropdownCallback(targetElement) {
  if ($(targetElement).hasClass('w--open')) {
    navbar.addClass('open');
  } else {
    navbar.removeClass('open');
  }
}

// Animation
let masterTl;
gsap.matchMedia().add('(max-width: 991px)', () => {
  masterTl = gsap.timeline({ paused: true });

  masterTl
    .fromTo('.nav_button .button p', { text: 'Menu' }, { text: 'Close' })
    .from(
      $('.nav_link .nav_link-inner'),
      {
        delay: 0.6,
        yPercent: 100,
        stagger: 0.1,
      },
      '<'
    )
    .from(
      $('.menu-bg_shape-box.menu-1'),
      {
        x: '-50vw',
        rotate: -10,
      },
      '<0.2'
    )
    .from(
      $('.menu-bg_shape-box.menu-2'),
      {
        x: '50vw',
        rotate: 10,
      },
      '<0.2'
    )
    .from($('.nav_menu-items-role'), { opacity: 0 }, '<0.2');

  return masterTl;
});

// Open Logic
let scrollPosition;
let menuOpen = false;
const disableScroll = () => {
  dropdownCallback('.w-nav-button');
  if (!menuOpen) {
    scrollPosition = $(window).scrollTop();
    $('html, body').scrollTop(0).addClass('overflow-hidden');
    masterTl.play();
  } else {
    $('html, body').scrollTop(scrollPosition).removeClass('overflow-hidden');
    masterTl.reverse();
  }
  menuOpen = !menuOpen;
};

// Create observers for the elements with their respective callbacks
createObserver('.w-nav-button', disableScroll);
