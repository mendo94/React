const express = require("express");
const app = express();
const cors = require("cors");
const { Op } = require("sequelize");
const models = require("./models");
const bcrypt = require("bcryptjs");

const PORT = process.env.PORT || 8080;
const SALT_ROUNDS = 10;

app.use(cors());
app.use(express.json());

app.post("/registration", async (req, res) => {
  const { username, password } = req.body;

  const persistedUser = await models.User.findOne({
    where: {
      username: username,
    },
  });
  if (persistedUser == null) {
    const hash = await bcrypt.hash(password, SALT_ROUNDS);
    const user = models.User.build({
      username: username,
      password: hash,
    });
    const _ = await user.save();
    res.json({ success: true });
  }
});

app.get("/registration", async (req, res) => {
  const users = await models.User.findAll();
  res.json(users);
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await models.User.findOne({
    where: {
      username: username,
    },
  });
  if (user != null) {
    bcrypt.compare(password, user.password, (result) => {
      res.json({ success: true, userId: user.id });
    });
  }
});

app.get("/login", async (req, res) => {
  const users = await models.User.findOne();
  res.json(users);
});

app.post("/", async (req, res) => {
  const { title, genre, publisher, year, imageURL, userId } = req.body;

  const addBooks = await models.Book.build({
    title: title,
    genre: genre,
    publisher: publisher,
    year: year,
    imageURL: imageURL,
    userId: userId,
  });
  const _ = await addBooks.save();
  res.json({ success: true });
});

app.get("/:userId", async (req, res) => {
  const userId = req.params.userId;
  console.log(userId);
  const books = await models.Book.findAll({
    where: {
      userId: userId,
    },
  });
  res.json(books);
});

app.delete("/:bookId", async (req, res) => {
  const bookId = parseInt(req.params.bookId);

  const _ = models.Book.destroy({
    where: {
      id: bookId,
    },
  });
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
