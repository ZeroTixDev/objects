'use strict';
require('./style.css');
const Object = require('./object');
const State = require('./state');
const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
const modes = ['create', 'move'];
const topPadding = 25;
makeDropdown(modes);
resizeCanvas(canvas);
let tick = 0;
let tempObject = null;
let replaying = false;
let showSettings = false;
let states = [];
let modeIndex = 0;
states.push(State.empty());
render(states[tick]);
window.addEventListener('resize', () => {
   resizeCanvas(canvas);
   render(states[tick]);
});
window.addEventListener('mousedown', mouseDrag);
window.addEventListener('mousemove', mouseMove);
window.addEventListener('mouseup', endDrag);
window.addEventListener('keyup', keyActions);
let drag = false;
let selecting = false;
let originX = 0;
let originY = 0;
function mouseDrag(event) {
   if (!drag && !replaying && !showSettings) {
      drag = true;
      originX = event.pageX;
      originY = event.pageY - topPadding;
      tempObject = new Object(Math.round(originX), Math.round(originY), 1, 1);
      render(states[tick]);
   }
}
function mouseMove() {
   if (drag && !replaying && !showSettings) {
      if (
         tempObject != null &&
         (event.pageX - originX !== tempObject.width || event.pageY - topPadding - originY !== tempObject.height)
      ) {
         tempObject.width = Math.round(event.pageX - originX);
         tempObject.height = Math.round(event.pageY - topPadding - originY);
         render(states[tick]);
      }
   }
}
function endDrag() {
   if (replaying || showSettings) return;
   drag = false;
   if (modes[modeIndex] === 'create') {
      tick++;
      states[tick] = states[tick - 1].merge({
         objects: [tempObject],
      });
      tempObject = null;
   }
   if (modes[modeIndex] === 'move') {
      selecting = true;
      for (const object of [...states[tick].objects]) {
         if (tempObject.inside(object)) {
            object.selected = true;
         }
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
         ctx.font = '50px Arial';
         ctx.fillStyle = 'black';
         ctx.fillText('S for settings', canvas.width / 2, canvas.height / 2 - 200);
         ctx.fillText('R for replay', canvas.width / 2, canvas.height / 2 - 100);
         ctx.fillText('C for clear', canvas.width / 2, canvas.height / 2);
         ctx.fillText('Space for spawn objects', canvas.width / 2, canvas.height / 2 + 100);
         ctx.fillText('H for clear history', canvas.width / 2, canvas.height / 2 + 200);
      }
   });
}
function spawnRandomObjects() {
   if (replaying || showSettings || modes[modeIndex] !== 'create') return;
   const objects = [];
   for (let i = 0; i < 5; i++) {
      tick++;
      objects.push(
         new Object(
            Math.round(Math.random() * canvas.width),
            Math.round(Math.random() * canvas.height),
            Math.round(Math.random() * (Math.random() * 600 + 100)),
            Math.round(Math.random() * (Math.random() * 600 + 100))
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
   render(states[tick]);
   const start = Date.now();
   const replayRate = 10;
   let lastTick = tick;
   function replay() {
      const expectedTick = Math.ceil((Date.now() - start) * (replayRate / 1000));
      while (tick < expectedTick) {
         if (tick >= maxTick) {
            replaying = false;
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
      if (modes[modeIndex] === selectElement.selectedOptions[0].textContent) return;
      modeIndex++;
      modeIndex = modeIndex % modes.length;
   });
   document.body.appendChild(selectElement);
}
