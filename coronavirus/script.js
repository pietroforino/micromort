// images setup
const images = [
  "EstensioneCoronavirus_bg.png",
  "EstensioneCoronavirus_bg2.png",
  "EstensioneCoronavirus3.png",
];


rgbKineticSlider = new rgbKineticSlider({
  slideImages: images, // array of images > must be 1920 x 1080
  // itemsTitles: texts, // array of titles / subtitles

  backgroundDisplacementSprite: 'http://hmongouachon.com/_demos/rgbKineticSlider/map-2.jpg', // slide displacement image
  cursorDisplacementSprite: 'http://hmongouachon.com/_demos/rgbKineticSlider/displace-circle.png', // cursor displacement image

  cursorImgEffect : true, // enable cursor effect
  cursorTextEffect : false, // enable cursor text effect
  cursorScaleIntensity : 0.25, // cursor effect intensity
  cursorMomentum : 0.09, // lower is slower

  swipe: false, // enable swipe
  swipeDistance : window.innerWidth * 0.1, // swipe distance - ex : 580
  swipeScaleIntensity: 1.66, // scale intensity during swipping

  slideTransitionDuration : 0.6, // transition duration
  transitionScaleIntensity : 10, // scale intensity during transition
  transitionScaleAmplitude : 80, // scale amplitude during transition

  nav: true, // enable navigation
  navElement: '.main-nav', // set nav class

  imagesRgbEffect : true, // enable img rgb effect
  imagesRgbIntensity : 0.09, // set img rgb intensity
  navImagesRgbIntensity : 40, // set img rgb intensity for regular nav

});


var swiper = new Swiper('.product-slider', {
        spaceBetween: 30,
        effect: 'fade',
        // initialSlide: 2,
        loop: false,
        navigation: {
            nextEl: '.next',
            prevEl: '.prev'
        },
        // mousewheel: {
        //     // invert: false
        // },
        on: {
            init: function(){
                var index = this.activeIndex;

                var target = $('.product-slider__item').eq(index).data('target');

                console.log(target);

                $('.product-img__item').removeClass('active');
                $('.product-img__item#'+ target).addClass('active');
            }
        }

    });

    swiper.on('slideChange', function () {
        var index = this.activeIndex;

        var target = $('.product-slider__item').eq(index).data('target');

        console.log(target);

        $('.product-img__item').removeClass('active');
        $('.product-img__item#'+ target).addClass('active');

        if(swiper.isEnd) {
            $('.prev').removeClass('disabled');
            $('.next').addClass('disabled');
        } else {
            $('.next').removeClass('disabled');
        }

        if(swiper.isBeginning) {
            $('.prev').addClass('disabled');
        } else {
            $('.prev').removeClass('disabled');
        }
    });

    $(".js-fav").on("click", function() {
        $(this).find('.heart').toggleClass("is-active");
    });
