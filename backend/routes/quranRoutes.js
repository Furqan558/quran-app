const express = require("express");
const {
  getChapters,
  getChapterPages,
  getVersesByPage,
} = require("../controllers/quranController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/chapters", authMiddleware, getChapters);
router.get("/chapters/:chapterId", authMiddleware, getChapterPages);
router.get("/pages/:pageId/verses", authMiddleware, getVersesByPage);

module.exports = router;
