document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const company = document.getElementById('company').value;
    const industry = document.getElementById('industry').value;

    if (name && email && phone && company && industry) {
        document.getElementById('message').innerText = 'Thank you for registering!';
        document.getElementById('message').style.color = '#28a745'; 
        document.getElementById('registrationForm').reset();
    } else {
        document.getElementById('message').innerText = 'Please fill in all fields.';
        document.getElementById('message').style.color = '#dc3545';
    }
});