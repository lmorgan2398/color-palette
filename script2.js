// Create object to represent a blank palette
// As changes are input, adjust and save full palette to localstorage
// Load page with blank palette if localstorage has no current palette (first load)
// If localstorage has a current palette, load that instead

let currentPalette = {};

if(!localStorage.getItem(`currentPalette`)) {
    currentPalette = {
        name: `none`,
        color1: `none`,
        color2: `none`,
        color3: `none`,
        color4: `none`,
        color5: `none`,
        color6: `none`,
        color7: `none`,
    }
} else {
    currentPalette = (JSON.parse(localStorage.getItem(`currentPalette`)));
};

for(let i = 1; i < 8; i++) {
    let currentColor = currentPalette[`color${i}`];
    shadeHex(currentColor, `${i}`);
    applyTrueColor(currentColor, `${i}`);
    }

let nameBox = document.getElementById('name');
if(currentPalette.name === 'none') {
    nameBox.value = null;
} else {
nameBox.value = currentPalette.name;
};

let colorPicker1 = document.getElementById('color1');
let colorPicker2 = document.getElementById('color2');
let colorPicker3 = document.getElementById('color3');
let colorPicker4 = document.getElementById('color4');
let colorPicker5 = document.getElementById('color5');
let colorPicker6 = document.getElementById('color6');
let colorPicker7 = document.getElementById('color7');


colorPicker1.addEventListener('input', () => {
    let currentColor1 = document.getElementById('color1').value;
    applyTrueColor(currentColor1, '1');    
  });

colorPicker1.addEventListener('change', () => {
  currentPalette.color1 = document.getElementById('color1').value;
  localStorage.setItem(`currentPalette`, JSON.stringify(currentPalette));
  shadeHex(currentPalette.color1, '1');
  document.querySelector('.save-button svg').style.fill = 'red';
});


colorPicker2.addEventListener('input', () => {
    let currentColor2 = document.getElementById('color2').value;
    applyTrueColor(currentColor2, '2');    
  });

colorPicker2.addEventListener('change', () => {
  currentPalette.color2 = document.getElementById('color2').value;
  localStorage.setItem(`currentPalette`, JSON.stringify(currentPalette));
  shadeHex(currentPalette.color2, '2');
  document.querySelector('.save-button svg').style.fill = 'red';
});



colorPicker3.addEventListener('input', () => {
    let currentColor3 = document.getElementById('color3').value;
    applyTrueColor(currentColor3, '3');    
  });

colorPicker3.addEventListener('change', () => {
  currentPalette.color3 = document.getElementById('color3').value;
  localStorage.setItem(`currentPalette`, JSON.stringify(currentPalette));
  shadeHex(currentPalette.color3, '3');
  document.querySelector('.save-button svg').style.fill = 'red';
});



colorPicker4.addEventListener('input', () => {
    let currentColor4 = document.getElementById('color4').value;
    applyTrueColor(currentColor4, '4');    
  });

colorPicker4.addEventListener('change', () => {
  currentPalette.color4 = document.getElementById('color4').value;
  localStorage.setItem(`currentPalette`, JSON.stringify(currentPalette));
  shadeHex(currentPalette.color4, '4');
  document.querySelector('.save-button svg').style.fill = 'red';
});


colorPicker5.addEventListener('input', () => {
    let currentColor5 = document.getElementById('color5').value;
    applyTrueColor(currentColor5, '5');    
  });

colorPicker5.addEventListener('change', () => {
  currentPalette.color5 = document.getElementById('color5').value;
  localStorage.setItem(`currentPalette`, JSON.stringify(currentPalette));
  shadeHex(currentPalette.color5, '5');
  document.querySelector('.save-button svg').style.fill = 'red';
});


colorPicker6.addEventListener('input', () => {
    let currentColor6 = document.getElementById('color6').value;
    applyTrueColor(currentColor6, '6');    
  });

colorPicker6.addEventListener('change', () => {
  currentPalette.color6 = document.getElementById('color6').value;
  localStorage.setItem(`currentPalette`, JSON.stringify(currentPalette));
  shadeHex(currentPalette.color6, '6');
  document.querySelector('.save-button svg').style.fill = 'red';
});


colorPicker7.addEventListener('input', () => {
    let currentColor7 = document.getElementById('color7').value;
    applyTrueColor(currentColor7, '7');    
  });

colorPicker7.addEventListener('change', () => {
  currentPalette.color7 = document.getElementById('color7').value;
  localStorage.setItem(`currentPalette`, JSON.stringify(currentPalette));
  shadeHex(currentPalette.color7, '7');
  document.querySelector('.save-button svg').style.fill = 'red';
});

nameBox.addEventListener('change', () => {
    if (!nameBox.value || nameBox.value === "null" || nameBox.value.trim() === "") {
        currentPalette.name = 'none';
        localStorage.setItem(`currentPalette`, JSON.stringify(currentPalette));
        nameBox.value = '';
    } else {
        currentPalette.name = nameBox.value;
        localStorage.setItem(`currentPalette`, JSON.stringify(currentPalette));
        document.querySelector('.save-button svg').style.fill = 'red';
    }
});


let savedNameBox = document.querySelector('.saved-name');


function randomizeNameColor() {
    if(currentPalette.name !== 'none') {
      let count;
      for(let i = 1; i < 7; i++) {
        if ((currentPalette[`color${i}`] === 'none') && i === 7) {
          count = false;
        } else if ((currentPalette[`color${i}`] === 'none')) {
          continue; 
        } else {
          count = true;
          break;}
      };
      if(count === true) {
        while(savedNameBox.firstChild) {
          savedNameBox.removeChild(savedNameBox.firstChild);
        }
        let length = nameBox.value.length;
        let stringToArray = nameBox.value.split('');
        for(let i = 0; i < length; i++) {
          let newChar = document.createElement('span');
          newChar.textContent = stringToArray[i];
          savedNameBox.appendChild(newChar);
          let randomValue = (Math.floor(Math.random() * 7)) + 1;
          while(currentPalette[`color${randomValue}`] === 'none') {
            randomValue = (Math.floor(Math.random() * 7)) + 1;
          };
          let hue = hexToHue(currentPalette[`color${randomValue}`]);
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
  } else {nameBox.value = ''};
  };
  
  savedNameBox.addEventListener('click', () => {
    savedNameBox.style.zIndex = 0;
    nameBox.focus();
  })
  
  nameBox.addEventListener('keypress', function(e) {
    if(e.key === 'Enter') {
      nameBox.blur();
    }
  });
  
  nameBox.addEventListener('focusout', () => {
    if (!nameBox.value || nameBox.value === "null" || nameBox.value.trim() === "") {
        localStorage.setItem(`currentPalette`, JSON.stringify(currentPalette));
    } else {        
        localStorage.setItem(`currentPalette`, JSON.stringify(currentPalette));
        randomizeNameColor();
        savedNameBox.style.zIndex = 2;
        document.querySelector('.save-button svg').style.fill = 'red';
    }
  })
  
randomizeNameColor();
  
if(savedNameBox.firstChild) {
    savedNameBox.style.zIndex = 2;
}
  
// Create save function to save current localstorage palette object as a saved palette

// Create load function to set saved palette to current localstorage palette

// Create new function to set current localstorage palette object to blank palette object

let newButton = document.querySelector('.new-button');
newButton.addEventListener('click', () => {
    currentPalette = {
        name: `none`,
        color1: `none`,
        color2: `none`,
        color3: `none`,
        color4: `none`,
        color5: `none`,
        color6: `none`,
        color7: `none`,
    }

    localStorage.setItem(`currentPalette`, JSON.stringify(currentPalette));

    for(let i = 1; i < 8; i++) {
        let currentColor = currentPalette[`color${i}`];
        shadeHex(currentColor, `${i}`);
        applyTrueColor(currentColor, `${i}`);
        }
    nameBox.value = null;
    while(savedNameBox.firstChild) {
        savedNameBox.removeChild(savedNameBox.firstChild);
      }
      savedNameBox.style.zIndex = 0;
});

// Insert color translation functions

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


function shadeHex(hex, column) {
  if (hex === 'none') {
    for (let i = 0; i < 9; i++) {
        let currentCell = document.querySelector(`.column${column}` + ' ' + `.shade${i + 1}`)
        currentCell.style.backgroundColor = 'lightgray';
        currentCell.textContent = '';
    }
  } else {
    console.log('hue');
    let hue = hexToHue(hex);
    let sList = [10, 30, 50, 70, 90, 100, 100, 100, 100]
    let bList = [100, 100, 100, 100, 90, 70, 50, 30, 10]
    
        for (let i = 0; i < 9; i++) {
        let currentCell = document.querySelector(`.column${column}` + ' ' + `.shade${i + 1}`)
        let h = hue;
        let s = sList[i];
        let b = bList[i];
        let newHex = hsbToHex(h, s, b);
        currentCell.style.backgroundColor = newHex;
        currentCell.textContent = newHex;
        };
    };
};


function applyTrueColor(color, column) {
    let input = document.querySelector(`.column${column} label`);
    if(color === 'none') {
        input.style.backgroundColor = 'lightgray';
    } else {
        let trueHue = hexToHue(color);
        let trueColor = hsbToHex(trueHue, 100, 100);
        input.style.backgroundColor = trueColor;
    }
};


function randomizeTitleColor() {
    for(let i = 0; i < 14; i++) {
      let currentChar = document.querySelector(`span:nth-child(${i + 1})`);
      function randomColorValue() {
        let randomValue = Math.floor(Math.random() * 256);
        return randomValue;
      }
      let r = randomColorValue();
      let g = randomColorValue();
      let b = randomColorValue();
    
      currentChar.style.color = `rgb(${r}, ${g}, ${b})`;
    }
  };
  
  randomizeTitleColor();
  
  let titleHeading = document.querySelector('h1');
  titleHeading.addEventListener('click', () => {
    randomizeTitleColor();
  })
  
  
  