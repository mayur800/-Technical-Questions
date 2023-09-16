// Q 2(1) string is palindrome or not

function isPalindrome(str) {
  var rev="";
  for(var i=str.length-1; i>=0; i--){
      rev+= str[i];
  }
  if(rev==str){
      return true
  } else{
      return false;
  }
}

var str1 = "anna";
console.log(isPalindrome(str1));



//Q 2(2)

var string = "india";
var string1 = string.split('');
var string2 = string1.reverse();
var string3 = string2.join('');
if (string == string3) {
    console.log(`${string} is palindrome Its True`);
}
else {
    console.log(`${string} string false`);
}
