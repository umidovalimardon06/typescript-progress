function getItemsArray<Type>(items:Type[]):Type[]{
    return Array<Type>().concat(items);
}

let result = getItemsArray([1,2,3,4,5]);
console.log(result);
console.log(typeof result);