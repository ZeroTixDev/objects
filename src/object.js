'use strict';
module.exports = class Object {
   constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.selected = false;
   }
   get right() {
      return this.x + this.width;
   }
   get bottom() {
      return this.y + this.height;
   }
   get middle() {
      return { x: this.x + this.width / 2, y: this.y + this.height / 2 };
   }
   get left() {
      return this.x;
   }
   get top() {
      return this.y;
   }
   inside(x, y) {
      return x > this.left && y > this.top && x < this.right && y < this.bottom;
   }
   unselect() {
      return new Object(this.x, this.y, this.width, this.height);
   }
};
