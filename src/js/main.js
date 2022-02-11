import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';

// import Swiper JS
import Swiper, { Navigation, Pagination } from 'swiper';
//Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.swiper', {
    // Optional parameters
		centeredSlides: true,
		slidesPerView: 'auto',
    loop: true,
		spaceBetween: 30,
});
