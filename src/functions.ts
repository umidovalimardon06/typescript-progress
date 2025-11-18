// 1
function add(num1:number,num2:number){
    return (num1+num2);
}
console.log(add(3,7))

// 2
const sub=
    (num1:number,num2:number):number => (num1-num2);

console.log(sub(3, 1));

// 3
const multiple =
    function (num1:number,num2:number):number{
        return num1*num2;
};

console.log(multiple(3, 4));

// 4 optional
function addOptional(num1:number,num2:number,num3?:number){
    return num3? (num1+num2+num3):num1+num2;
}

console.log("optional")
console.log(addOptional(3,7))
console.log(addOptional(3,7,1))

// 5 required
function addDef(num1:number,num2:number,num3=1){
    return num3? (num1+num2+num3):num1+num2;
}

console.log("required")
console.log(addDef(3,7))
console.log(addDef(3,7,2))

// 6 rest
function addRest(num1:number,num2:number,...num3:number[]){
    return num1+num2+num3.reduce((a,b)=>a+b,0);
}

console.log("rest")
console.log(addRest(3,71,1,1,1,1))
console.log(addRest(3,7,2,21,213,32,1))


