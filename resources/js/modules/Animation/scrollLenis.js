export default function ScrollSmooth() {
    if (window.screen.width > 1090) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        oientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        smoothTouch: true,
        touchMultiplier: 2,
        infinite: false,
      })


      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)



    // Grab all elements that have a "data-target" attribute
    const scrollButtons = document.querySelectorAll('[data-target]');

      scrollButtons.forEach(button => {
          button.addEventListener('click', e => {
            e.preventDefault();

            // get the DOM element by the ID (data-target value)

          var target = button.dataset.target,
          $el = document.getElementById(target.replace('#', ''));

            // Use lenis.scrollTo() to scroll the page to the right element
            lenis.scrollTo($el, {
              offset: 0,
              immediate: false,
              duration: 3,
              easing: (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2),
            });
          });
      });

    }
  }
