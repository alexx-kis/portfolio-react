import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// $------------------------ ANIMATIONS ------------------------$ //
// $------------ hero animation ------------$ //
const heroAnimation = gsap.timeline({
  defaults: {
    opacity: 0,
  }
});

window.addEventListener('load', () => {
  heroAnimation
    .to('body', {
      opacity: 1,
      function() {
        document.body.classList.add('no-scroll');
      }
    }, '<')
    .to('.preloader', {
      display: 'none'
    })
    .from('.hero', {
      duration: 1,
    })
    .from('.hero__heading', {
      xPercent: -100,
    })
    .from('.hero__text', {
      xPercent: -100,
    })
    .from('.hero__button', {
      xPercent: -100,
    })
    .from('.header', {
      yPercent: -100,
    })
    .to('body', {
      opacity: 1,
      function() {
        document.body.classList.remove('no-scroll');
      }
    }, '<');


  // $------------ hero scroll ------------$ //
  const heroScrollAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: '.hero',
      markers: false,
      start: '0% 0%',
      end: '80% 0%',
      scrub: 1,
    }
  });
  heroScrollAnimation
    .to('.hero__heading', {
      yPercent: -300,
      opacity: 0,
    }, '<')
    .to('.hero__text', {
      yPercent: -300,
      opacity: 0,
    }, '<')
    .to('.hero__button', {
      yPercent: -300,
      opacity: 0,
    }, '<');

  // $------------ about scroll ------------$ //
  // $ in
  const aboutScrollAnimationIn = gsap.timeline({
    defaults: {
      opacity: 0,
      yPercent: 200,
    },
    scrollTrigger: {
      trigger: '.about',
      markers: false,
      start: '0% 100%',
      end: '0% 0%',
      scrub: 1,
    }
  });

  const aboutScrollAnimationOut = gsap.timeline({
    defaults: {
      opacity: 0,
      yPercent: -80,
    },
    scrollTrigger: {
      trigger: '.about',
      markers: false,
      start: '110% 100%',
      end: '110% 0%',
      scrub: 1,
    }
  });

  // $ out
  aboutScrollAnimationOut
    .to('.about__headings', {
    })
    .to('.about__image', {
    }, '<')
    .to('.about__info', {
    }, '<');

  const skillsScrollAnimationOut = gsap.timeline({
    defaults: {
      opacity: 0,
    },
    scrollTrigger: {
      trigger: '.skills',
      markers: false,
      start: '100% 100%',
      end: '100% 0%',
      scrub: 1,
    }
  });

  skillsScrollAnimationOut
    .to('.skills__heading', {
      yPercent: -200,
    })
    .to('.skills__group', {
      yPercent: -200,
      stagger: 0.1,
    }, '<');

  // $------------ works scroll ------------$ //
  // $ in
  document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth > 600) {
      const worksScrollAnimationIn = gsap.timeline({
        defaults: {
          opacity: 0,

        },
        scrollTrigger: {
          trigger: '.works',
          markers: false,
          start: '0% 100%',
          end: '100% 100%',
          scrub: 1,
        }
      });

      worksScrollAnimationIn
        .from('.works__heading', {
          yPercent: 100,
        })
        .from('.works__slide', {
          scale: 0,
          stagger: 0.1,
          yPercent: 100,
        });
    }
  });

  // $------------ contact ------------$ //
  const contactScrollAnimation = gsap.timeline({
    defaults: {
      opacity: 0,
      yPercent: 100
    },
    scrollTrigger: {
      trigger: '.contact',
      markers: false,
      start: '0% 100%',
      end: '100% 100%',
      scrub: 1,
    }
  });

  contactScrollAnimation
    .from('.contact__heading', {
    })
    .from('.contact__list', {
    }, '<');
});
