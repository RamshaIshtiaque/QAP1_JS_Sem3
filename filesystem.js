//The Node.js file system module allows you to work with the file system on your computer.

const fs = require('fs');

//Reads the file and returns the content
fs.readdir('./' , function(err, files){
    if (err) console.log('Error' , err);
    else console.log('Results' , files);
})

//Creates a new file
fs.appendFile('mynewfile.txt', 'Hello content!', function (err) {
    if (err) console.log('Error' , err);
    else console.log('New file saved!');
  });


//Delete a file
fs.unlink('mynewfile.txt', function (err) {
    if (err) console.log('Error' , err);
    else console.log('File deleted!');
  });

