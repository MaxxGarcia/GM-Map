const mongoose = require("mongoose");
const { Schema } = mongoose;

const mapSchema = new Schema({
    userName: {type: String, require: true},
    mapName: {type: String, require: true},
    pins: {
        
    }
});

module.exports = mongoose.model("Showtunes", songSchema)