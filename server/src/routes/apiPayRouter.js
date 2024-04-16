const express = require("express");
const { User,Tour,PhotoTour } = require("../../db/models");
const verifyAccessToken = require("../middlewares/verifyAccessToken");

const apiPayRouter = express.Router();

apiPayRouter.post("/", verifyAccessToken, async (req, res) => {
  const userId = res.locals.user.id;
  const user = await User.findByPk(userId);
  await user.save();
});

apiPayRouter.put(async (req, res) => {
  try {
    const tour = await Tour.findByPk(req.params.id);

    await tour.update(req.body);
    const newTour = await Tour.findByPk(tour.id, {
      include: [PhotoTour],
    });


    res.json(newTour);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = apiPayRouter;
