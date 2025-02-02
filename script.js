// Create variable for color selected via color picker

let currentColor1 = localStorage.getItem('currentColor1');
let currentColor2 = localStorage.getItem('currentColor2');
let currentColor3 = localStorage.getItem('currentColor3');
let currentColor4 = localStorage.getItem('currentColor4');
let currentColor5 = localStorage.getItem('currentColor5');
let currentColor6 = localStorage.getItem('currentColor6');
let currentColor7 = localStorage.getItem('currentColor7');

let colorPicker1 = document.getElementById('color1');
let colorPicker2 = document.getElementById('color2');
let colorPicker3 = document.getElementById('color3');
let colorPicker4 = document.getElementById('color4');
let colorPicker5 = document.getElementById('color5');
let colorPicker6 = document.getElementById('color6');
let colorPicker7 = document.getElementById('color7');

document.addEventListener('DOMContentLoaded', () => {
  let hue1 = hexToHue(currentColor1);
  shadeHue(hue1, '1');
  applyTrueColor(currentColor1, '1');

  let hue2 = hexToHue(currentColor2);
  shadeHue(hue2, '2');
  applyTrueColor(currentColor2, '2');

  let hue3 = hexToHue(currentColor3);
  shadeHue(hue3, '3');
  applyTrueColor(currentColor3, '3');

  let hue4 = hexToHue(currentColor4);
  shadeHue(hue4, '4');
  applyTrueColor(currentColor4, '4');

  let hue5 = hexToHue(currentColor5);
  shadeHue(hue5, '5');
  applyTrueColor(currentColor5, '5');

  let hue6 = hexToHue(currentColor6);
  shadeHue(hue6, '6');
  applyTrueColor(currentColor6, '6');

  let hue7 = hexToHue(currentColor7);
  shadeHue(hue7, '7');
  applyTrueColor(currentColor7, '7');
});

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
  
    for (let i = 0; i < 9; i++) {
      let h = hue;
      let s = sList[i];
      let b = bList[i];
      let newHex = hsbToHex(h, s, b);
      let currentCell = document.querySelector(`.column${column}` + ' ' + `.shade${i + 1}`)
      currentCell.style.backgroundColor = newHex;
      currentCell.textContent = newHex;
    };
}

// Create input for changing selected color

colorPicker1.addEventListener('input', () => {
    currentColor1 = document.getElementById('color1').value;
    applyTrueColor(currentColor1, '1');    
  });

colorPicker1.addEventListener('change', () => {
  localStorage.setItem('currentColor1', `${currentColor1}`);
  let hue = hexToHue(currentColor1);
  shadeHue(hue, '1');
  document.querySelector('.save-button svg').style.fill = 'red';
});

// Repeat process for each color picker

colorPicker2.addEventListener('input', () => {
  currentColor2 = document.getElementById('color2').value;
  applyTrueColor(currentColor2, '2');    
});

colorPicker2.addEventListener('change', () => {
localStorage.setItem('currentColor2', `${currentColor2}`);
let hue = hexToHue(currentColor2);
shadeHue(hue, '2');
document.querySelector('.save-button svg').style.fill = 'red';
});



colorPicker3.addEventListener('input', () => {
  currentColor3 = document.getElementById('color3').value;
  applyTrueColor(currentColor3, '3');    
});

colorPicker3.addEventListener('change', () => {
localStorage.setItem('currentColor3', `${currentColor3}`);
let hue = hexToHue(currentColor3);
shadeHue(hue, '3');
document.querySelector('.save-button svg').style.fill = 'red';
});



colorPicker4.addEventListener('input', () => {
  currentColor4 = document.getElementById('color4').value;
  applyTrueColor(currentColor4, '4');    
});

colorPicker4.addEventListener('change', () => {
localStorage.setItem('currentColor4', `${currentColor4}`);
let hue = hexToHue(currentColor4);
shadeHue(hue, '4');
document.querySelector('.save-button svg').style.fill = 'red';
});



colorPicker5.addEventListener('input', () => {
  currentColor5 = document.getElementById('color5').value;
  applyTrueColor(currentColor5, '5');    
});

colorPicker5.addEventListener('change', () => {
localStorage.setItem('currentColor5', `${currentColor5}`);
let hue = hexToHue(currentColor5);
shadeHue(hue, '5');
document.querySelector('.save-button svg').style.fill = 'red';
});



colorPicker6.addEventListener('input', () => {
  currentColor6 = document.getElementById('color6').value;
  applyTrueColor(currentColor6, '6');    
});

colorPicker6.addEventListener('change', () => {
localStorage.setItem('currentColor6', `${currentColor6}`);
let hue = hexToHue(currentColor6);
shadeHue(hue, '6');
document.querySelector('.save-button svg').style.fill = 'red';
});



colorPicker7.addEventListener('input', () => {
  currentColor7 = document.getElementById('color7').value;
  applyTrueColor(currentColor7, '7');    
});

colorPicker7.addEventListener('change', () => {
localStorage.setItem('currentColor7', `${currentColor7}`);
let hue = hexToHue(currentColor7);
shadeHue(hue, '7');
document.querySelector('.save-button svg').style.fill = 'red';
});

// Add function to copy hex values to clipboard

const colors = document.querySelectorAll(`.column div`);
colors.forEach(color => {
  color.addEventListener('click', () => {
    if(color.textContent && color.textContent !== 'copied') {
      let currentCellColor = color.textContent;
      navigator.clipboard.writeText(currentCellColor);
      color.textContent = 'copied';
      setTimeout(function() {
        color.textContent = currentCellColor;
      }, 3000);
    }
  })
})


// Create function to apply 100% saturation/brightness

function applyTrueColor(color, column) {
  let trueHue = hexToHue(color);
  let trueColor = hsbToHex(trueHue, 100, 100);
  document.querySelector(`.column${column} label`).style.backgroundColor = trueColor;
}


// Add and call function to randomize color of text in title heading
// Add event listener to clicking on title to randomize further

function randomizeTitleColor() {
  function rgbToHue(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    const v = Math.max(r, g, b),
      n = v - Math.min(r, g, b);
    const h =
      n === 0 ? 0 : n && v === r ? (g - b) / n : v === g ? 2 + (b - r) / n : 4 + (r - g) / n;
    return 60 * (h < 0 ? h + 6 : h);
  };

  for(let i = 0; i < 14; i++) {
    let currentChar = document.querySelector(`span:nth-child(${i + 1})`);
    function randomColorValue() {
      let randomValue = Math.floor(Math.random() * 256);
      return randomValue;
    }
    let r = randomColorValue();
    let g = randomColorValue();
    let b = randomColorValue();

    // let trueHue = rgbToHue(r, g, b);
    // let trueColor = hsbToHex(trueHue, 100, 100)

    currentChar.style.color = `rgb(${r}, ${g}, ${b})`;
  }
};

randomizeTitleColor();

let titleHeading = document.querySelector('h1');
titleHeading.addEventListener('click', () => {
  randomizeTitleColor();
})



// Create input function to save name of palette

let nameBox = document.getElementById('name');

nameBox.addEventListener('change', () => {
  localStorage.setItem('currentName', `${document.getElementById('name').value}`)
  document.querySelector('.save-button svg').style.fill = 'red';
})

nameBox.value = localStorage.getItem('currentName');

let savedNameBox = document.querySelector('.saved-name');

// Create and apply function to style palette name in colors of the palette

function randomizeNameColor() {
  let count;
  for(let i = 1; i < 8; i++) {
    if (!localStorage.getItem(`currentColor${i}`) && i === 7) {
      count = false;
    } else if (!localStorage.getItem(`currentColor${i}`)) {
      continue; 
    } else {
      count = true;
      console.log('working');
      break;}
  };
  if(count === true) {
    console.log('working');
    while(savedNameBox.firstChild) {
      savedNameBox.removeChild(savedNameBox.firstChild);
    }
    let length = nameBox.value.length;
    let stringToArray = nameBox.value.split('');
    for(let i = 0; i < length; i++) {
      let newChar = document.createElement('span');
      newChar.textContent = stringToArray[i];
      console.log('working');
      savedNameBox.appendChild(newChar);
      let randomValue = (Math.floor(Math.random() * 7)) + 1;
      while(localStorage.getItem(`currentColor${randomValue}`) === null) {
        randomValue = (Math.floor(Math.random() * 7)) + 1;
      };
      let hue = hexToHue(localStorage.getItem(`currentColor${randomValue}`));
      let newColor = hsbToHex(hue, 100, 100);
      newChar.style.color = newColor;
    }
  } else {
    while(savedNameBox.firstChild) {
      savedNameBox.removeChild(savedNameBox.firstChild);
    }
    let length = nameBox.value.length;
    let stringToArray = nameBox.value.split('');
    for(let i = 0; i < length; i++) {
      let newChar = document.createElement('span');
      newChar.textContent = stringToArray[i];
      savedNameBox.appendChild(newChar);
    }
  }
};

savedNameBox.addEventListener('click', () => {
  savedNameBox.style.zIndex = 0;
  nameBox.focus();
})

nameBox.addEventListener('keypress', function(e) {
  if(e.key === 'Enter') {
    randomizeNameColor();
    savedNameBox.style.zIndex = 2;
    nameBox.blur();
    document.querySelector('.save-button svg').style.fill = 'red';
  }
});

randomizeNameColor();

if(savedNameBox.firstChild) {
  savedNameBox.style.zIndex = 2;
}

// Create function to save current localStorage palette set to 
// unique localStorage object as a preset

function saveCurrentPalette() {
  for(let i = 1; i < 6; i++) {
    let savedPalette = JSON.parse(localStorage.getItem(`savedPalette${i}`));
    console.log(!savedPalette);
    if(!savedPalette || savedPalette && savedPalette.name === localStorage.getItem(`currentName`)) {
      let newSavedPalette = {
        name: localStorage.getItem(`currentName`),
        color1: currentColor1,
        color2: currentColor2,
        color3: currentColor3,
        color4: currentColor4,
        color5: currentColor5,
        color6: currentColor6,
        color7: currentColor7,
      }
      localStorage.setItem(`savedPalette${i}`, JSON.stringify(newSavedPalette));
      console.log('working');
      return;
    } else if(savedPalette && i === 5) {
      alert('Max limit reached!');
      console.log('working');
      break;
    } else {
      console.log('working');
      continue};
  }
}

let saveButton = document.querySelector('.save-button');
saveButton.addEventListener('click', () => {
  saveCurrentPalette();
  document.querySelector('.save-button svg').style.fill = 'green';
})