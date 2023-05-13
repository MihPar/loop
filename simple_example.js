const { readFile } = require("node:fs/promises");

/*
    C-like for loop
*/
// async function findUniqueResourseType() {
//   const fileName =
//     "/Users/mihailparamonov/Downloads/JSON.exerceses/www.geeksforgeeks.org.har";
//   const data = await readFile(fileName, "utf8");
//   const obj = JSON.parse(data);
//   //   console.log(obj.log.entries.length);
//   const set = new Set();
//   for (let i = 0; i < obj.log.entries.length; i++) {
//     // console.log(obj.log.entries[i]._resourceType);
//     set.add(obj.log.entries[i]._resourceType);
//   }
//   console.log(set.size);
//   // const arr = [...set];
//   const arr = Array.from(set);
//   console.log(arr.sort());
// }
// findUniqueResourseType();

/*
    for...of loop
    (recommended in this case)
*/
async function findUniqueResourseType() {
  const fileName =
    "/Users/mihailparamonov/Downloads/JSON.exerceses/www.geeksforgeeks.org.har";
  const data = await readFile(fileName, "utf8");
  const obj = JSON.parse(data);
  const set = new Set();
  for (const elem of obj.log.entries) {
    set.add(elem._resourceType);
  }
  console.log(set.size);
  const arr = Array.from(set);
  console.log(arr.sort());
}
findUniqueResourseType();
