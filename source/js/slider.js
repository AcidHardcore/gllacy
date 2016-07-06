// var butPrev = document.querySelector('.review__prev-js');
// var butNext = document.querySelector('.review__next-js');
var body = document.querySelector('body');
var search = document.querySelector('.btn--search');
var entrance = document.querySelector('.btn--entrance');
var cart = document.querySelector('.btn--cart');

// create sliderReview
var slider = Peppermint(document.getElementById('peppermint'), {
    dots: true,
    slideshow: true,
    speed: 500,
    slideshowInterval: 5000,
    stopSlideshowAfterInteraction: true,
    cssPrefix: 'slider__',
    onSlideChange: changeBackground
    // dotsContainer: document.querySelector('.slider__paginator')
    //dotsPrepend: true //dots above, false: dots below
    // onSetup: function(n) {
    //     console.log('Peppermint setup done. Slides found: ' + n);
    // }
});

function changeBackground (activeSlide){
    changeBodyBackground (activeSlide);
    changeSearchBtnBackground (activeSlide);
    changeEntranceBtnBackground (activeSlide);
    changeCartBtnBackground (activeSlide);
}

function changeBodyBackground(activeSlide) {
    var slideBodyBgClass = [
        'body-bgc-1-js',
        'body-bgc-2-js',
        'body-bgc-3-js'
    ];

    slideBodyBgClass.forEach(function (el, i) {
        body.classList.remove(el);
    });

    body.classList.add(slideBodyBgClass[activeSlide]);
}

function changeSearchBtnBackground(activeSlide) {
    var slideSearchBtnClass = [
        'btn--search-bgc-1-js',
        'btn--search-bgc-2-js',
        'btn--search-bgc-3-js'
    ];

    slideSearchBtnClass.forEach(function (el, i) {
        search.classList.remove(el);
    });

    search.classList.add(slideSearchBtnClass[activeSlide]);
}

function changeEntranceBtnBackground(activeSlide) {
    var slideEntranceBtnClass = [
        'btn--entrance-bgc-1-js',
        'btn--entrance-bgc-2-js',
        'btn--entrance-bgc-3-js'
    ];

    slideEntranceBtnClass.forEach(function (el, i) {
        entrance.classList.remove(el);
    });

    entrance.classList.add(slideEntranceBtnClass[activeSlide]);
}

function changeCartBtnBackground(activeSlide) {
    var slideCartBtnBgClass = [
        'btn--cart-bgc-1-js',
        'btn--cart-bgc-2-js',
        'btn--cart-bgc-3-js'
    ];

    slideCartBtnBgClass.forEach(function (el, i) {
        cart.classList.remove(el);
    });

    cart.classList.add(slideCartBtnBgClass[activeSlide]);
}


//sliderReview prev button
// butPrev.addEventListener('tap', function (event) {
//     event.preventDefault();
//     sliderReview.prev();
//
// });

//sliderReview next button
// butNext.addEventListener('tap', function (event) {
//     event.preventDefault();
//     sliderReview.next();
//
// });

