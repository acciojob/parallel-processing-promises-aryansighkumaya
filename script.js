const output = document.getElementById("output");

// Array of image URLs
const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

// Function to create promises for image loading
function loadImage(image) {
  return new Promise((resolve, reject) => {
    const img = new Image(); // Create a new image element
    img.src = image.url; // Set the image URL
    img.onload = () => resolve(img); // Resolve the promise with the loaded image
    img.onerror = () => reject(`Failed to load image's URL: ${image.url}`); // Reject on error
  });
}

// Add event listener to load and display images
document.addEventListener("DOMContentLoaded", () => {
  const imagePromises = images.map(loadImage); // Create promises for all images

  Promise.all(imagePromises)
    .then(loadedImages => {
      // Append all loaded images to the output div
      loadedImages.forEach(img => output.appendChild(img));
    })
    .catch(error => {
      console.error(error); // Log error for any failed image
    });