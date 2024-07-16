import {action, computed, makeObservable, observable} from "mobx";

class countStore {
  count = 0;

  constructor() {
    makeObservable(this, {
      count: observable,
      isNegative: computed,
      increase: action,
      decrease: action
    })
  };

  get isNegative() {
    return this.count < 0 ? "Yes" : "No";
  };

  increase() {
    this.count++;
  };

  decrease() {
    this.count--;
  };
};

export default countStore;