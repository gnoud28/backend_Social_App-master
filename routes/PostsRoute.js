var express = require("express");
var router = express.Router();
const controller = require("../controllers/PostsController");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const { cloudinary } = require("../config/SetupClouldinary");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "ASSAngular",
    format: "png",
  },
});

const upload = multer({ storage });

router.get("/", controller.getAllPosts);
router.get("/get-for-user/:uid", controller.getForUser);
router.get("/detail-posts/:postsId", controller.detailPosts);
router.post(
  "/create-new-posts/:uid",
  upload.single("image"),
  controller.createPosts
);
router.put("/update-posts/:uid/:postsId", controller.updatePosts);
router.delete("/delete-posts/:uid/:postsId", controller.deletePosts);

module.exports = router;
