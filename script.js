function showLogin() {
    document.getElementById("loginForm").classList.remove("hidden");
    document.getElementById("registerForm").classList.add("hidden");
}

function showRegister() {
    document.getElementById("registerForm").classList.remove("hidden");
    document.getElementById("loginForm").classList.add("hidden");
}


document.getElementById("registerForm").addEventListener("submit", function(e){
    e.preventDefault();

    const user = {
        name: regName.value,
        username: regUsername.value,
        email: regEmail.value,
        password: regPassword.value,
        gender: regGender.value,
        birth: regBirth.value
    };

    localStorage.setItem("userAccount", JSON.stringify(user));
    alert("Registration successful! You can now login.");
    showLogin();
});


document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    const saved = JSON.parse(localStorage.getItem("userAccount"));

    if (!saved) {
        alert("No account found. Please register first.");
        return;
    }

    if (loginEmail.value === saved.email &&
        loginPassword.value === saved.password) {
        alert("Login successful! Welcome " + saved.name);
    } else {
        alert("Incorrect email or password.");
    }
});
