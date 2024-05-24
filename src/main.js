const express = require("express");
const path = require("path");
const userUtils = require('./userUtils.js')

const app = express();
app.set("view engine", "hbs");
app.set('views', path.join(__dirname, '/views'));
app.use("/", express.static(path.join(__dirname, '/static')));

app.use("/rights", function (request, response) {
    const username = request.query.username
    const rights = userUtils.getUserRights(username).join(", ")

    response.render("rights.hbs", {
        username,
        rights
    });
});
app.listen(3010);
