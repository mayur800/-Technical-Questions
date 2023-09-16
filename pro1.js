// Q 1 number without third variable

let a1="geeksforgeeks";
let ch1="e";
let count1=0;
for(let i=0;i<=a1.length;i++){
    if(a1.charAt(i)==ch1){
        count1++;
    }
    
}
console.log(`count the number of a is ${count1}`);


//Q 1(2)

let a="abccdefgaa";
let ch="a";
let count=0;
for(let i=0;i<=a.length;i++){
    if(a.charAt(i)==ch){
        count++;
    }
    
}
console.log(`count the number of a is ${count}`)
