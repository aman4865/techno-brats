document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact form");
    const overlay = document.getElementById("thank-you-overlay");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(form);

        fetch('http://localhost:3000/submit', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            overlay.style.display = "flex"; // Show the overlay
            form.reset(); // Reset the form fields
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        });
    });
});

function closeOverlay() {
    document.getElementById("thank-you-overlay").style.display = "none";
}