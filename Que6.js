//Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.

function multipleof3and7(x){
    if(x%3===0 && x%7 ===0){
        return true;
    }
    else{
        return false;
    }
}

console.log(multipleof3and7(21));
console.log(multipleof3and7(60));
console.log(multipleof3and7(49));