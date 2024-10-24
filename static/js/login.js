function validateLoginForm() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    if (email == "" || password == "") {
        alert("Both fields are required.");
        return false;
    }
    return true;
}

function validateRegisterForm() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("registerEmail").value;
    let password = document.getElementById("registerPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (username == "" || email == "" || password == "" || confirmPassword == "") {
        alert("All fields are required.");
        return false;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    return true;
}