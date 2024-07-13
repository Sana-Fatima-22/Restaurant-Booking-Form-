document.addEventListener('DOMContentLoaded', function() {
    var picker = new Pikaday({
        field: document.getElementById('date'),
        format: 'YYYY-MM-DD'
    });

    document.getElementById('reservation-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Form validation
        var isValid = true;
        var requiredFields = ['name', 'email', 'phone', 'date', 'time', 'guests'];
        requiredFields.forEach(function(id) {
            var field = document.getElementById(id);
            if (!field.value.trim()) {
                field.classList.add('is-invalid');
                isValid = false;
            } else {
                field.classList.remove('is-invalid');
            }
        });

        if (isValid) {
            alert('Reservation submitted successfully!');
            // Here you can add code to send the form data to the server
        } else {
            alert('Please fill out all required fields.');
        }
    });
});
