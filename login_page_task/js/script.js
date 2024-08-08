document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const popup = document.getElementById('popup');
    const contactForm = document.getElementById('contactForm');

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();
            
            if (username && password) {
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);
                
                showPopup('Registered Successfully!');
            } else {
                showPopup('Please enter a valid username and password.');
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const loginUsername = document.getElementById('loginUsername').value.trim();
            const loginPassword = document.getElementById('loginPassword').value.trim();
            
            const storedUsername = localStorage.getItem('username');
            const storedPassword = localStorage.getItem('password');
            
            if (loginUsername === storedUsername && loginPassword === storedPassword) {
                window.location.href = 'dashboard.html';
            } else {
                showPopup('Incorrect username or password!');
            }
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Handle form submission logic here
            alert('Message sent!');
        });
    }

    function showPopup(message) {
        popup.textContent = message;
        popup.classList.add('show');
        setTimeout(() => {
            popup.classList.remove('show');
        }, 3000);
    }
});
