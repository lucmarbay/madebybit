$(document).ready(function(){
        $(window).scroll(function(){
          if( $(this).scrollTop() > 0 ){
            $("header").animate({
              height: "50px"
            }, {
              queue: false,
              duration: 250
            });
          } else {
            $("header").animate({
              height: "100%"
            }, {
              queue: false,
              duration: 250
            });
          }
        });
      });