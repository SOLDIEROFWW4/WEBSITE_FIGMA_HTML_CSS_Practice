document.addEventListener('DOMContentLoaded', function () {
    const playMusicLink = document.getElementById('play-music-link');
    const musicPlayer = document.getElementById('music-player');

    playMusicLink.addEventListener('click', function (event) {
        event.preventDefault();

        if (musicPlayer.paused) {
            musicPlayer.play();
            playMusicLink.textContent = 'Pause Music';
        } else {
            musicPlayer.pause();
            playMusicLink.textContent = 'Vibe Music';
        }
    });
});
