const player = document.querySelector(".player");
const playButton = document.querySelector(".play");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const audio = document.querySelector("audio");
const progressWrapper = document.querySelector(".progress-wrapper");
const progress = document.querySelector(".progress");
const imgSrc = document.querySelector(".img-play");
const cover = document.querySelector(".cover_img");
const songName = document.querySelector(".song");

const songs = ["comical.wav", "feeling happy.wav", "pop.wav"];
let currentTrackIndex = 0;

audio.src = songs[currentTrackIndex];

playButton.onclick = (e) => {
  audio.paused ? audio.play() : audio.pause();
  e.target.src = audio.paused ? `img/play.png` : "img/pause.png";
};

prevButton.onclick = () => {
  currentTrackIndex--;

  if (songs[currentTrackIndex]) {
    audio.src = songs[currentTrackIndex];
  } else {
    audio.src = songs.at(-1);
    currentTrackIndex = songs.length - 1;
  }
  audio.play();
  loadSong(songs[currentTrackIndex]);
};

nextButton.onclick = () => {
  currentTrackIndex++;

  if (songs[currentTrackIndex]) {
    audio.src = songs[currentTrackIndex];
  } else {
    audio.src = songs[0];
    currentTrackIndex = 0;
  }
  audio.play();
  loadSong(songs[currentTrackIndex]);
};

function loadSong(song) {
  songName.innerHTML = song;
  cover.src = `img/img-${currentTrackIndex + 1}.jpg`;
}

audio.ontimeupdate = (e) => {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
  console.log(duration, "dur", currentTime, "cur");
};
