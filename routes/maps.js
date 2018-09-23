const Maps = require("../models/maps");
const express = require("express");

const mapsRoutes = express.Router();

mapsRoutes.route("/")
    .get((req, res) => {
        Maps.find((err, maps) => {
            return err ? res.status(500).send(err) : res.status(200).send(maps)
        })
    })
    .post((req, res) => {
        let newMap = new Maps(req.body);
        newMap.user = req.user._id;
        newItem.img.data = fs.readFileSync(req.files.userPhoto.path);
        newItem.img.contentType = 'image/png';
        newMap.save((err, newMap) => {
            return err ? res.status(500).send(err) : res.status(201).send(newMap);
        })
    })

module.exports = mapsRoutes