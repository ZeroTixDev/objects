'use strict';
module.exports = class State {
   constructor(state) {
      this.objects = state.objects;
   }
   merge(newState) {
      const objects = [...this.objects, ...newState.objects];
      return new State({ objects });
   }
   static empty() {
      return new State({ objects: [] });
   }
};
