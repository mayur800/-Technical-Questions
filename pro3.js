//Q 3(1) for maximum
let arr1 =[1,2,3,4,5];
let max = arr1[0];
for (let i = 1; i < arr1.length; ++i) {
  if (arr1[i] > max) {
    max = arr1[i];
  }
}

console.log(max);

// //Q 3(2) for minimum
let arr2 = [5,3,7,4,2];
let min = arr2[0];
for (let i = 1; i < arr2.length; ++i) {
  if (arr2[i] < min) {
    min = arr2[i];
  }
}

console.log(min);

//Q 3(2)

//In Javascript we use reduce method to solve this its take two argument previous and 
//current and we can solve this.
const a=[5,3,7,4,2];
const b=a.reduce((x,y)=>x>y?x:y);
const c=a.reduce((x,y)=>x<y?x:y);
console.log(`Maximum nimber is ${b}`);
console.log(`Minimum nimber is ${c}`);


