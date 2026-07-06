// ==============================
// MyShop Main JavaScript
// ==============================

// Show alert message
function showMessage(message) {
    alert(message);
}

// Contact Form
const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        showMessage("Thank you! Your message has been sent.");

        contactForm.reset();
    });
}

// Login Form
const loginForm = document.getElementById("login-form");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        showMessage("Login successful!");

        window.location.href = "index.html";
    });
}

// Register Form
const registerForm = document.getElementById("register-form");

if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const password =
            registerForm.querySelectorAll("input")[2].value;

        const confirmPassword =
            registerForm.querySelectorAll("input")[3].value;

        if (password !== confirmPassword) {
            showMessage("Passwords do not match!");
            return;
        }

        showMessage("Registration successful!");

        registerForm.reset();

        window.location.href = "login.html";
    });
}

// Checkout Form
const checkoutForm = document.getElementById("checkout-form");

if (checkoutForm) {
    checkoutForm.addEventListener("submit", function (e) {
        e.preventDefault();

        showMessage("Your order has been placed successfully!");

        localStorage.removeItem("cart");

        window.location.href = "index.html";
    });
}
