window.addEventListener('DOMContentLoaded', function () {
    loadImage();
});

function loadImage() {
    var imageContainer = document.getElementById('image-container');
    var image = document.getElementById('image');
    image.classList.remove('loaded');

    // Make a request to the capybara API
    fetch('https://api.capy.lol/v1/capybara?json=true')
        .then(function (response) {
            // Parse the response as JSON
            return response.json();
        })
        .then(function (data) {
            console.log('Data:', data);
            // Create an image element
            image.src = data.data.url;
            image.alt = 'Capybara';

            // Append the image to the container
            imageContainer.appendChild(image);

            image.addEventListener('load', function () {

                // animation
                image.classList.add('loaded');

                // Resize the image to fit the viewport
                var maxWidth = window.innerWidth * 0.9; // 80% of viewport width
                var maxHeight = window.innerHeight * 0.7; // 80% of viewport height

                var imgWidth = image.naturalWidth;
                var imgHeight = image.naturalHeight;

                var scaleFactor = Math.min(maxWidth / imgWidth, maxHeight / imgHeight);
                imgWidth *= scaleFactor;
                imgHeight *= scaleFactor;

                image.width = imgWidth;
                image.height = imgHeight;
            });
        })
        .catch(function (error) {
            console.log('Error:', error);
        });
}