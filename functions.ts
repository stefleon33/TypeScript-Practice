//Types can be added after the parameter list, before the curly brace. 
// This will be the type for the return value. In most cases, the return type does not need to be defined. 
function add(a:number, b: number): number{
    return a + b;
}

//void means that this function returns nothing. Typically don't need to set this. 
function log(message: string): void {
    console.log(message);
}

//special type offered by TS is 'never'. Never means that this function will never complete because it will throw an error.
// It will never contain a value.  
function logAndThrow(errorMessage: string): never {
    console.log(errorMessage);
    throw new Error(errorMessage);
}

const logMsg = (msg: string) => {
    console.log(msg);
};

//funcations as a whole can be a value type. You can store a function as a value as a variable and
//then pass a function as a value to another function. 
//cb is callback. TS offers a builtIn Function type but it's more useful to have the () => and then the expected type.
//Inside the (), you can specfiy the parameter(s) you expect the function to get. 
function performJob(cb: (msg: string, ) => void) {
    // ...
    cb('Job done!');
}

performJob(logMsg);

//Functions as a type can also be used like so: 
type User = {
    name: string;
    age: number;
    greet: () => string;
};
//Then, when a new user is created, a string will need to be passed to the greet function as a string to satisfy the type conditions. 
let user: User = {
    name: 'Max',
    age: 39,
    greet() {
        console.log("Hello there!");
        return this.name;
    }
}

user.greet();