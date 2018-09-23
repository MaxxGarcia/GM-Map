const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
require("dotenv").config();
const expressJWT = require("express-jwt");
const PORT = 8080;
const MONGODB_URI = 'mongodb://localhost:27017/showtunes';
const app = express();

app.use(bodyParser.json())
    .use(multer({ dest: `./uploads/`, rename: function (fieldname, filename) {
      return filename;
    },
   }))
    .use("/user", expressJWT({ secret: process.env.SECRET }))
    .use(bodyParser.urlencoded({ extended: false }))
    .use("/user/maps", require("./routes/maps"))
    .use((err, req, res, next) => {
        res.status(400).send(err)
    });

mongoose.connect(MONGODB_URI, { useNewUrlParser: true})
    .then((db) => console.log("DB is Online"))
    .catch(err => console.log(err));
    
app.listen(PORT, () => console.log(`Connected to dm-maps-server on ${PORT}`));