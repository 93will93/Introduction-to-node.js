console.log("Loading a module")
// notice that require returns the whole script. Meaning the whole script runs before main.js can continue.
let mod = require("./mod")
console.log("Mod: ", mod)
console.log("Done")
