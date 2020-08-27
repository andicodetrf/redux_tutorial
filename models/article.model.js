const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
  {
    name: String,
    text: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Article",
    },
  },
  {
    timestamps: true,
  }
);

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
