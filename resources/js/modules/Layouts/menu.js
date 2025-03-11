
export default function Menu(){

    /*---------------------/ 1 - Const - Variables /-------------------*/
    const openDropDown = document.querySelector('.menu_mobile--product')
    const dropDown = document.querySelector('.menu_mobile--dropdown')
    const menuBtn = document.querySelector('.menu')
    const menuMobile = document.querySelector('.menu_mobile')
    let isMenuOpen = false;
    /*---------------------/ 2 - Functions /-------------------*/




    /*---------------------/ 3 - Events /-------------------*/
    openDropDown.addEventListener('click', function() {
        dropDown.classList.toggle('active');
      });

      menuBtn.addEventListener('click', function() {
        isMenuOpen = !isMenuOpen;

        if (isMenuOpen) {
          gsap.to(menuMobile, {
            display: 'flex', // Ensure flexbox layout is applied
            opacity: 1,
            duration: 0.5,
            onStart: function() {
              menuMobile.style.display = 'flex';
            }
          });
        } else {
          gsap.to(menuMobile, {
            opacity: 0,
            duration: 0.5,
            onComplete: function() {
              menuMobile.style.display = 'none';
            }
          });
        }
      });
}
// document.getElementById('newLang').addEventListener('change', function() {
//     var selectedLang = this.value;
//     var currentUrl = window.location.href;

//     // Construct the new URL for Google Translate
//     var translateUrl = 'https://translate.google.com/translate?sl=auto&tl=' + selectedLang + '&u=' + encodeURIComponent(currentUrl);

//     // Redirect the user to the translated page
//     window.location.href = translateUrl;
// });

document.addEventListener("DOMContentLoaded", function() {
    var translateButton = document.querySelector('.XoxZUe');
    if (translateButton) {
        translateButton.click();
    }
});

