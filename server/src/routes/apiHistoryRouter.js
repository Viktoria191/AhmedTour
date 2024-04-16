const express = require("express");
const { History, Tour, User } = require("../../db/models");
const verifyAccessToken = require("../middlewares/verifyAccessToken");
// const verifyAccessToken = require("../middlewares/verifyAccessToken");

const apiHistoryRouter = express.Router();

apiHistoryRouter.route("/").get(async (req, res) => {
  try {
    const allToursWuthUser = await History.findAll({
      include: [
        {
          model: Tour,
        },
        {
          model: User,
        },
      ],
      // where: { tourId: req.params.id },
    });
    console.log(allToursWuthUser, "----");
    res.json(allToursWuthUser);
  } catch (error) {
    console.log(error);
  }
});

apiHistoryRouter.post("/:id", verifyAccessToken, async (req, res) => {
  const {id} = req.params;
  console.log("12324", id);
  try {
    const history = await History.create({
      tourId:id,
      userId: res.locals.user.id,
    });
    const historyTour = await History.findOne({
      where: { id: history.id },
      include: [
        {
          model: User,
        },
        {
          model: Tour,
          where: { id: history.tourId },
        },
      ],
    });
    console.log(historyTour);
    res.status(201).json(historyTour);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = apiHistoryRouter;
