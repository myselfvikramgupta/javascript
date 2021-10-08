//string array
let arr=["Banana","Orange","Apple","Mango" ,"Graphs"];

// sort array in alphabetically ascending order 
//console.log(arr.sort());

//sort array in alphabetically descending order 
//console.log(arr.sort().reverse());

// Numeric array sort ascending order
let num=[2,15,25,400,300,95,55,65];

//console.log(num.sort());
//[15,2,25,300,400,55,65,95]; 
//wrong beacuse sort function by defualt sort array alphabetically ascending order 

/*
    if want to sort numeric value then fixe this by compare function
    the purpose of compare function is to be define a alternative sort order.
    compaire function return negative ,zero and positive value depending on arguments

    when sort() function compaire two value, it's send to the value compare function and short the value according to returened (negative ,zero and positive ) value.

*/


//correct output
//output [2,15,25,55,65,95,300,400] 

//console.log(num.sort((a,b) => a-b));
//output [2,15,25,55,65,95,300,400] ascending order

//console.log(num.sort((a,b) => b-a));
//output [400,300,95,65,55,25,15,2] descending order

let arr1=['-7',15,8,"40",36, -7,15];
//console.log(arr1.sort((a,b) => a-b));
//output ['-7',7,8,15,15,36,'40'];
//console.log(arr1.sort((a,b) => b-a));
//output ['40',36,15,15,8,'-7',-7];

let alphabet=['a','b','A','d','J','f'];
//console.log(alphabet.sort());
//output ['A','J','a','b','d','f]

let num_alpha=[2,"Apple","3",90,"Raja"];
//console.log(num_alpha.sort());
//output [2,'3',90,'Apple','Raja']

//shift all even value in left side
let num1=[5,2,40,27,6,81,56];

//shift even
//console.log(num1.sort((a,b)=>(a%2)-(b%2)));

//shift odd
//console.log(num1.sort((a,b)=>(b%2)-(a%2)));

//max and min value from array
let max_min=[4,80,25,46,100,98,70,3];
max_min.sort((a,b)=>a-b);
// console.log(`Min value ${max_min[0]}`)
// console.log(`Max value ${max_min[max_min.length-1]}`)

//Short array without sort function

let arr2=[50,24,6,40,47,26];

for (let i = arr2.length - 1; i >= 0; i--) {
    let j=Math.floor(Math.random()*i);
    let k=arr2[i];
    arr2[i]=arr2[j];
   arr2[j]=k;
}
console.log(arr2);
