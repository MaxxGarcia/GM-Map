const mongoose = require("mongoose");
const { Schema } = mongoose;

const mapSchema = new Schema({
    userName: {type: String, require: true},
    mapName: {type: String, require: true},
    map: {data: Buffer, type: String},
    pins: {
        
    }
});

module.exports = mongoose.model("dm-maps", mapsSchema)