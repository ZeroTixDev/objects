'use strict';
require('./style.css');
const Rectangle = require('./rectangle');
const State = require('./state');
const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
const modes = ['create', 'move'];
const actions = [
   {
      name: 'clear',
      click: () => {
         clear();
      },
      allow: ['create'],
   },
   {
      name: 'replay',
      click: () => {
         replayStates();
      },
      allow: ['create', 'move'],
   },
   {
      name: 'clear history',
      click: () => {
         clearHistory();
      },
      allow: ['create'],
   },
   {
      name: 'spawn random objects',
      click: () => {
         spawnRandomObjects();
      },
      allow: ['create'],
   },
   {
      name: 'settings',
      click: () => {
         toggleSettings();
      },
      allow: ['create', 'move'],
   },
];
const sliders = [{ name: 'replay rate', min: 1, max: 40, default: 15 }];
const topPadding = 25;
let tick = 0;
let tempObject = null;
let replaying = false;
let showSettings = false;
let states = [];
let modeIndex = 0;
states.push(State.empty());
render(states[tick]);
makeDropdown(modes);
makeButtons(actions);
resizeCanvas(canvas);
makeSliders(sliders);
window.addEventListener('resize', () => {
   resizeCanvas(canvas);
   render(states[tick]);
});

canvas.addEventListener('mousedown', mouseDrag);
canvas.addEventListener('mousemove', mouseMove);
canvas.addEventListener('mouseup', endDrag);
window.addEventListener('keyup', keyActions);

let drag = false;
let selected = false;
let selectIndex = 0;
let originX = 0;
let originY = 0;
let pivotX = 0;
let pivotY = 0;

function mouseDrag(event) {
   if (!drag && !replaying && !showSettings) {
      if (modes[modeIndex] === 'create') {
         drag = true;
         originX = event.pageX;
         originY = event.pageY - topPadding;
         tempObject = new Rectangle(Math.round(originX), Math.round(originY), 1, 1);
         render(states[tick]);
      } else if (modes[modeIndex] === 'move') {
         const x = event.pageX;
         const y = event.pageY - topPadding;
         const currentState = states[tick].copy();
         for (let i = currentState.objects.length - 1; i >= 0; i--) {
            const object = currentState.objects[i];
            if (object.selected) continue;
            if (!selected && object.inside(x, y)) {
               selected = true;
               selectIndex = i;
               tick++;
               const newState = states[tick - 1].copy();
               newState.objects[selectIndex] = newState.objects[selectIndex].select();
               states[tick] = newState;
               pivotX = event.pageX;
               pivotY = event.pageY - topPadding;
               render(states[tick]);
               break;
            }
         }
      }
   }
}

function mouseMove() {
   if ((drag || selected) && !replaying && !showSettings) {
      if (
         tempObject != null &&
         (event.pageX - originX !== tempObject.width || event.pageY - topPadding - originY !== tempObject.height) &&
         modes[modeIndex] === 'create'
      ) {
         tempObject.width = Math.round(event.pageX - originX);
         tempObject.height = Math.round(event.pageY - topPadding - originY);
         render(states[tick]);
      }
      if (modes[modeIndex] === 'move' && selected) {
         const xDistance = Math.abs(
            states[tick].objects[selectIndex].x - (states[tick].objects[selectIndex].x + event.pageX - pivotX)
         );
         const yDistance = Math.abs(
            states[tick].objects[selectIndex].y -
               (states[tick].objects[selectIndex].y + event.pageY - topPadding - pivotY)
         );
         if (
            (Math.round(event.pageX) !== Math.round(pivotX) ||
               Math.round(event.pageY - topPadding) !== Math.round(pivotY)) &&
            (xDistance > 10 || yDistance > 10)
         ) {
            tick++;
            states[tick] = states[tick - 1].copy();
            states[tick].objects[selectIndex] = states[tick].objects[selectIndex]
               .move(event.pageX - pivotX, event.pageY - topPadding - pivotY)
               .select();
            pivotX = event.pageX;
            pivotY = event.pageY - topPadding;
            render(states[tick]);
         }
      }
   }
}

function endDrag() {
   if (replaying || showSettings) return;
   drag = false;
   if (modes[modeIndex] === 'create') {
      if (tempObject !== null) {
         tick++;
         if (Math.sign(tempObject.width) === -1) {
            tempObject.x -= Math.abs(tempObject.width);
            tempObject.width *= -1;
            tempObject.width = Math.max(tempObject.width, 1);
         }
         if (Math.sign(tempObject.height) === -1) {
            tempObject.y -= Math.abs(tempObject.height);
            tempObject.height *= -1;
            tempObject.height = Math.max(tempObject.height, 1);
         }
         states[tick] = states[tick - 1].merge({
            objects: [tempObject],
         });
         tempObject = null;
      }
   } else if (modes[modeIndex] === 'move') {
      if (selected) {
         tick++;
         states[tick] = states[tick - 1].unselect();
         selected = false;
      }
   }
   render(states[tick]);
}
function render(state) {
   requestAnimationFrame(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'black';
      ctx.fillStyle = 'white';
      ctx.lineWidth = 4;
      for (const object of state.objects) {
         if (!object) return;
         if (object.selected) ctx.strokeStyle = 'blue';
         else ctx.strokeStyle = 'black';
         ctx.fillRect(object.x, object.y, object.width, object.height);
         ctx.strokeRect(object.x, object.y, object.width, object.height);
      }
      if (tempObject != null) {
         if (modes[modeIndex] === 'create') {
            ctx.strokeStyle = 'rgba(200, 0, 0, 0.8)';
         } else if (modes[modeIndex] === 'move') {
            ctx.strokeStyle = '#314fd4';
         }
         ctx.strokeRect(tempObject.x, tempObject.y, tempObject.width, tempObject.height);
      }
      if (showSettings) {
         ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
         ctx.fillRect(0, 0, canvas.width, canvas.height);
         ctx.fillStyle = 'rgb(230, 230, 230)';
         ctx.shadowBlur = 40;
         ctx.shadowColor = 'white';
         ctx.fillRect(canvas.width / 2 - 500, canvas.height / 2 - 300, 1000, 600);
         ctx.shadowBlur = 0;
         ctx.textAlign = 'center';
         ctx.textBaseline = 'middle';
         ctx.font = '40px Arial';
         ctx.fillStyle = 'black';
         ctx.fillText('Keybinds', canvas.width / 2, canvas.height / 2 - 250);
         ctx.fillText('S for settings', canvas.width / 2, canvas.height / 2 - 150);
         ctx.fillText('R for replay', canvas.width / 2, canvas.height / 2 - 100);
         ctx.fillText('C for clear', canvas.width / 2, canvas.height / 2 - 50);
         ctx.fillText('Space for spawn objects', canvas.width / 2, canvas.height / 2);
         ctx.fillText('H for clear history', canvas.width / 2, canvas.height / 2 + 50);
      }
   });
}
function spawnRandomObjects() {
   if (replaying || showSettings || modes[modeIndex] !== 'create') return;
   const objects = [];
   for (let i = 0; i < 5; i++) {
      tick++;
      objects.push(
         new Rectangle(
            Math.round(Math.random() * canvas.width - 200),
            Math.round(Math.random() * canvas.height - 200),
            Math.round(Math.random() * (Math.random() * 300 + 50)),
            Math.round(Math.random() * (Math.random() * 300 + 50))
         )
      );
      states[tick] = states[tick - 1].merge({ objects });
   }
   render(states[tick]);
}
function clear() {
   if (replaying || showSettings) return;
   tick++;
   states[tick] = State.empty();
   tempObject = null;
   render(states[tick]);
}
function clearHistory() {
   if (replaying || showSettings) return;
   const state = states[tick];
   tick = 0;
   states = [];
   states[tick] = state;
   render(states[tick]);
}
function replayStates() {
   if (replaying || showSettings) return;
   replaying = true;
   const maxTick = tick;
   tick = 0;
   tempObject = null;
   drag = false;
   selected = false;
   const start = Date.now();
   const replayRate = document.querySelector('#replay_rate').value || 15;
   let lastTick = tick;
   checkToDisableButtons();
   function replay() {
      const expectedTick = Math.ceil((Date.now() - start) * (replayRate / 1000));
      while (tick < expectedTick) {
         if (tick >= maxTick) {
            replaying = false;
            checkToDisableButtons();
            tick = maxTick;
            render(states[tick]);
            return;
         }
         tick++;
      }
      if (lastTick != tick) {
         render(states[tick]);
      }
      lastTick = tick;
      requestAnimationFrame(replay);
   }
   requestAnimationFrame(replay);
}
function toggleSettings() {
   if (replaying) return;
   tempObject = null;
   showSettings = !showSettings;
   render(states[tick]);
}
function keyActions({ keyCode }) {
   if (keyCode === 82) {
      replayStates();
   } else if (keyCode === 32) {
      spawnRandomObjects();
   } else if (keyCode === 67) {
      clear();
   } else if (keyCode === 72) {
      clearHistory();
   } else if (keyCode === 83) {
      toggleSettings();
   }
}
function resizeCanvas(canvas) {
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight - topPadding;
}
function checkToDisableButtons() {
   const list = document.querySelectorAll('button') || {};
   for (const i of Object.keys(list)) {
      const button = list[i];
      if (replaying && actions[i].name !== 'replay') {
         button.classList.add('disabled');
         continue;
      } else if (replaying && actions[i].name == 'replay') {
         button.classList.remove('disabled');
         continue;
      }
      if (actions[i].allow.indexOf(modes[modeIndex]) > -1) {
         button.classList.remove('disabled');
      } else {
         button.classList.add('disabled');
      }
   }
   console.log('checked');
}
function makeDropdown(modes) {
   const selectElement = document.createElement('select');
   selectElement.classList.add('mode');
   for (const mode of modes) {
      const option = document.createElement('option');
      option.setAttribute('value', '');
      option.innerText = mode;
      selectElement.appendChild(option);
   }
   selectElement.addEventListener('change', () => {
      if (selectElement.selectedOptions[0].textContent === modes[modeIndex]) return;
      for (const index in selectElement) {
         const option = selectElement[index];
         if (option.selected) {
            modeIndex = index;
            checkToDisableButtons();
            break;
         }
      }
   });
   document.querySelector('.top').appendChild(selectElement);
}
function makeButtons(actions) {
   for (const action of actions) {
      const button = document.createElement('button');
      button.innerText = action.name;
      button.addEventListener('click', () => {
         action.click();
      });
      document.querySelector('.top').appendChild(button);
   }
}
// example @param  [ { name , min, max, default } ]
function makeSliders(sliders) {
   for (const object of sliders) {
      const slider = document.createElement('input');
      slider.type = 'range';
      slider.min = object.min;
      slider.max = object.max;
      slider.value = object.default;
      slider.id = object.name.split(' ').join('_');
      const span = document.createElement('span');
      span.innerText = object.name + ` [${slider.value}]`;
      slider.addEventListener('input', () => {
         span.innerText = object.name + ` [${slider.value}]`;
      });
      document.querySelector('.top').appendChild(span);
      document.querySelector('.top').appendChild(slider);
   }
}
