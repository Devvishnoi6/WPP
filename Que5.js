//Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.

function removecharacter(str, char){
 first = str.substring(0,char);
 second = str.substring(char+1 , str.length);
 return (first + second);
}

console.log(removecharacter("Taruanshi" , 0));
console.log(removecharacter("Dev" , 1));
console.log(removecharacter("kaku" , 3));