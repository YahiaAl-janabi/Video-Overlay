const switchBtn = document.querySelector('.switchBtn');
const switchSpan = document.querySelector('.switch');
const video = document.querySelector('.videoContainer');

// window.addEventListener('DOMContentLoaded', function () {});

switchBtn.addEventListener('click', function () {
  if (!switchSpan.classList.contains('slide')) {
    switchSpan.classList.add('slide');
    video.pause();
  } else {
    switchSpan.classList.remove('slide');
    video.play();
  }
});
