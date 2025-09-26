const userName = "Habib"; 

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const headerHeight = document.querySelector('.header').offsetHeight;
    const sectionTop = section.offsetTop - headerHeight;
    
    window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
    });
}

function updateCurrentTime() {
    const now = new Date();
    const options = {
        weekday: 'short',
        month: 'short',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
    };
    
    const timeString = now.toLocaleString('en-US', options);
    document.getElementById('currentTime').textContent = timeString;
}

function setWelcomeMessage() {
    document.getElementById('welcomeMessage').textContent = `Hi ${userName}, Welcome To Website`;
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = {
        nama: formData.get('nama'),
        tanggalLahir: formData.get('tanggalLahir'),
        jenisKelamin: formData.get('jenisKelamin'),
        pesan: formData.get('pesan')
    };
    
    const tanggal = new Date(data.tanggalLahir);
    const formattedDate = `${String(tanggal.getDate()).padStart(2, '0')}/${String(tanggal.getMonth() + 1).padStart(2, '0')}/${tanggal.getFullYear()}`;
    
    const messageText = `Nama: ${data.nama}\nTanggal Lahir: ${formattedDate}\nJenis Kelamin: ${data.jenisKelamin}\nPesan: ${data.pesan}`;
    document.getElementById('messageDisplay').value = messageText;
    
    e.target.reset();
});

document.addEventListener('DOMContentLoaded', function() {
    setWelcomeMessage();
    updateCurrentTime();
    setInterval(updateCurrentTime, 1000);
    
    document.getElementById('messageDisplay').value = '';
});