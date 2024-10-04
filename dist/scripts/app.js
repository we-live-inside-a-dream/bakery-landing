var playButton = document.getElementById('play-video');
var pauseButton = document.getElementById('pause-video');
var video = document.getElementById('dough-video');
playButton.addEventListener('click', function () {
    video.play();
});
pauseButton.addEventListener('click', function () {
    video.pause();
});
