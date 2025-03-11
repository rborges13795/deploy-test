/*
    SUMMARY
    0 - AUTO YEAR
    1 - BACK TO TOP
*/


export default function Footer() {

    /*-----------------/ 0 - Const / Variables /--------------------*/


    /*-----------------/ 1 - Function /--------------------*/


    /*-----------------/ 2 - AUTO YEAR /--------------------*/
    const currentYear = new Date().getFullYear()
    const yearElement = document.querySelector('.auto--year')
    yearElement.innerHTML = currentYear
}