fs = require("fs");

courseCode = "ELEN.txt";
dolor = require("dolor");

randomText = dolor.paragraphs(2);

fs.writeFile('ELEN', randomText, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});