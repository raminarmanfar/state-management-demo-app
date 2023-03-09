const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const _ = require("lodash");
const {v4: uuid} = require("uuid");

const app = express();

app.get("/api/invoice", (req, res) => {
    const invoice = {
        firstname: "Hans",
        lastname: "Müller",
        email: "hans.mueller@gmail.com",
        phoneNumber: "017212345678",
        address: "Dr. Hans Str. 65, 94032 Passau"
    };

    res.json(invoice);
});

app.listen(3000, () => console.log("Mock API servier is running on the port number 3000..."));
