const express = require('express');
const {Region} = require('../../db/models'); 



const apiRegionRouter = express.Router();

apiRegionRouter
.route('/')
.get(async (req,res) => {
    try{
        const AllRegions = await Region.findAll()
        // console.log(AllRegions, '--------------');
        return res.json(AllRegions)
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
      }
})

module.exports = apiRegionRouter