'use strict';
module.exports = class State {
   constructor(state) {
      this.objects = state.objects;
   }
   merge(newState) {
      return new State({ objects: [...this.objects, ...newState.objects] });
   }
   static empty() {
      return new State({ objects: [] });
   }
};
