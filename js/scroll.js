var $win = $(window),
limit = 1000;
function tgl (state) {
$fixed.toggleClass("hidden", state);
$("#textok").show();
$("#textok2").hide();
$(".triangle").show();
$(".button_of_information").css('height', 'auto');
$(".img_spun").fadeIn(1000);
}
$win.on("scroll", function () {
var top = $win.scrollTop();
if (top < limit) {
  $(".fixed").css('display', 'fixed');
  $(".img_spun").css('display', 'fixed');
   $(".button_of_object_found").css('display', 'flow-root');

  document.getElementById('textok').innerHTML = '';
  var p = document.createElement('textok');
  p.innerHTML = "парящая ложка";
  document.getElementById('textok').appendChild(p);

  document.getElementById('inform').innerHTML = '';
  var h = document.createElement('inform');
  h.innerHTML = "Информация";
  document.getElementById('inform').appendChild(h);

  document.getElementById('object_number').innerHTML = '';
  var c = document.createElement('object_number');
  c.innerHTML = "Объект №: BC-016 <br \/> Класс объекта: Спуны";
  document.getElementById('object_number').appendChild(c);

  document.getElementById('description').innerHTML = '';
  var e = document.createElement('description');
  e.innerHTML = "Объект представляет собой небольшую левитирующую <br \/> в пространстве ложку, длиной около 17,5 см и весом около 153 г. Содержать в небольшом стеклянном ящике. <br \/>Избегать физического контакта. ";
  document.getElementById('description').appendChild(e);
}
else {

}
// var top = $win.scrollTop();
// var popup = '0';
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
//
//    $(".ghost_text").fadeOut(500);
//      $("body").css('overflow', 'visible');
//  });
// }

var top = $win.scrollTop();
limit2 = 2000;
if (top > limit2) {
  $(".img_cup").fadeIn(1000);
  $(".fixed").css('display', 'fixed');
  $(".img_cup").css('display', 'fixed');
  document.getElementById('textok').innerHTML = '';
  var p = document.createElement('textok');
  p.innerHTML = "призрачная кружка";
  document.getElementById('textok').appendChild(p);

  document.getElementById('object_number').innerHTML = '';
  var c = document.createElement('object_number');
  c.innerHTML = "Объект №: BC-002-INT <br \/> Класс объекта: Чашковые";
  document.getElementById('object_number').appendChild(c);

  document.getElementById('description').innerHTML = '';
  var e = document.createElement('description');
  e.innerHTML = "Белая фарфоровая чашка, имеющая 8 см в высоту и 10 см в диаметре. Oбычно не проявляет никакой аномальной активности. Любая жидкость налитая в BC-002-INT через несколько секунд испаряется.";
  document.getElementById('description').appendChild(e);
}
else {
  tgl(false);
}


var top = $win.scrollTop();
limit3 = 4000;
if (top > limit3) {
  $(".img_fork").fadeIn(1000);
  $(".fixed").css('display', 'fixed');
  $(".img_fork").css('display', 'fixed');
  document.getElementById('textok').innerHTML = '';
  var p = document.createElement('textok');
  p.innerHTML = "летающая вилка";
  document.getElementById('textok').appendChild(p);

  document.getElementById('object_number').innerHTML = '';
  var c = document.createElement('object_number');
  c.innerHTML = "Объект №: BC-014-J <br \/> Класс объекта: Тризубки";
  document.getElementById('object_number').appendChild(c);

  document.getElementById('description').innerHTML = '';
  var e = document.createElement('description');
  e.innerHTML = "Имеет форму старинной обеденной вилки, изъеденной временем, <br \/>и которую, как показали анализы, не мыли с 1890-ых годов. <br \/>Анализ этого материала указывает, что SCP-014 в последний раз использовали для поедания <br \/> какого-то блюда из говядины.";
  document.getElementById('description').appendChild(e);
}
else {
  tgl(false);
}

var top = $win.scrollTop();
limit4 = 5000;
if (top > limit4) {
  $(".img_keks").fadeIn(1000);
  $(".fixed").css('display', 'fixed');
  $(".img_keks").css('display', 'fixed');
    // $(".img_ghost").css('display', 'none');
  document.getElementById('textok').innerHTML = '';
  var p = document.createElement('textok');
  p.innerHTML = "кексовое существо";
  document.getElementById('textok').appendChild(p);

  document.getElementById('object_number').innerHTML = '';
  var c = document.createElement('object_number');
  c.innerHTML = "Объект №: BC-007-J <br \/> Класс объекта: Постные";
  document.getElementById('object_number').appendChild(c);

  document.getElementById('description').innerHTML = '';
  var e = document.createElement('description');
  e.innerHTML = "С первого взгляда объект выглядит как черничный кекс. <br \/>При неаккуратном обращении вполне способен навредить человеку, однако его свойства <br \/>еще не до конца изучены. <br \/>";
  document.getElementById('description').appendChild(e);
}
else {
  tgl(false);
}
var top = $win.scrollTop();
var popup = '0';
limit2 = 5500;
if (top > 5500 && top < 5550) {
  $(".img_ghost_2").fadeIn(1000);
  $(".img_ghost_2").css('display', 'fixed');
    $(".ghost_text").fadeIn(1000);
    $("body").css('overflow', 'hidden');
}
else {
 $(".circle_border").click(function(){
     $('.white_screen_animation').addClass('white_screen_animation_animated');
     $(".img_ghost_2").fadeOut(1000);
     $(".ghost_text").fadeOut(500);
     $("body").css('overflow', 'visible');
 });
}
var top = $win.scrollTop();
limit5 = 6500;
if (top > limit5) {
  $(".img_botle").fadeIn(1000);
  $(".fixed").css('display', 'fixed');
  $(".img_botle").css('display', 'fixed');
  document.getElementById('textok').innerHTML = '';
  var p = document.createElement('textok');
  p.innerHTML = "мистическая бутылка";
  document.getElementById('textok').appendChild(p);

  document.getElementById('object_number').innerHTML = '';
  var c = document.createElement('object_number');
  c.innerHTML = "Объект №: BC-1057-RU <br \/> Класс объекта: Осколки";
  document.getElementById('object_number').appendChild(c);

  document.getElementById('description').innerHTML = '';
  var e = document.createElement('description');
  e.innerHTML = "Четырёхмерный объект в форме бутылки Клейна. Главным аномальным свойством объекта является его способность непредсказуемым образом искажать любые двумерные либо трёхмерные предметы, имеющие правильную геометрическую форму. Эффект распространяется на изображения на бумаге, любого рода предметы, а также помещения.  <br \/>";
  document.getElementById('description').appendChild(e);
}
else {
  tgl(false);
}
var top = $win.scrollTop();
limit6 = 8000;
if (top > limit6) {
  $(".img_big_cup").fadeIn(1000);
  $(".fixed").css('display', 'fixed');
  $(".img_big_cup").css('display', 'fixed');
  document.getElementById('textok').innerHTML = '';
  var p = document.createElement('textok');
  p.innerHTML = "летающая кружка";
  document.getElementById('textok').appendChild(p);

  document.getElementById('object_number').innerHTML = '';
  var c = document.createElement('object_number');
  c.innerHTML = "Объект №: BC-1254-RU <br \/> Класс объекта: Пахнущий";
  document.getElementById('object_number').appendChild(c);

  document.getElementById('description').innerHTML = '';
  var e = document.createElement('description');
  e.innerHTML = "Представляет собой фарфоровую чашку со схематичным рисунком лица. Сбоку на чашке присутствует отпечаток пальца. Имеет ограниченные способности <br \/>к материализации вещества внутри своего объема, однако, <br \/>как правило, их хватает только <br \/>на создание газов или мелких частиц. <br \/>";
  document.getElementById('description').appendChild(e);
}
else {
  tgl(false);
}
var top = $win.scrollTop();
limit7 = 10000;
if (top > limit7) {
  // $('.end_window').css('display', 'flex');
  $('#noisy-canvas').css('opacity', '1');
  $(".all_things").css('display', 'none');
  $(".window_of_error").css('display', 'grid');
  $(".end_window").css('display', 'flex');
    $(".buttom_of_reload").css('display', 'grid');
}
else {
  tgl(false);
}
});
