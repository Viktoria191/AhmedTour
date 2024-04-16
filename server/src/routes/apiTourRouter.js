const express = require("express");

const multer = require("multer");
const { Tour, PhotoTour } = require("../../db/models");
// const upload = require("../middlewares/multerMid");

const apiTourRouter = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads");
  },
  filename(req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}`);
  },
});

apiTourRouter
  .route("/")
  .get(async (req, res) => {
    //   const { regionId } = req.query;
    //   console.log(regionId, 'in /');
    try {
      const AllTours = await Tour.findAll({
        // where: { regionId },
        include: [PhotoTour],
      });
      // console.log(AllTours);
      return res.json(AllTours);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  })
  .post(async (req, res) => {
    try {
      if (!req.body) return res.status(500).json({ message: "Empty reqbody" });
      // console.log(req.body);
      // console.log(req.file);
      const { name, body, price, regionId } = req.body;

      // photoTourId = Создаешь PhotoTours и кладешь в img1,2,3,4 -> req.files

      const newProduct = await Tour.create({
        regionId,
        name,
        body,
        price,
      });

      return res.status(201).json(newProduct);
    } catch (error) {
      return res.status(500).json(error);
    }
  });

apiTourRouter.delete("/:id", async (req, res) => {
  await Tour.destroy({ where: { id: req.params.id } });
  res.sendStatus(200);
});

apiTourRouter
  .route("/:id")
  .get(async (req, res) => {
    const { id } = req.params;
    // console.log(id);
    try {
      const regionId = await Tour.findAll({
        where: { regionId: id },
        include: [PhotoTour],
      });

      res.json(regionId);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  })
  .put(async (req, res) => {
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

apiTourRouter.route("/:id").get(async (req, res) => {
  const { id } = req.params;
  // console.log(id);
  try {
    const regionId = await Tour.findAll({
      where: { regionId: id },
      include: [PhotoTour],
    });
    // console.log(regionId);
    res.json(regionId);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
// apiTourRouter.post(
//   "/upload",
//   upload.array("photosTour", 4),
//   async (req, res, next) => {
//     // try{
//     //   if(req.file){
//     //     res.json(req.file)
//     //   }
//     // }catch (error){
//     //   console.log(error);

//     // }
//     await PhotoTour.create({
//       title: req.body.title,
//       status: req.body.status === "on",
//     });
//     // const photo = await PhotoTour.findOne({where:{title: req.body.title}, attributes: ['id']})
//   }
// );

apiTourRouter
  .route("/more/:id")
  .get(async (req, res) => {
    const { id } = req.params;
    console.log(id);
    try {
      const tourId = await Tour.findAll({
        where: { id },
        include: [PhotoTour],
      });
      console.log(tourId);
      res.json(tourId);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  })
  .patch(async (req, res) => {
    try {
      const tour = await Tour.findByPk(req.params.id);
      await tour.update(req.body);
      const newTour = await Tour.findByPk(tour.id);
      res.json(newTour);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  });

apiTourRouter.route("/updateplaces/:id").patch(async (req, res) => {
  
  const tour = await Tour.findByPk(req.params.id);
  console.log(req.params.id , '-----------123');
  await tour.update({ currentPlace: tour.currentPlace - 1 });
  res.status(200).json(tour);
});

module.exports = apiTourRouter;
