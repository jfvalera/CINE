var videoPlayer = document.getElementById('videoPlayer');
var playButton = document.getElementById('playButton');
var pauseButton = document.getElementById('pauseButton');
var volumeRange = document.getElementById('volumeRange');
var fullscreenButton = document.getElementById('fullscreenButton');

playButton.addEventListener('click', function() {
  videoPlayer.play();
  playButton.style.display = 'none';
  pauseButton.style.display = 'block';
});

pauseButton.addEventListener('click', function() {
  videoPlayer.pause();
  pauseButton.style.display = 'none';
  playButton.style.display = 'block';
});

volumeRange.addEventListener('input', function() {
  videoPlayer.volume = volumeRange.value;
});

fullscreenButton.addEventListener('click', function() {
  if (videoPlayer.requestFullscreen) {
    videoPlayer.requestFullscreen();
  } else if (videoPlayer.mozRequestFullScreen) {
    videoPlayer.mozRequestFullScreen();
  } else if (videoPlayer.webkitRequestFullscreen) {
    videoPlayer.webkitRequestFullscreen();
  } else if (videoPlayer.msRequestFullscreen) {
    videoPlayer.msRequestFullscreen();
  }
});
