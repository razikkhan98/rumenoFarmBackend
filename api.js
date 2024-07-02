const express = require('express');
const app = express();
const port = 2000; // You can change this port if needed
const cors = require("cors");

app.use(cors());

app.use(express.json());

app.post('/api/data', (req, res) => {
  console.log(req.body);
  const responseData = {
    name: 'admin',
    date: '7/7/2027',
    msg:"Success",
    userName:"admin",
    FarmName:"panel",
    pID:"",
    uID: "7",
    rId: "rId",
    sessionId: "sessionId"

  };
  res.json(responseData);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
