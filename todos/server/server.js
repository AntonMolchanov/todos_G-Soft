const express = require('express');
const path = require('path');
const app = express();
require ('dotenv').config()
console.log(process.env)
const port = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(port,() => {
    console.log(`server started on port ${port}`)});