// enum is specific to TS. Use the enum keyword and any name for that enum of your choice 
// Define different options for the enumb between the curly braces, seperated by a comma
enum Role { 
    Admin, 
    Editor,
    Guest
}

//let userRole: Role = 0;   Both ways are valid. The 0 calls to the index position. 
let userRole: Role = Role.Admin;

//Can update the value like so: 
userRole = Role.Guest;

//More popular alternative to enum is to use literal types (instead of general types). The admin,
// editor and guest are types here, not strings. Literal types are a type where you set very specific 
// values as types (strings, numbers, etc). Literals are usually used with union types.
let userRole1: 'admin' | 'editor' | 'guest' = 'admin';

// Type aliases or custom types. Useful when dealing with union types.
// The type specific word allows us to store a type definition under a cutsom name.
type Roles = 'admin' | 'editor' | 'guest' | 'reader';
//Roles can then be used throughout the rest of the code without having to repeat it or worry about changes that were made.
function access(role: Roles) {
    //...
}

//Also useful when dealing with object types because those may also be complex.
type Userss = {
    name: string;
    age: number;
    role: Roles;
    permissions: string[];
};
