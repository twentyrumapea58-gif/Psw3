const tombolSalam = document.getElementById("tombolSalam");
const gelembungSalam = document.getElementById("gelembungSalam");

if (tombolSalam && gelembungSalam) {
    tombolSalam.addEventListener("click", function () {
        gelembungSalam.textContent =
            "Halo! 👋 Selamat datang di Komunitas Web Mahasiswa. Semangat belajar web!";
        
        gelembungSalam.hidden = false;
    });
}


const formPendaftaran = document.getElementById("formPendaftaran");
const pesanForm = document.getElementById("pesanForm");

formPendaftaran.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!formPendaftaran.checkValidity()) {
        formPendaftaran.reportValidity();
        pesanForm.textContent =
            "Periksa kembali data yang wajib diisi.";
        return;
    }

    const nama = document.getElementById("nama").value.trim();
    const kegiatan =
        document.getElementById("pilihanKegiatan").value;

    if (nama.length < 3) {
        pesanForm.textContent =
            "Nama harus terdiri dari minimal 3 karakter.";
        document.getElementById("nama").focus();
        return;
    }

    pesanForm.textContent =
        "Terima kasih, " + nama +
        "! Minat kamu pada kegiatan " + kegiatan +
        " sudah diperiksa.";

    formPendaftaran.reset();
});