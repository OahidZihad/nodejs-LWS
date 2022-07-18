const _ = require("lodash");
const people = require("./people");
// console.log(_.last([1, 2, 3]));

// console.log(global);
// console.log(__dirname);
// console.log(__filename);

// console.log(people);
// people.test();

// console.log(_.last(people.people));

// CORE MODULES --> PATH
// const path = require("path");
// const myPath = "E:/zihad-nodejs/index.js";
// console.log(path.basename(myPath));
// console.log(path.dirname(myPath));
// console.log(path.extname(myPath));
// console.log(path.parse(myPath));

// CORE MODULES --> OS
// const os = require("os");
// console.log(os.type());
// console.log(os.freemem());
// console.log(os.hostname());
// console.log(os.version());
// console.log(os.cpus());

// CORE MODULES --> FS
// const fs = require("fs");
// //file write
// fs.writeFileSync("myFile.txt", "hellow programmers");
// fs.appendFileSync("myFile.txt", " how are you?");
// //file read
// fs.readFile("myFile.txt", (err, data) => {
//   console.log(data.toString());
// });

// CORE MODULES --> EVENTS
const EventEmitter = require("events");
const emitter = new EventEmitter();
//register a listener for bellring event
emitter.on("bellRing", ({ period1, period2, text1, text2 }) => {
  console.log(
    `We need to run becuase ${period1} ${text1}, ${period2} ${text2}`
  );
});
// raise an event
emitter.emit("bellRing", {
  period1: "first",
  text1: "period ended",
  period2: "second",
  text2: "period started",
});
