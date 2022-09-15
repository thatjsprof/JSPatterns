import observer from "./observer.js";

const sendToGoogleAnalytics = (data) => {
  console.log("Data sent to google analytics");
};

const sendToMixPanel = (data) => {
  console.log("Data sent to Mix Panel");
};

const sendToHotJar = (data) => {
  console.log("Data sent to Hot Jar");
};

observer.subscribe(sendToGoogleAnalytics);
observer.subscribe(sendToMixPanel);
observer.subscribe(sendToHotJar);
