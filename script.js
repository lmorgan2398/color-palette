// Create variable for color selected via color picker

let currentColor = '#FFFFFF';
let colorPicker = document.getElementById('color');

// Convert variable value to HSB
// Split HSB to separate Hue, Saturation, and Brightness values
// Apply hex value as text to div

function hexToHue(hex) {
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
    return  60 * (h < 0 ? h + 6 : h);
};

function hsbToHex(h, s, b) {
  s /= 100;
  b /= 100;

  const i = Math.floor(h / 60);
  const f = h / 60 - i;
  const p = b * (1 - s);
  const q = b * (1 - f * s);
  const t = b * (1 - (1 - f) * s);

  let r, g, bVal;

  switch (i % 6) {
    case 0: r = b, g = t, bVal = p; break;
    case 1: r = q, g = b, bVal = p; break;
    case 2: r = p, g = b, bVal = t; break;
    case 3: r = p, g = q, bVal = b; break;
    case 4: r = t, g = p, bVal = b; break;
    case 5: r = b, g = p, bVal = q; break;
  }

  const toHex = (x) => {
    const hex = Math.round(x * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(bVal)}`;
};

// Iterate over Saturation and Brightness values per hue to create different shades
// Apply different shades to corresponding divs

function shadeHue(hue) {
  let sList = [10, 30, 50, 70, 90, 100, 100, 100, 100]
  let bList = [100, 100, 100, 100, 90, 70, 50, 30, 10]
  
    for (let i = 0; i < 10; i++) {
      let h = hue;
      let s = sList[i];
      let b = bList[i];
      let newHex = hsbToHex(h, s, b);
      document.querySelector(`.shade${i + 1}`).style.backgroundColor = newHex;
      document.querySelector(`.shade${i + 1}`).textContent = newHex.toUpperCase();
    };
  return;
}

// Create input for changing selected color

colorPicker.addEventListener('input', () => {
    currentColor = document.getElementById('color').value;
    document.querySelector('label').style.backgroundColor = currentColor;    
});

colorPicker.addEventListener('change', () => {
  let hue = hexToHue(currentColor);
  shadeHue(hue);
});