const express = require('express');
const app = express();

app.use(express.static('public'));
app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + "/" + "index.html");
})

app.get('/launch.html', function (req, res) {
    res.sendFile(__dirname + "/" + "launch.html");
})

const server = app.listen(8080, function () {
    const host = server.address().address;
    const port = server.address().port;

    console.log("Allergy app listening at http://%s:%s", host, port)
});