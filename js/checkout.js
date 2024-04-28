document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const totalDisplay = document.getElementById('totalDisplay');

    // Retrieve cart total from URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const total = urlParams.get('total');
    if (total) {
        totalDisplay.textContent = `Total: ${total} LKR`;
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const inputs = form.querySelectorAll('input, textarea');

        let isEmpty = false;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                isEmpty = true;
                alert('Please fill in all the required fields.');
            }
        });

        if (!isEmpty) {
            alert('Thank you for your purchase!');
            window.location.href = 'editorSulandi.html';  
        }
    });
});



