import './scss/main.scss'
import $ from 'jquery';
// import 'bootstrap';
import Isotope from '../node_modules/isotope-layout/dist/isotope.pkgd';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import 'owl.carousel';

$(document).ready(function () {
     $(window).resize(function () {
         setHeightToItem();
     });

     function setHeightToItem() {
         $('.project-item').each(function (index) {
             const width = $(this).width();
             $(this).height(width);
         })
     }

     setHeightToItem();

});

const grid = document.querySelector('#project');
const iso = new Isotope( grid, {
    // options...
    itemSelector: '.project-item',
    layoutMode: 'fitRows',

});



