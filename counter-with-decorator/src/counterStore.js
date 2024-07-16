import {action, computed, makeObservable, observable} from "mobx";

class counterStore {
  @observable count = 0;

  constructor() {
    makeObservable(this);
  }

  @computed get isNegative() {
    return this.count < 0 ? "Yes" : "No";
  }

  @action increase() {
    return this.count++;
  }

  @action decrease() {
    return this.count--;
  }
}

export default counterStore;