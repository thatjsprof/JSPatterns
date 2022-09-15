const observers = [];

export default Object.freeze({
  nofity: (data) => observers.forEach((observer) => observer(data)),
  subscribe: (observer) => observers.push(observer),
  unsubscribe: (func) =>
    [...observers].forEach((observer, index) => {
      if (observer === func) {
        observers.splice(index, 1);
      }
    }),
});
