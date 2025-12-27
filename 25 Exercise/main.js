
// Spread  Operators

const mult = [1,2,4];

const multipl = [...mult,5,6,7];

console.log(multipl);


// rest Operators

function multiplay(...numbers){
    return numbers.reduce((total, multiplay) => total * multiplay,1)
}
console.log(multiplay(1,2,3,4));
