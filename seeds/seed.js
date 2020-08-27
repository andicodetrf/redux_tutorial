const Article = require("../models/article.model");
const Author = require("../models/author.model");

require("../lib/mongo");
let db = [
  {
    name: "How to catch a preditor",
    text: "Life is just getting started",
    author: "Chris Hanson",
  },
  {
    name: "Lets just chill",
    text: "Life is just getting started",
    author: "Dyana",
  },
  {
    name: "I support you",
    text: "Life is just getting started",
    author: "Pasti the Great",
  },
];

db.forEach((ele, i) => {
  Author.create({ name: ele.author }).then((author) => {
    let article = { name: ele.name, text: ele.text, author: author._id };
    Article.create(article)
      .then((e) => {
        console.log(`${i} entry complete`);
      })
      .catch(() => {
        process.exit(1);
      });
  });
});
