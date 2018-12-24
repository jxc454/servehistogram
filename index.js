const fs = require('fs')
const express = require('express')
const app = express()
const port = 3000

const datafileName = "/tmp/udpHistogram.json"

app.get('/', nocache, sendData);

app.listen(port, () => console.log(`Node listening on port ${port}`))

function nocache(req, res, next) {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    next();
}

function sendData(req, res) {
    const datafileName = "/tmp/udpHistogram.json"
    var mimeType = '';
    fs.readFile(datafileName, 'utf8', function (err, contents) {
        if (!err && contents) {
            res.header('Content-Type', mimeType);
            res.header('Content-Length', contents.length);
            res.end(contents);
        } else {
            res.writeHead(500);
            res.end();
        }
    });
}