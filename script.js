// Fungsi untuk menampilkan pesan alert saat tombol diklik
function showAlert() {
    alert("Kepo ya......");
}

// Fungsi untuk mengatur tampilan tanggal dan waktu saat halaman dimuat
window.onload = function() {
    var currentDateElement = document.getElementById('currentDate');
    var currentDate = new Date();
    currentDateElement.textContent += currentDate.toDateString();

    // Update waktu setiap detik
    setInterval(updateClock, 1000);
};

// Fungsi untuk mengatur tampilan waktu saat halaman dimuat dan diupdate setiap detik
function updateClock() {
    var currentTimeElement = document.getElementById('currentTime');
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridiem = "AM";

    // Ubah ke format 12 jam
    if (hours > 12) {
        hours = hours - 12;
        meridiem = "PM";
    }

    // Pad menit dan detik tunggal dengan nol di depannya
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    // Perbarui elemen waktu dengan waktu saat ini
    currentTimeElement.textContent = "Waktu Sekarang: " + hours + ":" + minutes + ":" + seconds + " " + meridiem;
}

// Daftar gambar latar belakang
var backgroundImages = ["2.jpg", "3.jpg", "4.jpg"];
var currentBackgroundIndex = 0;

// Fungsi untuk mengubah latar belakang secara otomatis setiap beberapa detik
function changeBackground() {
    document.body.style.backgroundImage = "url('" + backgroundImages[currentBackgroundIndex] + "')";
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgroundImages.length;
}

// Ubah latar belakang setiap 5 detik
setInterval(changeBackground, 5000);
