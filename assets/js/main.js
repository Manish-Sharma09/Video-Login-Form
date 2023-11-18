const showHiddenPass = (loginPass, loginEye) => {
  const input = document.getElementById(loginPass),
    iconEye = document.getElementById(loginEye);

  iconEye.addEventListener("click", () => {
    if (input.type === "password") {
      input.type = "text";

      iconEye.classList.add("ri-eye-line");
      iconEye.classList.remove("ri-eye-off-line");
    } else {
      input.type = "password";

      iconEye.classList.remove("ri-eye-line");
      iconEye.classList.add("ri-eye-off-line");
    }
  });
};
     // Function to toggle play/pause for both video and audio
     function toggleMedia() {
      var video = document.getElementById('video1');
      var audio = document.getElementById('audio1');
      var playPauseIcon = document.getElementById('playPauseIcon');

      // Check if video is paused
      if (video.paused) {
        // Play video and audio
        video.play();
        audio.play();
        playPauseIcon.className = 'ri-pause-fill';
      } else {
        // Pause video and audio
        video.pause();
        audio.pause();
        playPauseIcon.className = 'ri-play-fill';
      }
    }

showHiddenPass("login-pass", "login-eye");
