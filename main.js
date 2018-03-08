console.log("Loading a module");
// notice that require returns the whole script. Meaning the whole script runs before main.js can continue.
let mod = require("./mod");
console.log("Mod: ", mod);
console.log("Done");


// Now using the file System module 
let fs = require("fs");
// The file encoding type has to be specified otherwise the buffer is returned.
fs.readFile("./ELEN4010.txt", 'utf-8', (err, data) => {
    if (err) throw err;
    
    console.log(data);    
})