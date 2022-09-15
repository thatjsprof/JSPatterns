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

let counter = 0;

const singletonObject = Object.freeze({
  increment: () => counter++,
  decrement: () => counter++,
});

module.exports = {
  singletonClass,
  singletonObject,
};

// Some notes on singletons
// - Modules in es6 are singletons by default
// - Restricting the instance of the class or object to just one instance can potentially save memory
// - Quite unnecessary since es6 modules are singletons by default we no longer need to explicitly create singletons
// - Dependency hiding. When importing another module we may not necessarily be aware that that module may be importing a singleton
// - Global scope pollution - They are similar to global variables and if a global variable is altered it may pollute the scope
// - Since we can't create another instance of the class or object, all test cases rely on the previous test
