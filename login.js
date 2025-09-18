let usernameInput = document.getElementById('username');
let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');
let usernameError = document.getElementById('username_error');
let emailError = document.getElementById('email_error');
let passwordError = document.getElementById('password_error');
let regForm = document.getElementById('form');

regForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // reset validity and clear previous errors
    let isValid = true;
    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';

    function validateUsername() {
        const username = usernameInput.value.trim();
        if (!username) {
            usernameError.textContent = 'Username required.';
            isValid = false;
            return;
        }
        if (!username.includes('Hani')) {
            usernameError.textContent = 'Username must include "Hani"';
            isValid = false;
            return;
        }
        if (username.length < 4) {
            usernameError.textContent = ' must have at least 4 characters';
            isValid = false;
            return;
        }
        if (username.length > 8) {
            usernameError.textContent = ' must have at most 8 characters';
            isValid = false;
            return;
        }
    }

    function validateEmail() {
        const email = emailInput.value.trim();
        if (!email) {
            emailError.textContent = 'Email required';
            isValid = false;
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            emailError.textContent = 'Invalid Email';
            isValid = false;
            return;
        }
    }

    function validatePassword() {
        const password = passwordInput.value.trim();
        if (!password) {
            passwordError.textContent = 'Password required';
            isValid = false;
            return;
        }
        if (password.toLowerCase() === 'password') {
            passwordError.textContent = 'Password cannot be "password"';
            isValid = false;
            return;
        }
        // require at least one even digit
        if (!/[02468]/.test(password)) {
            passwordError.textContent = 'Password must include an even number (0,2,4,6,8)';
            isValid = false;
            return;
        }
        if (password.length < 4) {
            passwordError.textContent = 'Password must be at least 4 characters';
            isValid = false;
            return;
        }
        if (password.length > 6) {
            passwordError.textContent = 'Password must be at most 6 characters';
            isValid = false;
            return;
        }
    }

    validateUsername();
    validateEmail();
    validatePassword();

    if (isValid) {
        window.location.href = 'home.html';
    }

});

// UX: clear field-specific error when user starts typing
usernameInput.addEventListener('input', () => { usernameError.textContent = ''; });
emailInput.addEventListener('input', () => { emailError.textContent = ''; });
passwordInput.addEventListener('input', () => { passwordError.textContent = ''; });
