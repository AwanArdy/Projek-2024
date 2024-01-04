const playlistSongs = document.getElementById("playlist-songs");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const shuffleButton = document.getElementById("shuffle");

const allSongs = [
  {
    id: 0,
    title: "Hito wa Yume wo Nido Miru",
    artist: "Nogizaka46",
    duration: "5:43",
    src: "https://open.spotify.com/track/3W1KL5dUISmtye75QhNohl?si=c10ce6bfacb4466e",
  },
  {
    id: 1,
    title: "Tanin no Sora ni",
    artist: "Nogizaka46",
    duration: "4:43",
    src: "https://open.spotify.com/track/7fDXaxje3LekPDGpLmt9WX?si=c50f3b25cb7f441f",
  },
  {
    id: 2,
    title: "Garasu Mado ga Yogorateru",
    artist: "Hinatazaka46",
    duration: "4:00",
    src: "https://open.spotify.com/track/6NW0OhKaFymA6fqVjThApx?si=348bdb20fa574b00",
  },
  {
    id: 3,
    title: "I'm in",
    artist: "Sakurazaka46",
    duration: "5:01",
    src: "https://open.spotify.com/track/2Y51hgeUpf5DgH4X8NgJUn?si=4806c03759b34731",
  },
  {
    id: 4,
    title: "One Choice",
    artist: "Hinatazaka46",
    duration: "4:44",
    src: "https://open.spotify.com/track/5t8ERaOJ3p2vnMKWTBflcy?si=3c27af215cb7411f",
  },
  {
    id: 5,
    title: "Ohitorisama Tengoku",
    artist: "Nogizaka46",
    duration: "4:15",
    src: "https://open.spotify.com/track/22e9NP0TRCFhOGsgBnl6Ua?si=f0755bb1b1cf4e4a",
  },
  {
    id: 6,
    title: "Sakurazuki",
    artist: "Sakurazaka46",
    duration: "4:43",
    src: "https://open.spotify.com/track/2jPyj1FZgRaE5xjugKqmvC?si=7cbf3eb045754bf8",
  },
  {
    id: 7,
    title: "Natsu no Chikamichi",
    artist: "Sakurazaka46",
    duration: "5:09",
    src: "https://open.spotify.com/track/5Ucv9VBRDeBy514OEdcic6?si=971086ff9b254923",
  },
  {
    id: 8,
    title: "Akubi Letter",
    artist: "Hinatazaka46",
    duration: "4:12",
    src: "https://open.spotify.com/track/2Uh1RsG87xjNbgQHw9R7un?si=01819a16ea1d4720",
  },
  {
    id: 9,
    title: "Tteka",
    artist: "Hinatazaka46",
    duration: "3:58",
    src: "https://open.spotify.com/track/3qhatIxwcJTvTRvKcr9boJ?si=b610c557452a4a34",
  },
];

const audio = new Audio();
let userData = {
  songs: [...allSongs],
  currentSong: null,
  songCurrentTime: 0,
};

const playSong = (id) => {
  const song = userData?.songs.find((song) => song.id === id);
  audio.src = song.src;
  audio.title = song.title;

  if (userData?.currentSong === null || userData?.currentSong.id !== song.id) {
    audio.currentTime = 0;
  } else {
    audio.currentTime = userData.songCurrentTime;
  }
  userData.currentSong = song;
  playButton.classList.add("playing");

  audio.play;
};

const pauseSong = () => {
  userData.songCurrentTime = audio.currentTime;

  playButton.classList.remove("playing");
  audio.pause();
};

const playNextSong = () => {
  if (userData?.currentSong === null) {
    playSong(userData?.songs[0].id);
  } else {
    const currentSongIndex = getCurrenrSongIndex();
    const nextSong = userData?.songs[currentSongIndex + 1];

    playSong(nextSong.id);
  }
};

const renderSongs = (array) => {
  const songsHTML = array
    .map((song) => {
      return `
        <li id="song-${song.id}" class="playlist-song">
        <button class="playlist-song-info" onclick="playSong(${song.id})">
            <span class="playlist-song-title">${song.title}</span>
            <span class="playlist-song-artist">${song.artist}</span>
            <span class="playlist-song-duration">${song.duration}</span>
        </button>
        <button class="playlist-song-delete" aria-label="Delete ${song.title}">
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#4d4d62"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/></svg>
        </button>
        </li>
        `;
    })
    .join("");

  playlistSongs.innerHTML = songsHTML;
};

const getCurrenrSongIndex = () => userData?.songs.indexOf(userData.currentSong);

playButton.addEventListener("click", () => {
  if (userData?.currentSong === null) {
    playSong(userData?.songs[0].id);
  } else {
    playSong(userData?.currentSong.id);
  }
});

pauseButton.addEventListener("click", pauseSong);

nextButton.addEventListener("click", playNextSong);

renderSongs(userData?.songs);
