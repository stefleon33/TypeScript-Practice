//special types

let a: null | string;
//null means that a can be set to null but nothing else. 
//null is helpful when combined with other types, like union types. 'a' can be set to a string or null for example. 
//Example of when this would be useful is when the variable has a value but then is cleared. 
a = 'hi!';

a = null;


let b: undefined | string;
//undefined means the variable can hold a string or the value undefined. 

//Type Casting is also known as a type assertion. It converts some type to another type. This is done with the 'as' operator.
const inputEl = document.getElementById('user-name') as HTMLInputElement | null;

console.log(inputEl?.value);