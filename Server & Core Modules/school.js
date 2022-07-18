const EventEmitter = require("events");

class School extends EventEmitter {
  startPeriod() {
    console.log("Class Started");
    //raise event when bell rings
    // raise an event
    this.emit("bellRing", {
      period1: "first",
      text1: "period ended",
      period2: "second",
      text2: "period started",
    });
  }
}

module.exports = School;
