// FUNÇÕES/MÓDULOS SITE
import HoverBackgroundGradient from './modules/Animation/hover_bg-gradient'
// import ScrollSmooth from './modules/Animation/scrollLenis'
import AnimationElements  from './modules/Animation/enterElements'
import AnchorLinks from './modules/Utils/anchor_links'
import ImageEnter from './modules/Animation/imageEnter'
import ImagesHovers from './modules/Animation/imageHovers'
import infinityText from './modules/Animation/infinityText';
import ScrollSmooth from './modules/Animation/scrollLenis'
import changeLang from './modules/Utils/changeLang'
import removeEmptyImg from './modules/Utils/removeEmptyImg'
import forms from './modules/Forms/forms';
import Menu from './modules/Layouts/menu';

removeEmptyImg();
forms();
changeLang();
infinityText()
AnimationElements()
HoverBackgroundGradient()
ImageEnter()
ImagesHovers()

// Utils
// AnchorLinks()

// Layout
// Footer()
Menu()

// whatsapp floating btn opacity
// function iconOpacity() {
//     if ( window.scrollY >= 100 ) {
//         $('#whatsapp').css({
//             opacity: '1',
//             'z-index': 1000
//         });
//     } else {
//         $('#whatsapp').css({
//             opacity: '0',
//             'z-index': '-1'
//         });
//     }
// }

// $(window).on('scroll', iconOpacity);
