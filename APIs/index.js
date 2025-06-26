let express = require("express");
let bodyParser = require("body-parser");
const connection = require("./connection.js");

let app = express();
app.use(bodyParser.json()); //Convert incoming data into json

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.get("/", (req, resp) => {
  resp.send("Hello World!");
});
app.get("/api/category", (req, resp) => {
  connection.query(
    "SELECT id, cate_name, description, is_enable FROM master_category",
    (err, result) => {
      if (err) {
        resp.status(400).json({ msg: "Error in sql" });
      } else {
        resp.status(200).json({ msg: result });
      }
    }
  );
});
/*
 @Create By: Gautam
 @Created On: 25/06/2025
 @Objective: This API will fetch single record by getting id from URL or query string
*/
app.get("/api/category/:id", (req, resp) => {
  let id = req.params.id; //Fetching id from query string
  connection.query(
    `SELECT id, cate_name, description, is_enable FROM master_category WHERE id = ${id}`,
    (err, result) => {
      if (err) {
        resp.status(400).json({ msg: "Error in sql" });
      } else {
        resp.status(200).json({ msg: result });
      }
    }
  );
});

app.post("/api/category", (req, resp) => {
  let body = req.body;
  if (!body.cate_name) {
    return resp.status(404).json({ msg: "Mandatory field is missing" });
  } else {
    connection.query(
      `INSERT INTO master_category (cate_name, description, is_enable) VALUES ('${body.cate_name}','${body.description}','${body.is_enable}')`,
      (error, result) => {
        if (error) {
          return resp.status(400).json({ msg: "Error in SQL!" });
        } else {
          return resp
            .status(200)
            .json({ msg: "One record inserted successfully!" });
        }
      }
    );
  }
});
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.delete("/api/category/:id",(req,resp)=>{
  let id = req.params.id;
  if(!id){
    return resp.status(404).json({msg: 'Error: id is missing!'});
  }else{
    connection.query(`DELETE FROM master_category WHERE id = ${id}`,(err,result)=>{
      if(err){
        return resp.status(400).json({msg: 'Error in SQL!'});
      }else{
        return resp.status(200).json({msg: `One record deleted with id ${id}`});
      }
    })
  }
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
