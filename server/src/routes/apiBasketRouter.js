const express = require('express');
const { Basket, Tour, PhotoTour } = require('../../db/models');
const verifyAccessToken = require('../middlewares/verifyAccessToken');


const apiBasketRouter = express.Router();

apiBasketRouter.route('/').post(verifyAccessToken, async (req, res) => {
  const { tourId } = req.body;

  try {
    const newBasket = await Basket.create({
      tourId,
      userId: res.locals.user.id,
    });
    res.json(newBasket);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
apiBasketRouter.route('/basket').get(verifyAccessToken, async (req, res) => {
  try {
    const AllTours = await Basket.findAll({
      where: { userId: res.locals.user.id },
      include: [
        {
          model: Tour,
          as: "Tour",
          include: [
            {
              model: PhotoTour,
            },
          ],
        },
      ],
    });
    return res.json(AllTours);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
apiBasketRouter.delete("/:id", async (req, res) => {
  console.log(req.params, '------------');
  await Basket.destroy({ where: { tourId: req.params.id } });
  res.sendStatus(200);
});

module.exports = apiBasketRouter;
