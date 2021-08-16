document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    const adminPage = 'dashboard.html';
    if (userEmail == 'pulak@gmail.com' && userPassword == 'Arafat') {
        window.location.href = adminPage;
    }
});
