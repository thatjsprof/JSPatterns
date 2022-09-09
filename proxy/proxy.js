const person = {
  name: "David",
  age: 10,
};

const personProxy = new Proxy(person, {
  get: (target, property) => {
    return Reflect.get(target, property);
  },
  set: (target, property, value) => {
    return Reflect.set(target, property, value);
  },
});
