let cluster = require("cluster");
let os = require("os");
let express = require("express");

let app = express();

let cpus = os.cpus().length; //Checking total number of cores in CPU
console.log(cpus);

if (cluster.isPrimary) { 
  for (let i = 0; i < cpus; i++) {
    cluster.fork(); //initiating instatnce of node in workers
  }
} else {
  app.get("/", (req, resp) => {
    return resp.json({ msg: `Worker ${process.pid} started` });
  });
  app.listen(3000, () => console.log("Server is running on port 3000"));
}
