const router = require("express").Router();
const Article = require("../models/article.model");

/* 
    @route GET api/articles
    @desc Gets all articles
    @access public
*/
router.get("/", async (req, res) => {
  try {
    let articles = await Article.find().populate("author");

    res.status(200).send({
      meta: {
        count: articles.length,
      },
      articles,
    });
  } catch (error) {
    res.status(500).json({
      message: "1010101001111000111",
      statuscode: "EB500",
    });
  }
});

/* 
    @route POST api/articles/create
    @desc  create articles
    @access public
*/
router.post("/create", async (req, res) => {
  try {
    let article = new Article(req.body);

    await article.save();

    res.status(201).json({
      message: "成功",
    });
  } catch (error) {
    res.status(500).json({
      message: "失败",
      statuscode: "EB500",
    });
  }
});

/* 
    @route GET api/articles/:id
    @desc Gets one article
    @access public
*/
router.get("/show/:id", async (req, res) => {
  try {
    let article = await Article.findById(req.params.id).populate("author");

    res.status(200).json({
      message: "article found",
      article,
    });
  } catch (err) {
    res.status(500).json({
      message: "oh non je ne sais pas ce qui s’est passé",
      statuscode: "EB500",
    });
  }
});

module.exports = router;
