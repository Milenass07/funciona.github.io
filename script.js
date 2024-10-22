function validateForm() {
    var email = document.getElementById('email');
    var emailError = document.getElementById('email-error');
    var emailValue = email.value;

    // Expressão regular simples para validar e-mail
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailPattern.test(emailValue)) {
        email.classList.add('invalid');
        emailError.style.display = 'block';
    } else {
        email.classList.remove('invalid');
        emailError.style.display = 'none';
        alert("Login realizado com sucesso!");
    }
}