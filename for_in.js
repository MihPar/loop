const { readFile } = require("node:fs/promises");

/* 
  simple for...in 
*/
// async function getObjectKeys() {
//   const fileName =
//     "/Users/mihailparamonov/Downloads/JSON.exerceses/www.geeksforgeeks.org.har";
//   const data = await readFile(fileName, "utf8");
//   const obj = JSON.parse(data);
//   const arr = [];
//   for (const elem in obj.log.entries[0]) {
//     arr.push(elem);
//   }
//   console.log(arr);
// }
// getObjectKeys();

/*
  Object.keys() is a better alternative
 */
// async function getObjectKeys() {
//   const fileName =
//     "/Users/mihailparamonov/Downloads/JSON.exerceses/www.geeksforgeeks.org.har";
//   const data = await readFile(fileName, "utf8");
//   const obj = JSON.parse(data);
//   console.log(Object.keys(obj.log.entries[0]));
// }
// getObjectKeys();

/*
  side effect of for...in
*/

const obj = { name: "Pete" };
obj.__proto__.greeting = "Hello world";
// for (let elem in obj) {
//   console.log(elem);
// }
for (let key of Object.keys(obj)) {
  console.log(key);
}
