let fs = require("fs");

//Blocking code
function readFileSync(){
    console.log("start");
    let content = fs.readFileSync("./data/content1.txt","utf-8");
    console.log(content);
    console.log("End");
}
readFileSync();
//Non Blocking code
function readFileAsync(){
    console.log("start");
    fs.readFile("./data/content1.txt","utf-8",(error,result)=>{
        if(error){
            console.log("Error in reading file");
        }else{
            console.log("Content :-",result);
        }
    });
    console.log("End");
}
console.log("------------------");
readFileAsync();
