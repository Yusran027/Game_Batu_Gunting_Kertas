var playerScore = 0;
    var computerScore = 0;
    var seri = 0;
    function play(player) {
    var comMath = Math.random();

    var hasil = "";

    if (comMath < 0.35) {
        com = "batu";
    } else if (comMath > 0.36 && comMath < 0.6) {
        com = "gunting";
    } else {
        com = "kertas";
    }
    if (player == com) {
        hasil = "SERI";
    } else if (player == "gunting") {
        hasil = com == "batu" ? "KALAH" : "MENANG";
    } else if (player == "batu") {
        hasil = com == "kertas" ? "KALAH" : "MENANG";
    } else if (player == "kertas") {
        hasil = com == "gunting" ? "KALAH" : "MENANG";
    } else {
        hasil = "anda salah input";
    }

    document.getElementById("hasil").innerHTML = "Kamu " + hasil;
    var imgCom = '<img id="im" src="img/' + com + '.png" />';
    var imgPlayer = '<img id="im" src="img/' + player + '.png" />';

    // var imgCom = "";
    // if (com == "batu") {
    //   imgCom = '<img id="im" src="img/batu.png" />';
    // } else if (com == "gunting") {
    //   imgCom = '<img id="im" src="img/gunting.png" />';
    // } else {
    //   imgCom = '<img id="im" src="img/kertas.png" />';
    // }
    // var imgPlayer = "";
    // if (player == "batu") {
    //   imgPlayer = '<img id="im" src="img/batu.png" />';
    // } else if (player == "gunting") {
    //   imgPlayer = '<img id="im" src="img/gunting.png" />';
    // } else {
    //   imgPlayer = '<img id="im" src="img/kertas.png" />';
    // }

    if (hasil == "MENANG") {
        playerScore++;
    } else if (hasil == "KALAH") {
        computerScore++;
    } else if (hasil == "SERI") {
        seri++;
    }

    document.getElementById("vs").innerHTML =
        "kamu" + imgPlayer + "VS" + imgCom + " Komputer";
    document.getElementById("score").innerHTML =
        "Skor: Kamu " +
        playerScore +
        " - " +
        computerScore +
        " Komputer & Seri: " +
        seri;
    }