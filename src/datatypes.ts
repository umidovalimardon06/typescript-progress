// 1.string
let firstname:string; // type-inference
firstname='John';
let size = firstname.length;
let upper = firstname.toUpperCase();
console.log(size);
console.log(upper);

// 2.number
let two = parseInt("2");
console.log(typeof two);

// 3.boolean
let truth:boolean;
truth=true;
console.log(truth);

// 4.array
let emptyList:string[];
emptyList = ['Santos','Silva'];
let numList:Array<number>;
numList = [1,2,3,4,5,6,7,8,9,24,25,36,67,85,23];
let results = numList.filter((num)=>num>7);

console.log(results)

// 5.enum
enum Color {
    Red,
    Green,
    Blue
}

let pick:Color = Color.Blue;
console.log(pick);

// 6.tuple
let swapNumbers:[number,number];
function swap(num1:number,num2:number):[number,number]{
    return [num2,num1];
}
let swapped = swap(1,2);
console.log(swapped);







