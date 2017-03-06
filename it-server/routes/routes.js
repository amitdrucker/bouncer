/**
 * Created by druker on 2/21/2017.
 */

var fs = require('fs');

// create a rolling file logger based on date/time
const opts = {
    logDirectory: './logs',
    fileNamePattern: 'roll-<DATE>.log',
    dateFormat: 'YYYY.MM.DD'
};

const log = require('simple-node-logger').createRollingFileLogger(opts);
var appRouter = function (app) {
    app.get("/", function (req, res) {
        res.send("it-server");
    });
    app.get("/rules", function (req, res) {
        console.log('recieved request');
        fs.readFile('./rules/global.json', function (err, data) {
            if (err) {
                throw err;
            }
            return res.send(JSON.parse(data));
        });
    });
    app.post("/report", function (req, res) {
        log.info(req.body.message);
        return res.send(req.body);
    });

};

module.exports = appRouter;
