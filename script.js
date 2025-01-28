// Create variable for color selected via color picker

let currentColor = document.getElementById('color').value;
let colorPicker = document.getElementById('color');


document.addEventListener('input', () => {
    currentColor = document.getElementById('color').value;
});

// Convert variable value to HSB

// Split HSB to separate Hue, Saturation, and Brightness values

// Iterate over Saturation and Brightness values per hue to create different shades

// Apply different shades to corresponding divs