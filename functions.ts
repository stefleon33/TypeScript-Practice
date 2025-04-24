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