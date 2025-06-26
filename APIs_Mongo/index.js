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

app.get("/category",async (req,resp)=>{
    const categoryList = await Category.find({});

    console.log(categoryList);
    resp.send(categoryList);

})


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.listen(PORT, () => {
  console.log("Application is running on port 3000");
});
