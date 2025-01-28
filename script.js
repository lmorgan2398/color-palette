// Create variable for color selected via color picker

let currentColor = document.getElementById('color').value;
let colorPicker = document.getElementById('color');

function hexToRgb(hex) {
    hex = hex.substr(1);
    console.log(hex);
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);
    return { r, g, b };
}

function rgbToHsb(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    const v = Math.max(r, g, b),
      n = v - Math.min(r, g, b);
    const h =
      n === 0 ? 0 : n && v === r ? (g - b) / n : v === g ? 2 + (b - r) / n : 4 + (r - g) / n;
    return [60 * (h < 0 ? h + 6 : h), v && (n / v) * 100, v * 100];
  };

function hexToHsb(hex) {
    hex = hex.substr(1);
    console.log(hex);
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    r /= 255;
    g /= 255;
    b /= 255;
    const v = Math.max(r, g, b),
      n = v - Math.min(r, g, b);
    const h =
      n === 0 ? 0 : n && v === r ? (g - b) / n : v === g ? 2 + (b - r) / n : 4 + (r - g) / n;
    return [60 * (h < 0 ? h + 6 : h), v && (n / v) * 100, v * 100];
};

document.addEventListener('change', () => {
    currentColor = document.getElementById('color').value;
    document.querySelector('label').style.backgroundColor = currentColor;
    document.querySelector('label').style.border = `1px solid ${currentColor}`


});

// Convert variable value to HSB

// Split HSB to separate Hue, Saturation, and Brightness values

// Iterate over Saturation and Brightness values per hue to create different shades

// Apply different shades to corresponding divs