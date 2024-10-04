const playButton = document.getElementById('play-video') as HTMLButtonElement;
const pauseButton = document.getElementById('pause-video') as HTMLButtonElement;
const video = document.getElementById('dough-video') as HTMLVideoElement;

playButton.addEventListener('click', () => {
  video.play();
});

pauseButton.addEventListener('click', () => {
  video.pause();
});
