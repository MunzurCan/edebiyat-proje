document.addEventListener("DOMContentLoaded", function () {
    const play = document.getElementById('playing');
    var playPauseButton = document.getElementById("playPauseButton");
    var skipButtonStart = document.getElementById("skipButtonStart");
    var skipButtonEnd = document.getElementById("skipButtonEnd");
    var audioPlayer = document.getElementById("audioPlayer");

    var songList = [
        "Alişimin-Kaşları.mp3",
        "Cana-Rakibi.mp3",
        "Dağlar-Dağlar-Viran-Dağlar.mp3",
        "Havada-Bulut-Yok.mp3",
        "İzmirin-Kavakları.mp3",
        "Kimseye-Etmem.mp3",
        "koskum-var.mp3",
        "Mani-Oluyor.mp3",
        "Mayadağdan-Kalkan-Kazlar.mp3",
        "Mendilimin-Yeşili.mp3",
        "Nigahı-Mestine.mp3",
        "Öyle-Afeti-Yekta.mp3",
        "Pencere-Açıldı-Bilal-Oğlan.mp3",
        "Peşrev.mp3",
        "Şahane-Gözler.mp3",
        "yanik-omer.mp3",
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
