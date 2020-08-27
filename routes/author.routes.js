const router = require("express").Router();
const Author = require("../models/author.model");

/* 
    @route GET api/authors
    @desc Gets all authors
    @access public
*/
router.get("/", async (req, res) => {
  try {
    let authors = await Author.find().populate("author");

    res.status(200).send({
      meta: {
        count: authors.length,
      },
      authors,
    });
  } catch (error) {
    res.status(500).json({
      message: "1010101001111000111",
      statuscode: "EB500",
    });
  }
});

/* 
    @route POST api/authors/create
    @desc  create authors
    @access public
*/
router.post("/create", async (req, res) => {
  try {
    let author = new Author(req.body);

    await author.save();

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

module.exports = router;
