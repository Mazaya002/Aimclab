document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    document.getElementById('errorMessage').textContent = '';

    if (!validateUsername(document.getElementById('username').value)) {
        displayError('Username must be at least 4 characters long.');
        return;
    }

    if (!validateEmail(document.getElementById('email').value)) {
        displayError('Invalid email format.');
        return;
    }

    if (!validateCountry(document.getElementById('country').value)) {
        displayError('Please select a country.');
        return;
    }


    if (!validatePassword(document.getElementById('password').value)) {
        displayError('Password must be at least 6 characters long and include at least one number and one uppercase letter.');
        return;
    }

    if (!validatePasswordMatch(document.getElementById('password').value, document.getElementById('confirmPassword').value)) {
        displayError('Passwords do not match.');
        return;
    }

    if (!validateDOB(document.getElementById('dob').value)) {
        displayError('Invalid date of birth.');
        return;
    }

    alert('Registration successful!');

});

function validateUsername(username) {
    return username.length >= 4;
}

function validateEmail(email) {
    return email.includes('@') && email.includes('.') && email.indexOf('@') < email.lastIndexOf('.');
}

function validateCountry(country) {
    return country !== "";
}

function validatePassword(password) {
    let hasNumber = false;
    let hasUpperCase = false;

    for (let i = 0; i < password.length; i++) {
        const char = password.charAt(i);
        if (char >= '0' && char <= '9') {
            hasNumber = true;
        }
        if (char >= 'A' && char <= 'Z') {
            hasUpperCase = true;
        }
    }

    return password.length >= 6 && hasNumber && hasUpperCase;
}
function validatePasswordMatch(password, confirmPassword) {
    return password === confirmPassword;
}

function validateDOB(dob) {
    return !isNaN(Date.parse(dob));
}

function displayError(message) {
    document.getElementById('errorMessage').textContent = message;
}



 