// hide the preloader on the load of page
$(()=>{
    $("#pre").hide();
    $('.menuToggler').click(()=>{
        $(".menuToggler").toggleClass("togglerStart");
        $('.responsiveMenu').toggleClass("active");
    });
    $('.innerCarsImageHolder').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '60px'
      });
    $(".menu-2>li").click(()=>{
        $('.responsiveMenu').removeClass("active");
        $(".menuToggler").toggleClass("togglerStart");
    });
    AOS.init();           
});