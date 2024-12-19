function validateForm() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("Confirm-password")
    var errrorMsg = document.getElementById(errror-msg)

    if (password !== confirmPassword) {
        errorMsg.textContent = "Les mots de passe ne correspondent pas";
        errrorMsg.style.color = "red";
        return false;
    }
    return true;
}
