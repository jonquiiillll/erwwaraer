var scrollProgress = document.querySelector('.scroll_progress__text_phone');
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
