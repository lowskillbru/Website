document.getElementById('contactForm').addEventListener('submit', function(event) {
    // 1. Prevent the page from reloading
    event.preventDefault();

    // 2. Get values (Optional: You could use these values to send an email, but simple display is requested)
    const name = document.getElementById('name').value;
    
    // 3. Display success message
    const responseDiv = document.getElementById('responseMessage');
    responseDiv.innerHTML = `<p style="color: green; margin-top: 10px;">Thank you, ${name}! Your message has been received.</p>`;
    
    // 4. Clear the form
    document.getElementById('contactForm').reset();
});
