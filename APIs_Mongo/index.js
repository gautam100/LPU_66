let express = require("express");
let mongoose = require("mongoose");

let app = express();
let PORT = 3000;

mongoose
  .connect("mongodb://127.0.0.1/node2025")
  .then(() => console.log("Mongo Database Connected"))
  .catch((err)=> console.log("Error in connection!"));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.get("/",(req,resp)=>{
    resp.send("<h1>Hello world</h1>");
})

// Define the schema


app.get("/users",async (req,resp)=>{
    const userList = await User.find({});

    console.log(userList);
    resp.send(userList);

})


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.listen(PORT, () => {
  console.log("Application is running on port 3000");
});
