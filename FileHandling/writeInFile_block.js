let fs = require("fs"); //system package
var readlineSync = require('readline-sync');// External Package

let content = readlineSync.question('Enter Content:-');

function writeInFileSync(){
    console.log("Start");
    fs.writeFileSync("./data/content1.txt",content);
    console.log("End");
}

function writeInFileAsync(){
    console.log("Start");
    fs.writeFile("./data/content2.txt",content,(error,result)=>{
        if(error){
            console.log("Error in writing!",error)
        }else{
            console.log("Successfully completed");
        }
    });
    console.log("End");
}

writeInFileSync();

writeInFileAsync();

