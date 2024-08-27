//Write a JavaScript program to calculate the days left before Christmas.

today = new Date();

let Christmas = new Date(today.getFullYear(), 11, 25);

if(today.getMonth() == 11 && today.getDate() > 25){
    Christmas.setFullYear(Christmas.getFullYear() + 1);
}

let oneday = 1000*60*60*24;

console.log(Math.ceil((Christmas.getTime() - today.getTime()) / (oneday)) + "days are left for christmas!");