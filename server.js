import express from 'express';

const app = express();

app.get('/', function (request, response) {
    response.send(`node.js version is ${process.version}`);
});

var port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log("Listening on " + port);
});
