const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const image = document.createElement('img');

image.src = `img/${chosenImage}`;

document.body.appendChild(image);
