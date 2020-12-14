'use strict';
const Object = require('./object');
module.exports = class State {
   constructor(state) {
      this.objects = state.objects;
      this.undoCheck = false;
   }
   merge(newState) {
      const objects = [...this.objects, ...newState.objects];
      return new State({ objects });
   }
   static empty() {
      return new State({ objects: [] });
   }
};
