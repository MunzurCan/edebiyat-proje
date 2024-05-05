// Müzik panelini açma ve kapama işlemlerini yöneten fonksiyon
function tus() {
    var panel = document.getElementById("MuzikPanel");
    var button = document.getElementById("ac");
    var icon = document.getElementById("icon");

    if (window.getComputedStyle(panel).display === "none") {
        acMuzikPanel(panel, button, icon);
    } else {
        kapatMuzikPanel(panel, button, icon);
    }
}

// Müzik panelini açan fonksiyon
function acMuzikPanel(panel, button, icon) {
    panel.style.display = "block";
    button.classList.remove("closed");
    button.classList.add("open");
}

// Müzik panelini kapatan fonksiyon
function kapatMuzikPanel(panel, button, icon) {
    panel.style.display = "none";
    button.classList.remove("open");
    button.classList.add("closed");
}

// Butona tıklama olayını dinleyen fonksiyon
function tusClick() {
    var button = document.getElementById("ac");
    button.addEventListener("click", function () {
        tus();
    });
}

// Sayfa yüklendiğinde gerekli olay dinleyicilerini etkinleştir
document.addEventListener("DOMContentLoaded", function () {
    tusClick();
});