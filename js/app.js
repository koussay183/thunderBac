// hide the preloader on the load of page
$(() => {
  setInterval(() => {
    $("#pre").hide();
  }, 2500);

  $(".menuToggler").click(() => {
    $(".menuToggler").toggleClass("togglerStart");
    $(".responsiveMenu").toggleClass("active");
  });

  if (window.matchMedia("(max-width: 500px)").matches) {
    $(".innerCarsImageHolder").slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
  } else {
    $(".innerCarsImageHolder").slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 2,
    });
  }

  $(".menu-2>li").click(() => {
    $(".responsiveMenu").removeClass("active");
    $(".menuToggler").toggleClass("togglerStart");
  });
  AOS.init();

  // make nav bar backgroud color black and remove the padding-top 2em
  $(document).scroll(function () {
    var $nav = $("nav");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height() - 10);
  });

  // wled l class array
  var wledClassi = [
    {
      name: "koussay jebali",
      avatar:
        "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/315238807_1185011842222818_1754393008200006440_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=SBCMH3R_1QMAX_uB19l&tn=V29i40KxLs0VmKMd&_nc_ht=scontent.ftun16-1.fna&oh=00_AfAJvm-zHnx9kJa_3RoS_8AQlYOvc29CpvqVzmLfpOvWgQ&oe=63FF3E3E",
    },
    {
      name: "Imeen Jouini",
      avatar:
        "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/323128819_638784814918589_1466756005588042691_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=-nw05s8-xb0AX8tsFgR&tn=V29i40KxLs0VmKMd&_nc_ht=scontent.ftun16-1.fna&oh=00_AfCcl86Oxhi5G_R3bA4wxIfPMVYjQcv_Y0exCkkka20mrg&oe=63FEFF16",
    },
    {
      name: "Khalil Othmani",
      avatar:
        "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/274524322_3119029734977734_6056299590349882380_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=aNklHz7XHWUAX9AmiHz&_nc_ht=scontent.ftun16-1.fna&oh=00_AfBYTUNAELZ8AzZk4jGSDtGsZHpwgdKDuMVCQcYBpKi6SQ&oe=63FEFA60",
    },
  ];

  wledClassi.map((user) => {
    $(".innerTeam").append(
      `<div class="teamCard" id="teamCard" data-aos="fade-up">
          <div class="teamImageHolder" style='background-image: url("${user.avatar}");'></div>
          <h1>${user.name}</h1>
        </div>`
    );
  });
});
