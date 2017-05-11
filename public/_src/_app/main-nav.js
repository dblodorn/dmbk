// IMPORTS
import $ from 'jquery'
import throttle from "lodash/throttle"
import mixin from "lodash/mixin"
import _ from "lodash/wrapperLodash"
mixin(_, {throttle: throttle})
import scrollChecker from './scroll-checker'

// FUNCTION BODY
const wh = window.innerHeight
const navActive = 'nav-active'

const navMenuScroll = () => {
	let lastScrollTop = 0
	scrollChecker(wh / 2,'header','header-switch',50)
	const stickyHeader = () => {
		let st = $(window).scrollTop()
		if(st > 20){
			if (st > lastScrollTop){
				if(!$('body').hasClass(navActive)){
					$('header').css('transform', 'translateY(-15.5rem)')
				} else {
					$('header').css('transform', 'translateY(0)')
				}
			} else {
				$('header').css('transform', 'translateY(0)')
			}
		}
		lastScrollTop = st;	
	}
	$(window).on('scroll', _.throttle(stickyHeader, 50))
}

export {navMenuScroll}