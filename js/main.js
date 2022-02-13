import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';

// import Swiper JS
import Swiper, { Navigation, Pagination } from 'swiper';
//Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.swiper', {
    // Optional parameters
		paginationClickable : true,
    loop: true,

    // If we need pagination

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

