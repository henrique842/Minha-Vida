const vinylContainer = document.getElementById('vinylContainer');
const vinyl = document.getElementById('vinyl');
const audioPlayer = document.getElementById('audioPlayer');
const songStatus = document.getElementById('songStatus');

let isPlaying = false;

vinylContainer.addEventListener('click', () => {
    if (isPlaying) {
        audioPlayer.pause();
        vinyl.classList.remove('spinning');
        songStatus.textContent = "Pausado - Clique no disco para continuar";
        isPlaying = false;
    } else {
        audioPlayer.play().then(() => {
            vinyl.classList.add('spinning');
            songStatus.textContent = "Tocando agora 🎵❤️";
            isPlaying = true;
        }).catch(() => {
            songStatus.textContent = "Adicione o arquivo 'musica.mp3' na pasta 'midia'!";
        });
    }
});