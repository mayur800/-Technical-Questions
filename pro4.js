// Q 4(1) in Javascipt ES6 we use destructring...
let a="Hello";
let b="world";
 a=a+b;
 b=a.substring(0,(a.length-b.length));
 a=a.substring(b.length);


console.log(a);
console.log(b);