// Create variable for color selected via color picker

let currentColor1 = '#FFFFFF';
let currentColor2 = '#FFFFFF';
let currentColor3 = '#FFFFFF';
let currentColor4 = '#FFFFFF';
let currentColor5 = '#FFFFFF';
let currentColor6 = '#FFFFFF';
let currentColor7 = '#FFFFFF';

let colorPicker1 = document.getElementById('color1');
let colorPicker2 = document.getElementById('color2');
let colorPicker3 = document.getElementById('color3');
let colorPicker4 = document.getElementById('color4');
let colorPicker5 = document.getElementById('color5');
let colorPicker6 = document.getElementById('color6');
let colorPicker7 = document.getElementById('color7');


// Convert variable value to HSB
// Split HSB to separate Hue, Saturation, and Brightness values
// Apply hex value as text to div

function hexToHue(hex) {
    hex = hex.substr(1);
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

function shadeHue(hue, column) {
  let sList = [10, 30, 50, 70, 90, 100, 100, 100, 100]
  let bList = [100, 100, 100, 100, 90, 70, 50, 30, 10]
  
    for (let i = 0; i < 10; i++) {
      let h = hue;
      let s = sList[i];
      let b = bList[i];
      let newHex = hsbToHex(h, s, b);
      document.querySelector(`.column${column} .shade${i + 1}`).style.backgroundColor = newHex;
      document.querySelector(`.column${column} .shade${i + 1}`).textContent = newHex.toUpperCase();
    };
  return;
}

// Create input for changing selected color

colorPicker1.addEventListener('input', () => {
    currentColor1 = document.getElementById('color1').value;
    document.querySelector('.column1 label').style.backgroundColor = currentColor1;    
});

colorPicker1.addEventListener('change', () => {
  let hue = hexToHue(currentColor1);
  shadeHue(hue, '1');
});

// Repeat process for each color picker

colorPicker2.addEventListener('input', () => {
  currentColor2 = document.getElementById('color2').value;
  document.querySelector('.column2 label').style.backgroundColor = currentColor2;    
});

colorPicker2.addEventListener('change', () => {
let hue = hexToHue(currentColor2);
shadeHue(hue, '2');
});



colorPicker3.addEventListener('input', () => {
  currentColor3 = document.getElementById('color3').value;
  document.querySelector('.column3 label').style.backgroundColor = currentColor3;    
});

colorPicker3.addEventListener('change', () => {
let hue = hexToHue(currentColor3);
shadeHue(hue, '3');
});



colorPicker4.addEventListener('input', () => {
  currentColor4 = document.getElementById('color4').value;
  document.querySelector('.column4 label').style.backgroundColor = currentColor4;    
});

colorPicker4.addEventListener('change', () => {
let hue = hexToHue(currentColor4);
shadeHue(hue, '4');
});



colorPicker5.addEventListener('input', () => {
  currentColor5 = document.getElementById('color5').value;
  document.querySelector('.column5 label').style.backgroundColor = currentColor5;    
});

colorPicker5.addEventListener('change', () => {
let hue = hexToHue(currentColor5);
shadeHue(hue, '5');
});



colorPicker6.addEventListener('input', () => {
  currentColor6 = document.getElementById('color6').value;
  document.querySelector('.column6 label').style.backgroundColor = currentColor6;    
});

colorPicker6.addEventListener('change', () => {
let hue = hexToHue(currentColor6);
shadeHue(hue, '6');
});



colorPicker7.addEventListener('input', () => {
  currentColor7 = document.getElementById('color7').value;
  document.querySelector('.column7 label').style.backgroundColor = currentColor7;
  console.log('working')  
});

colorPicker7.addEventListener('change', () => {
let hue = hexToHue(currentColor7);
shadeHue(hue, '7');
});

// Add function to copy hex values to clipboard

const colors = document.querySelectorAll(`.column div`);
colors.forEach(color => {
  color.addEventListener('click', () => {
    navigator.clipboard.writeText(color.textContent);
  })
})