import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';

// import Swiper JS
import Swiper, { Navigation, Pagination,EffectFade} from 'swiper';
Swiper.use([Navigation, Pagination,EffectFade]);


const swiper1 = document.querySelector('.swiper'),
			swiper2 = document.querySelector('.swiper-con'),
			burger = document.querySelector('.burger'),
			close = document.querySelector('.menu__close'),
			menu = document.querySelector('.menu');

const swiperSlider1 = new Swiper(swiper1, {
	// Optional parameters
	centeredSlides: true,
	slidesPerView: 'auto',
	loop: true,
	spaceBetween: 30,
});

const swiperSlider2 = new Swiper(swiper2, {
	// Optional parameters
	fadeEffect: {crossFade: true},
	centeredSlides: true,
	slidesPerView: 1,
	loop: true,
	spaceBetween: 10,
	effect: "fade",

	navigation: {
    nextEl: '.btn-right',
    prevEl: '.btn-left',
  },
});


burger.addEventListener('click', () => {
	menu.classList.add('menu--visible');
});

close.addEventListener('click', () => {
	menu.classList.remove('menu--visible');
});
