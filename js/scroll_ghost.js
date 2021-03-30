$win.on("scroll", function f() {

  var top = $win.scrollTop();
  let popup = '0';
  limit2 = 1500;
  if (top > 1500 && top < 1550  ) {
    $(".img_ghost").fadeIn(1000);
    $(".img_ghost").css('display', 'fixed');
    $(".ghost_text").fadeIn(1000);
   $("body").css('overflow', 'hidden');
   popup = '1';
  }
  else {
   $(".circle_border").click(function(){
        $('.white_screen_animation').addClass('white_screen_animation_animated');
        setTimeout (function(){
               $('.white_screen_animation').removeClass('white_screen_animation_animated');
            }, 1000);
     $(".img_ghost").fadeOut(1000);
     $(".ghost_text").fadeOut(500);
       $("body").css('overflow', 'visible');

   });
  }
// var top = $win.scrollTop();
// let popup = '0';
// limit2 = 1500;
// if (top > 1500 && top < 1700 && popup == '0' ) {
//   $(".img_ghost").fadeIn(1000);
//   $(".img_ghost").css('display', 'fixed');
//   $(".ghost_text").fadeIn(1000);
//  $("body").css('overflow', 'hidden');
//  popup = '1';
// }
// else {
//  $(".circle_border").click(function(){
//       $('.white_screen_animation').addClass('white_screen_animation_animated');
//       setTimeout (function(){
//              $('.white_screen_animation').removeClass('white_screen_animation_animated');
//           }, 1000);
//    $(".img_ghost").fadeOut(1000);
//    $(".ghost_text").fadeOut(500);
//      $("body").css('overflow', 'visible');
//  });
// }
});
 f = undefined;
