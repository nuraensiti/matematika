function keliling_lingkaran() {

    var phi=3.14;
    var jarijari=5;

    document.getElementById("phi").innerHTML = "" + phi;
    document.getElementById("jarijari").innerHTML = "" + jarijari;
    document.getElementById("hasil_keliling").innerHTML = " " + 2 * phi * jarijari;
}



//Document Object Model (DOM)
function hasil() {
    
    var panjangDOM=2;
    var lebarDOM=3;
    var tinggiDOM=5

    document.getElementById("panjangDOM").innerHTML = "" + panjangDOM;
    document.getElementById("lebarDOM").innerHTML = "" + lebarDOM;
    document.getElementById("tinggiDOM").innerHTML = "" + tinggiDOM;
    document.getElementById("hasil_kelilingDOM").innerHTML ="" + 4 * panjangDOM + lebarDOM + tinggiDOM;
};