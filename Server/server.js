// Built in module Does not require to init
const path = require('path');
const express = require('express');
const publicPath = path.join(__dirname, '../public');

var app = express();

app.use(express.static(publicPath));
const port = process.env.PORT || 3000;
app.listen(port,()=>{
  console.log(`Server is up on port ${port}` );
});
