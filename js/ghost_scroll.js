<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" href="style.css">
    <script src="main.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
    <title>хочу кушац</title>
</head>
<body>
  <div class="white_screen_animation" id="white_screen_animation"></div>
  <canvas id="noisy-canvas">
  </canvas>
  <div class="end_window">
  <div class="window_of_error">
    <p class="text_of_window_error">Ошибка BC-465</p>
    <p class="text_of_window_error_light">Избыток паранормальной активности. Пожалуйста, перезагрузите камеру.</p>
  <a href="index.html">  <img src="reload.png" class="buttom_of_reload" alt=""> </a>
  </div>
    </div>
    <div class="all_things">
  <img src="spun.png" class="img_spun"alt="">
  <img src="cup.PNG" class="img_cup"alt="">
  <img src="fork.PNG" class="img_fork"alt="">
  <img src="keks.PNG" class="img_keks"alt="">
  <img src="botle.PNG" class="img_botle"alt="">
  <img src="cup_big.PNG" class="img_big_cup"alt="">
  <img src="ghost.png" class="img_ghost" alt="">
  <img src="ghost_second.png" class="img_ghost_2" alt="">
<div class="container_content">
<div class="container top">
    <div class="box">
        <div class="button_of_object_found">
           <div class="text_found">
            Найден&nbspобъект:
           </div>
           <div class="button_of_information">
             <p id="textok">парящая ложка</p>
             <div class="triangle">
               <div class="object"></div>
             </div>
           </div>
           <div  class="menu">
             <div id="inform"></div>
             <div id="object_number"></div>
             <div id="description"></div>
           </div>
           </div>
    </div>
    <div class="ghost_text">
      нажмите кнопку, чтобы поймать призрака
    </div>
 <a href="index.html"><div class="something"></div></a>
    <div class="box2">
        <div class="button_of_progress">
            <div class="text_of_paranormal">
                Паранормальные явления:
                <div class="scroll_progress">
                  <span class="scroll_progress__text">0%</span>
                </div>
                <script type="text/javascript">
                var scrollProgress = document.querySelector('.scroll_progress__text');
            window.onscroll = function() {
            var offset = window.pageYOffset || document.documentElement.scrollTop,
                windowHeight = document.documentElement.scrollHeight-document.documentElement.clientHeight,
                progress = Math.floor(offset/windowHeight * 100);
            scrollProgress.innerHTML = progress + '%'
            if (scrollProgress > 90) {
                $("something").css('display', 'flex');
            }
             else {
            }
          };
            </script>
            </div>
        </div>
    </div>
</div>
    <div class="container_center text_center">
        <p class="start_button">для начала записи нажимте кнопку <br></p>
    </div>
<div class="container2 bottom">
    <div class="box_bottom">
        <div class="time_animation">
          <div class="time_animation_2">
            <div class="container_for_stopwatch_static position_of">
            <p class="text">00:00:00:00</p>
            </div>
          </div>
          <div class="container_for_stopwatch">
            <div class="scroll_progress_phone">
              <span class="scroll_progress__text_phone">0%</span>
            </div>
          <p id="random_number"></p>
          <p>:</p>
            <p id="random_number2"></p>
            <p>:</p>
            <p id="random_number3"></p>
            <p>:</p>
            <p id="random_number4"></p>
          </div>
        </div>
    </div>
    <div class="circle_border" id="circle_border">
       <div class="button_photo">
           <div class="camera"></div>
       </div>
    </div>
           <div class="box_bottom2">
             <div class="button_of_record_flex">
               <div class="red_circle_flex"></div>
               <div class="text_record_flex">
                   Запись
               </div>
             </div>

           </div>
    </div>
</div>
<div id="animation">Time for animation</div>
<div class="test"></div>
<div class="fixed hidden">
</div>
<div id="animation">Time for animation</div>
<div class="test"></div>
<div class="fixed hidden"></div>
<script type="text/javascript" src="js/scroll.js"> </script>
<script type="text/javascript" src="js/noisy-canvas.js"> </script>
<script type="text/javascript" src="js/ghost_scr.js"> </script>

</body>
</html>
