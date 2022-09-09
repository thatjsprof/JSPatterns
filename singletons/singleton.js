let instance;

class Counter {
  constructor() {
    this.counter = 0;

    if (instance) {
      throw new Error("You can only create one instance of this class");
    }

    instance = this;
  }

  instanceOf() {
    return this;
  }

  getCount() {
    return this.counter;
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}

const singletonClass = Object.freeze(new Counter());

module.exports = singletonClass;
