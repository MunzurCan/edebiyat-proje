document.addEventListener("DOMContentLoaded", function () {
    const play = document.getElementById('playing');
    var playPauseButton = document.getElementById("playPauseButton");
    var skipButtonStart = document.getElementById("skipButtonStart");
    var skipButtonEnd = document.getElementById("skipButtonEnd");
    var audioPlayer = document.getElementById("audioPlayer");

    var songList = [
        "/muzik/Alişimin-Kaşları.mp3",
        "/muzik/Cana-Rakibi.mp3",
        "/muzik/Dağlar-Dağlar-Viran-Dağlar.mp3",
        "/muzik/Havada-Bulut-Yok.mp3",
        "/muzik/İzmirin-Kavakları.mp3",
        "/muzik/Kimseye-Etmem.mp3",
        "/muzik/koskum-var.mp3",
        "/muzik/Mani-Oluyor.mp3",
        "/muzik/Mayadağdan-Kalkan-Kazlar.mp3",
        "/muzik/Mendilimin-Yeşili.mp3",
        "/muzik/Nigahı-Mestine.mp3",
        "/muzik/Öyle-Afeti-Yekta.mp3",
        "/muzik/Pencere-Açıldı-Bilal-Oğlan.mp3",
        "/muzik/Peşrev.mp3",
        "/muzik/Şahane-Gözler.mp3",
        "/muzik/yanik-omer.mp3",
    ];

    var currentSongIndex = 0;
    var songs = songList;

    audioPlayer.src = songs[currentSongIndex];
    updatePlaying();

    // "Geç" butonuna tıklandığında
    skipButtonEnd.addEventListener("click", function () {
        currentSongIndex++;
        if (currentSongIndex >= songs.length) {
            currentSongIndex = 0; // Eğer son şarkıya ulaşıldıysa, başa dön
        }
        audioPlayer.src = songs[currentSongIndex]; // Yeni şarkıyı çal
        audioPlayer.play();
        updatePlaying();
        playPauseButton.innerHTML = '<i class="bi bi-pause"></i>';
    });

    // "Dön" butonuna tıklandığında
    skipButtonStart.addEventListener("click", function () {
        currentSongIndex--;
        if (currentSongIndex < 0) {
            currentSongIndex = songs.length - 1; // Eğer ilk şarkıdaysa, son şarkıya dön
        }
        audioPlayer.src = songs[currentSongIndex]; // Yeni şarkıyı çal
        audioPlayer.play();
        updatePlaying();
        playPauseButton.innerHTML = '<i class="bi bi-pause"></i>';
    });


    // Çalma durumunu kontrol etmek için playPauseButton'a tıklandığında
    playPauseButton.addEventListener("click", function () {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseButton.innerHTML = '<i class="bi bi-pause"></i>';
        } else {
            audioPlayer.pause();
            playPauseButton.innerHTML = '<i class="bi bi-play"></i>';
        }
    });

    // Şarkı bittiğinde bir sonraki şarkıya geç
    audioPlayer.onended = function () {
        currentSongIndex++;
        if (currentSongIndex >= songs.length) {
            currentSongIndex = 0; // Eğer son şarkıya ulaşıldıysa, başa dön
        }
        audioPlayer.src = songs[currentSongIndex];
        audioPlayer.play();
        updatePlaying();
        playPauseButton.innerHTML = '<i class="bi bi-pause"></i>';
    };

    function updatePlaying() {
        play.textContent = songs[currentSongIndex];
    }
});
