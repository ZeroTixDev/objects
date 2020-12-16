'use strict';
module.exports = class State {
   constructor(state) {
      this.objects = state.objects;
   }
   merge(newState) {
      return new State({ objects: [...this.objects, ...newState.objects] });
   }
   copy() {
      return new State({ objects: [...this.objects] });
   }
   unselect() {
      return new State({ objects: [...this.objects.map((object) => object.copy())] });
   }
   static empty() {
      return new State({ objects: [] });
   }
};
