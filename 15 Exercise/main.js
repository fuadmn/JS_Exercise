

console.log("Properties and values of each person");

// const people = [
//   { name: "Alice", age: 25, city: "Wnderland" },
//   { name: "Bo", age: 30, city: "Builerland" },
//   { name: "Charlie", age: 35, city: "Choocolate Factory" },
// ];

const people1 = { name: "Alice", age: 25, city: "Wonderland" };
for (const key in people1) {
    console.log(key + ": " + people1[key]);
}

console.log('-------')

const people2 = { name: "Bo", age: 30, city: "Builerland" };
for (const key in people2) {
    console.log(key + ": " + people2[key]);
}

console.log('-------')

const people3 = { name: "Charlie", age: 35, city: "Choocolate Factory" };
for (const key in people3) {
    console.log(key + ": " + people3[key]);
}
