window.addEventListener('DOMContentLoaded', function () {
    // Get the image container element
    var imageContainer = document.getElementById('image-container');

    // Make a request to the capybara API
    fetch('https://api.capy.lol/v1/capybara?json=true')
        .then(function (response) {
            // Parse the response as JSON
            return response.json();
        })
        .then(function (data) {
            console.log('Data:', data);
            // Create an image element
            var image = document.createElement('img');
            image.src = data.data.url;
            image.alt = 'Capybara';

            // Append the image to the container
            imageContainer.appendChild(image);
        })
        .catch(function (error) {
            console.log('Error:', error);
        });
});
