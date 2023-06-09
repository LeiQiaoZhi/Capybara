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

            image.addEventListener('load', function () {
                var maxWidth = window.innerWidth * 0.8; // 80% of viewport width
                var maxHeight = window.innerHeight * 0.8; // 80% of viewport height

                var imgWidth = image.width;
                var imgHeight = image.height;

                if (imgWidth < maxWidth && imgHeight < maxHeight) {
                    var scaleFactor = Math.min(maxWidth / imgWidth, maxHeight / imgHeight);
                    imgWidth *= scaleFactor;
                    imgHeight *= scaleFactor;
                }

                image.style.width = imgWidth + 'px';
                image.style.height = imgHeight + 'px';
            });
        })
        .catch(function (error) {
            console.log('Error:', error);
        });
});
