function copyScript() {
    var scriptBox = document.getElementById("scriptBox");
    scriptBox.select();
    scriptBox.setSelectionRange(0, 99999); // Mobil cihazlar için destek
    document.execCommand("copy");
    document.getElementById("status").innerText = "✅ Script kopyalandı!";
    setTimeout(() => {
        document.getElementById("status").innerText = "";
    }, 2000);
}
