document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting the traditional way

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;

    if (username && email) {
        alert("Thanks for signing up, " + username + "! We'll get back to you soon.");
    } else {
        alert("Please fill out all fields.");
    }
});
