//Putting a question mark before the colon tells TS that the parameter is optional (it may be specified but it doesn't have to be).
function generateError(msg?: string) {
    throw new Error(msg);
}

generateError();

//Optional properties can also be setup.
type User = {
    name: string;
    age: number;
    role?: 'admin' | 'guest'
};

//Nullish coalescing (??)
let input = '';
//this boolean will check if the input is null or undefined. If it finds null or undefined, then the value on the right side (false) is returned.  
const didProvideInput = input ?? false;