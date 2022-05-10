let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let musicProgress = document.getElementById('musicProgress');
let audioGif = document.getElementById('audioGif');
let master_song = document.getElementById('master_song');
let songss = Array.from(document.getElementsByClassName('songss'));
let songs = [
    { songName: "Salam e Ishq — 1", filePath: "/songs/1.mp3" },
    { songName: "Salam e Ishq — 2", filePath: "/songs/2.mp3" },
    { songName: "Salam e Ishq — 3", filePath: "/songs/3.mp3" },
    { songName: "Salam e Ishq — 4", filePath: "/songs/4.mp3" },
    { songName: "Salam e Ishq — 5", filePath: "/songs/5.mp3" },
    { songName: "Salam e Ishq — 6", filePath: "/songs/6.mp3" },
    { songName: "Salam e Ishq — 7", filePath: "/songs/7.mp3" },
    { songName: "Salam e Ishq — 8", filePath: "/songs/8.mp3" },
    { songName: "Salam e Ishq — 9", filePath: "/songs/9.mp3" },
    { songName: "Salam e Ishq — 10", filePath: "/songs/10.mp3" },
];
songss.forEach((element, i) => {
    // console.log(element, i);
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
});
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        audioGif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        audioGif.style.opacity = 0;
    }
});
// audioElement.play();
audioElement.addEventListener('timeupdate', () => {
    // console.log('time update');
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // console.log(progress);
    musicProgress.value = progress;
});
musicProgress.addEventListener('change', () => {
    audioElement.currentTime = musicProgress.value * audioElement.duration / 100;
});
const allPlay = () => {
    Array.from(document.getElementsByClassName('playSong')).forEach((element) => {
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    });
}
Array.from(document.getElementsByClassName('playSong')).forEach((element) => {
    element.addEventListener('click', (e) => {
        // console.log(e.target);
        allPlay();
        audioGif.style.opacity = 1;
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `/songs/${songIndex + 1}.mp3`;
        master_song.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        audioGif.style.opacity = 1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    });
});
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `/songs/${songIndex + 1}.mp3`;
    master_song.innerText = songs[songIndex].songName;

    audioElement.currentTime = 0;
    audioElement.play();
    audioGif.style.opacity = 1;
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
});
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 9;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `/songs/${songIndex + 1}.mp3`;
    master_song.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    audioGif.style.opacity = 1;
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
});