// Get a reference to the button with the id "btn"
const btn = document.getElementById("btn");

// Get a reference to the element with the class "color"
const color = document.querySelector(".color");

// Generate a random RGB color and store it in the variable "randomColor"
const randomColor = getRandomColor();

// Generate a random HEX color and store it in the variable "randomHexColor"
const randomHexColor = getRandomHexColor();

// Function to generate a random RGB color
function getRandomColor() {
  // Generate random values between 0 and 255 for red, green, and blue components
  const r = Math.floor(Math.random() * 256); // Random value between 0 and 255 for red
  const g = Math.floor(Math.random() * 256); // Random value between 0 and 255 for green
  const b = Math.floor(Math.random() * 256); // Random value between 0 and 255 for blue
  return `rgb(${r}, ${g}, ${b})`; // Return the RGB color as a string
}

// Function to generate a random HEX color
function getRandomHexColor() {
  // Generate random values between 0 and 255 for red, green, and blue components
  const r = Math.floor(Math.random() * 256); // Random value between 0 and 255 for red
  const g = Math.floor(Math.random() * 256); // Random value between 0 and 255 for green
  const b = Math.floor(Math.random() * 256); // Random value between 0 and 255 for blue
  // Convert the RGB values to hexadecimal and return them as a string
  return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
}

// Function to change the background color and text content
function changeColor() {
  // Get a new random RGB and HEX color
  const colorRgb = getRandomColor();
  const colorHex = getRandomHexColor();

  // Update the text content of the "color" element to display the RGB and HEX values
  color.textContent = `${colorRgb} or hex: ${colorHex}`;

  // Set the background color of the document's body to the new RGB color
  document.body.style.backgroundColor = colorRgb;

  // Set the text color of the "color" element to the new RGB color
  color.style.color = colorRgb;
}

// Add a click event listener to the button, so when it's clicked, the "changeColor" function is executed
btn.addEventListener("click", changeColor);

// Call the "changeColor" function to initialize the page with a random color
changeColor();
