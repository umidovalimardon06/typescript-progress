interface User {
    name: string
    age?: number // optional member
    id:number
    email:string
}

let john:User = {name:'Alimardon',id:1,email:'@mail.com'}
console.log(john);

export interface Login{  // export makes it usable outside the class
    Login():boolean
}




