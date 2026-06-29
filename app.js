// =====================
// FILTER PROJECT
// =====================

const semuaProyek = document.querySelectorAll(".project-card");

function filterProyek(kategori){

    semuaProyek.forEach(function(proyek){

        if(kategori == "semua"){
            proyek.style.display = "block";
        }
        else if(proyek.classList.contains(kategori)){
            proyek.style.display = "block";
        }
        else{
            proyek.style.display = "none";
        }

    });

}

// =====================
// VALIDASI CONTACT
// =====================

const inputNama = document.getElementById("nama");
const tombol = document.getElementById("btn-kirim");
const pesan = document.getElementById("pesan");

tombol.addEventListener("click", function(){

    if(inputNama.value == ""){

        pesan.innerText = "Pesan tidak boleh kosong!";
        pesan.style.color = "red";

    }
    else{

        pesan.innerText = "Pesan berhasil dikirim.";
        pesan.style.color = "green";

        // Kosongkan input
        inputNama.value = "";

        // Hilangkan pesan setelah 3 detik
        setTimeout(function(){
            pesan.innerText = "";
        }, 3000);

    }

});