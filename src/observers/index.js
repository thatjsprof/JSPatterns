import "./analytics.js";
import observer from "./observer.js";

setTimeout(() => {
  observer.nofity({ email: "david.ajayi.anu@gmail.com", password: "password" });
}, 1000);

// Some notes on Observers pattern
// - Seperation of concerns. The observer objects aren't tightly coupled to the observable and can be decoupled at anytime. Observers simply handle the data they receive
// - Decreased Performance - Notifying all observers might take too long (maybe we could have a priority system, or use a queue system to handle events, Promise.all) especially if observer handling logic becomes too complex or there are too many subscribers
