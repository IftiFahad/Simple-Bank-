document.getElementById('submit').addEventListener('click', function () {
    const emailField = document.getElementById('email');
    const email = emailField.value;
    console.log(email);

    const passwordField = document.getElementById('password');
    const password = passwordField.value;
    console.log(password);

    if (email == 'iftifahad996@gmail.com' && password == '1234') {
        window.location.href = "banking.html";
    } else {
        console.log('Invalid account');
    }
});





