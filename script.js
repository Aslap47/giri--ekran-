document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    alert('Bilgiler Gönderildi:\nKullanıcı Adı: ' + username + '\nŞifre: ' + password);
});
