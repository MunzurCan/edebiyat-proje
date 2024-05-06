function Pass() {
    var mesaj = "SAYGI DURUŞU İÇİN HAZIR OL DİKKAT ";
    var ses = new Audio("SaygıDuruşu.mp3");
    var sonuc = confirm(mesaj);

    if (sonuc) {
            ses.play().then(function () {

                PanelAc();

                ses.onended = function () {
                    window.location.href = "GüzelHatıralar.html";
                    PanelKapat();
                };
            });
        } else {
            window.location.href = "GüzelHatıralar.html";
        }
}

function PanelAc() {
    document.getElementById("Panel").style.display = "block";
}

function PanelKapat() {
    document.getElementById("Panel").style.display = "none";
}

function MuzikPanelAc() {
    document.getElementById("MuzikPanel").style.display = "block";
}

function PanelKapatKapat() {
    document.getElementById("MuzikPanel").style.display = "none";
}
