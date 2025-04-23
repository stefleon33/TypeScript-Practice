let userName: string;

userName = 'Max';

//Union type allows multiple types to be set. Better than using any
let userage : string | number = 37;

userage = 39;

userage = "Mike";


//Arrays and Types
let hobbies = ["sports" , "cooking"];

//TS recognizes that the above array has a type of string, will not allow a number to be pushed
//hobbies.push(10)

//Types can be explicilty set. If a new variable will be an array of strings, set it like this: 
let users: string[];

//If users (without the 2) was actually going to hold their username or their id, a union type could be used: 
let users2: (string | number)[];
users2 = [1, 'Max'];
users2 = [ 5, 1];
users2 = ['Anna', 'Max'];


//Another way to write the above code is to use a generic type (the Array type) with  < >
let users3: Array<string | number>;

//Use a Tuple type when you have a variable that you know should eventually accept an exact number of
//values with clearly defined types

let possibleResults : [number, number] //[1, -3]

//Object types can be set in TS nad the IDE will help with auto complete: 
let user4 : {
    name: string;
    age: number;
    hobbies: string[];
    role: {
        description: string;
        id: number;
    }
} = {
    name: "max",
    age: 28,
    hobbies: ['Sports', 'Cooking'],
    role: {
        description: 'admin',
        id: 10
    }
};

// In TS, {} as a type means any value that is not undefined or null
let val: {} = 'Some text';

// The Record Type tells TS that some value should be an object but it is a flexible type or kind of object.
// Record is a generic type that needs additional information  
let data: Record<string, number | string>;

data = {
    entry1: 1,
    entry2: 'some string'
};