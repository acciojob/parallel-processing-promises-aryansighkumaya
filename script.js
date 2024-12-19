btn.addEventListener("click", () => {
    const imagePromises = images.map(image => {
        return new Promise((resolve, reject) => {
            const img = new Image(); // Create an image element
            img.src = image.url;
            img.onload = () => resolve(img); // Resolve with the image element
            img.onerror = () => reject(`Failed to load image's URL: ${image.url}`);
        });
    });

    Promise.all(imagePromises)
        .then(loadedImages => {
            loadedImages.forEach(img => output.appendChild(img)); // Append each image to output
        })
        .catch(error => {
            console.error(error); // Log error if any image fails
        });
});