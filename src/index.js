'use strict';
require('./style.css');
const Object = require('./object');
const State = require('./state');
const states = [];
const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
resizeCanvas(canvas);
states.push(State.empty());
let tick = 0;
let tempObject = null;
render(states[tick]);
window.addEventListener('resize', () => {
   resizeCanvas(canvas);
   render(states[tick]);
});
window.addEventListener('mousedown', mouseDrag);
window.addEventListener('mousemove', mouseMove);
window.addEventListener('mouseup', endDrag);
let drag = false;
let originX = 0;
let originY = 0;
function mouseDrag(event) {
   if (!drag) {
      drag = true;
      originX = event.pageX;
      originY = event.pageY;
      tempObject = new Object(originX, originY, 1, 1);
      render(states[tick]);
   }
}
function mouseMove() {
   if (drag) {
      if (event.pageX - originX !== tempObject.width || event.pageY - originY !== tempObject.height) {
         tempObject.width = event.pageX - originX;
         tempObject.height = event.pageY - originY;
         render(states[tick]);
      }
   }
}
function endDrag() {
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
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 4;
      for (const object of state.objects) {
         ctx.strokeRect(object.x, object.y, object.width, object.height);
      }
      if (tempObject != null) {
         ctx.strokeStyle = 'rgba(205, 205, 205, 0.8)';
         ctx.strokeRect(tempObject.x, tempObject.y, tempObject.width, tempObject.height);
      }
   });
}
function resizeCanvas(canvas) {
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
}
