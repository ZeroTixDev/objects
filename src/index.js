'use strict';
require('./style.css');
const Object = require('./object');
const State = require('./state');
const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
resizeCanvas(canvas);
let tick = 0;
let tempObject = null;
let replaying = false;
let showSettings = false;
let states = [];
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
let originX = 0;
let originY = 0;
function mouseDrag(event) {
   if (!drag && !replaying && !showSettings) {
      drag = true;
      originX = event.pageX;
      originY = event.pageY;
      tempObject = new Object(originX, originY, 1, 1);
      render(states[tick]);
   }
}
function mouseMove() {
   if (drag && !replaying && !showSettings) {
      if (event.pageX - originX !== tempObject.width || event.pageY - originY !== tempObject.height) {
         tempObject.width = event.pageX - originX;
         tempObject.height = event.pageY - originY;
         render(states[tick]);
      }
   }
}
function endDrag() {
   if (replaying || showSettings) return;
   drag = false;
   tick++;
   states[tick] = states[tick - 1].merge({
      objects: [tempObject],
   });
   tempObject = null;
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
         ctx.fillRect(object.x, object.y, object.width, object.height);
         ctx.strokeRect(object.x, object.y, object.width, object.height);
      }
      if (tempObject != null) {
         ctx.strokeStyle = 'rgba(200, 0, 0, 0.8)';
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
   if (replaying || showSettings) return;
   const objects = [];
   for (let i = 0; i < 5; i++) {
      tick++;
      objects.push(
         new Object(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            Math.random() * (Math.random() * 600 + 100),
            Math.random() * (Math.random() * 600 + 100)
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
   canvas.height = window.innerHeight;
}
