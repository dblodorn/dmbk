// IMPORT SASS BASE
import scrollChecker from './_app/scroll-checker'
// VENDOR
import $ from 'jquery'
import magnificPopup from 'magnific-popup'
// RUN CONFIG
const initApp = () => {
  fadeIn('header',100,500)
  fadeIn('main',800,500)
  scrollChecker(50,'header','header-switch',50)
  // Magnific
  $(".popup-gallery").each(function() {
    $(this).magnificPopup({
      delegate: "a",
      type: "image",
      mainClass: "mfp-fade",
      removalDelay: 0,
      preloader: !1,
      fixedContentPos: !0,
      showCloseBtn: !0,
      tPrev: "Previous",
      tNext: "Next",
      closeOnBgClick: true,
      gallery: {
        enabled: !0,
        navigateByImgClick: !0,
        preload: [0, 1]
      }
    })
  })
}

// RUN APP
document.addEventListener('DOMContentLoaded', initApp)

// Utilities
const fadeIn = (element,pause,speed) => {
  setTimeout(() => {
    $(element).animate({opacity: 1}, speed)
  }, pause)
}