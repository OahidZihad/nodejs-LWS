const people = ["zihad", "mehedi", "faizul"];

const a = 6;
function test() {
  console.log("this is test function");
}

// console.log(module);
module.exports = {
  people: people,
  a: a,
  test: test,
};
