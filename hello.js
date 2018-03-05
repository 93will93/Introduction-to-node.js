console.log("hello World!");
let test;
console.log("test =", test, "test is a", typeof test);
test = true;
console.log("test =", test, "test is a", typeof test);
test += 5;
console.log("test =", test, "test is a", typeof test);
test += "test";
console.log("test =", test, "test is a", typeof test);


let person = {}; //An empty object
person.name = "Joe";
person.surname = "Soap";
person.age = "20";
person.isMale = true;
person.fullname = person.name + " " + person.surname; //we can access the
//variables using their names
console.log(person);

// FUNCTIONS
let someFunction = function (someArgument, anotherArgument) {
//do stuff
    return someArgument + anotherArgument;
}

let copyOfFunction = someFunction; //Javascript assigns by reference
let anotherFunction = function(aFunction){
    return aFunction("Hello", "World"); //Calling the passed in function
}
let result = anotherFunction(copyOfFunction);
console.log(result);
