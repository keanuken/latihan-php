var id_kotak = document.getElementById("form");

function sembunyi() {
    id_kotak.style.display = "none";
}

function muncul() {
    id_kotak.style.display = "inline";
}

function notif() {
    alert("Yakin submit form?");
}

function validasi() {
    const namaDepan = document.getElementById("namaDepan").value;
    const email = document.getElementById("email").value;
    const namaBelakang = document.getElementById("namaBelakang").value;
    const tanggal = document.getElementById("tanggal").value;
    const password = document.getElementById("password").value;

    if (
        namaDepan != "" &&
        email != "" &&
        namaBelakang != "" &&
        tanggal != "" &&
        password != ""
    ) {
        alert("Data Berhasil Disimpan!");
        return true;
    } else {
        alert("Anda harus mengisi data dengan lengkap !");
    }
}
