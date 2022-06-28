const express = require("express");
const cors =require('cors')


const app = express();
app.use(cors())
app.use(express.json())  
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h2>Hola world</h2>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
