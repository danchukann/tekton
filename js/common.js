$(document).ready(function(){
    $('.responsive').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


});
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("topBtn").style.display = "block";
            } else {
                document.getElementById("topBtn").style.display = "none";
            }
        }

        // When the user clicks on the button, scroll to the top of the document
        function topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }


$(document).ready(function(){
    $(".lvov-project-block").mousemove(function(){
        $(".lvov-button-img").attr("src", "img/button-plus-hover.png");
    });
    $(".lvov-project-block").mouseleave(function(){
        $(".lvov-button-img").attr("src", "img/button-plus-normal.png");
    }); 
    $(".prague-project-block").mousemove(function(){
        $(".prague-button-img").attr("src", "img/button-plus-hover.png");
    });
    $(".prague-project-block").mouseleave(function(){
        $(".prague-button-img").attr("src", "img/button-plus-normal.png");
    }); 
    $(".ametist-project-block").mousemove(function(){
        $(".ametist-button-img").attr("src", "img/button-plus-hover.png");
    });
    $(".ametist-project-block").mouseleave(function(){
        $(".ametist-button-img").attr("src", "img/button-plus-normal.png");
    });
    $(".europe-project-block").mousemove(function(){
        $(".europe-button-img").attr("src", "img/button-plus-hover.png");
    });
    $(".europe-project-block").mouseleave(function(){
        $(".europe-button-img").attr("src", "img/button-plus-normal.png");
    });
});


