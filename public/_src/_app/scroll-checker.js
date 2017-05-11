// IMPORTS
import $ from 'jquery'
import throttle from "lodash/throttle"
import mixin from "lodash/mixin"
import _ from "lodash/wrapperLodash"
mixin(_, {throttle: throttle})

// FUNCTION BODY
export default function scrollChecker (top,scrollItem,scrollClass,throttleAmnt) {
  let scrollTopFunc = () => {   
		var scroll = $(window).scrollTop();
		if (scroll <= top) {
			$(scrollItem).removeClass(scrollClass)
		} else {
			$(scrollItem).addClass(scrollClass)
		}
	}
	$(window).on('scroll', _.throttle(scrollTopFunc, throttleAmnt))
}
