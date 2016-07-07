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
    onSlideChange: changeBodyBackground
    // dotsContainer: document.querySelector('.slider__paginator')
    //dotsPrepend: true //dots above, false: dots below
    // onSetup: function(n) {
    //     console.log('Peppermint setup done. Slides found: ' + n);
    // }
});

// function changeBackground (activeSlide){
//     changeBodyBackground (activeSlide);
//     changeSearchBtnBackground (activeSlide);
//     changeEntranceBtnBackground (activeSlide);
//     changeCartBtnBackground (activeSlide);
// }

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

