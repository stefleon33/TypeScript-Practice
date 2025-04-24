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