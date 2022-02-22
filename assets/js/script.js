$(document).ready(function () {
  //  fixed menu on scroll for desktop
  // if ($(window).width() > 992) {
  //     $(window).scroll(function () {
  //         if ($(this).scrollTop() > 40) {
  //             $(".mine-navbar").addClass("fixed-menu");
  //         } else {
  //             $(".mine-navbar").removeClass("fixed-menu");
  //         }
  //     });
  // }
  // end if

  // scrole to section


  $(document).ready(function(){
    $(window).load(function () {
        $(".loding_page").fadeOut();
    });
});



  $(window).scroll(function () {
    $(".section-scrol").each(function () {
      if ($(window).scrollTop() > $(this).offset().top - 400) {
        var classNewName = $(this).attr("data-name");
        $(this).addClass(classNewName);
      }
    });
  });

  // count-number


  // dropify

  $(".dropify").dropify();

  // niceSelect
  $(".selectS").select2();

  $(".search-none1").select2({
    minimumResultsForSearch: Infinity,
  });
  // "<span><img src='https://www.countryflags.io/EG/flat/24.png' class='img-fluid'></span>"

  $(".cuntery-selctor").select2({
    templateResult: function (state) {
      if (!state.id) {
        return state.text;
      }

      var $span = $(
        "<span><img src='https://www.countryflags.io/" +
          state.element.id +
          "/flat/24.png'/> " +
          state.text +
          "</span>"
      );
      return $span;
    },
    templateSelection: function (state) {
      if (!state.id) {
        return state.text;
      }

      var $span = $(
        "<span><img src='https://www.countryflags.io/" +
          state.element.id +
          "/flat/24.png'/> " +
          state.text +
          "</span>"
      );
      return $span;
    },
  });

  function formatState(state) {
    if (!state.id) {
      return state.text;
    }
  }

  // opne menu

  $(".mine-navbar .mobileMenu ul .has-chiled").click(function () {
    $(this).children(".child-ul").slideToggle();
  });

  $(".mine-navbar .open-menu i").click(function () {
    $(".mobileMenu").addClass("right-0");
    $("body").addClass("body-over");
    $(".over-lay").show();
  });

  $(".mine-navbar .mobileMenu .exit-icon i, .over-lay").click(function () {
    $(".mobileMenu").removeClass("right-0");
    $("body").removeClass("body-over");
    $(".over-lay").hide();
  });

  //   checkbox-box

  $(".checkbox-box .pretty input").click(function () {
    $(this)
      .parent()
      .addClass("checkbox-checked")
      .siblings()
      .removeClass("checkbox-checked");
  });

  // intro slider

  $(".intro-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay:true,
    rtl: true,
    dots: true,
    adaptiveHeight: true,
    autoplaySpeed: 1700,
  });

  // university slider
  $(".university-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay:true,
    rtl: true,
    dots: true,
    adaptiveHeight: true,
    autoplaySpeed: 1700,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 772,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // stydy-torkish-slider
  $(".stydy-torkish-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay:true,
    rtl: true,
    dots: true,
    adaptiveHeight: true,
    autoplaySpeed: 1700,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          centerMode: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 772,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // comment-slider

  $(".comment-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay:true,
    rtl: true,
    dots: true,
    adaptiveHeight: true,
    autoplaySpeed: 1700,
  });

  //university-logo-slider

  $(".university-logo-slider").slick({
    infinite: true,
    slidesToShow: 9,
    slidesToScroll: 1,
    arrows: false,
    autoplay:true,
    rtl: true,
    adaptiveHeight: true,
    autoplaySpeed: 1700,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 772,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
