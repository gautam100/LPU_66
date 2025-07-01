let express = require("express");
let mongoose = require("mongoose");

let app = express();
let PORT = 3000;

mongoose
  .connect("mongodb://127.0.0.1/node2025")
  .then(() => console.log("Mongo Database Connected"))
  .catch((err) => console.log("Error in connection!"));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.get("/", (req, resp) => {
  resp.send("<h1>Hello world</h1>");
});

// Define the schema
const categorySchema = new mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    is_enable: {
      type: String,
    },
  },
  { timestamps: true }
);

// model
const Category = mongoose.model("category", categorySchema);

//Middleware
app.use(express.urlencoded({ extended: false }));

app.get("/category", async (req, resp) => {
  const categoryList = await Category.find({});
  let html = `
    <table align='center' border='1' cellpadding='2'>
        <thead>    
            <tr>
                <th width='25%'>Category Name</th>
                <th width='50%'>Description</th>
                <th width='25%'>Is Enable</th>
            </tr>
        </thead>
        <tbody>
        ${categoryList
          .map(
            (Category) => `{
            <tr>
                <td>${Category.categoryName}</td>
                <td>${Category.description}</td>
                <td>${Category.is_enable}</td>
            </tr>
            }`
          )
          .join("")}
        </tbody>
    </table>
    `;
  console.log(categoryList);
  resp.send(html);
});
// Fetch All Records
app.get("/api/category", async (req, resp) => {
  const categoryList = await Category.find({});
  if (!categoryList) {
    return resp.status(400).json({ msg: "Error in Server" });
  }
  return resp.status(200).json({ msg: categoryList });
});

//Fetch single Record
app.get("/api/category/:id", async (req, resp) => {
  const id = req.params.id;
  const category = await Category.findById(id);
  if (!category) {
    return resp.status(400).json({ msg: "Error in Server" });
  }
  return resp.status(200).json({ msg: category });
});
//Insert document into collections
app.post("/api/category", async (req, resp) => {
  let body = req.body;
  //Check validation
  if(!body.categoryName){
    return resp.status(400).json({msg:"Mandatory field is missing!"})
  }
  //Insertion
  const result = await Category.create({
    categoryName: body.categoryName,
    description: body.description,
    is_enable: body.is_enable,
  });
  //Response message
  if(result){
    return resp.status(200).json({msg:"One Record inserted successfully!"})
  }else{
    return resp.status(500).json({msg:"Error in insertion!"})
  }
});

//Modify Document
app.patch("/api/category/:id",async(req,resp)=>{
  await Category.findByIdAndUpdate(req.params.id,{description: 'some new description'});
  return resp.status(200).json({msg:"One Record modified successfully!"})
})

//Delete Document
app.delete("/api/category/:id",async(req,resp)=>{

})
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.listen(PORT, () => {
  console.log("Application is running on port 3000");
});
