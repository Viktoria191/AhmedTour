const express = require("express");
const { Comment, User } = require("../../db/models");
const verifyAccessToken = require("../middlewares/verifyAccessToken");
const checkAuthor = require("../middlewares/checkAuthor");

const apiCommentrouter = express.Router();

apiCommentrouter
  .route("/:id")
  .get(async (req, res) => {
    const notes = await Comment.findAll({
      include: User,
      where: { tourId: req.params.id },
    });
    res.json(notes);
  })
  .delete(verifyAccessToken,async (req, res) => {
    const { id } = req.params;
    try {
      await Comment.destroy({ where: { id } });
      res.sendStatus(200);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  })
  .post(verifyAccessToken,async (req, res) => {
    const { body } = req.body;
    const newPost = await Comment.create({
      text: body,
      userId:res.locals.user.id,
      tourId: req.params.id,
    });
    const sendedComment = await Comment.findOne({
      include: User,
      where: { id: newPost.id },
    });
    res.json(sendedComment);
  });
module.exports = apiCommentrouter;
