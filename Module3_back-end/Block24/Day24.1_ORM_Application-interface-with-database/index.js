require('express-async-errors');
const express = require('express');
const bookController = require('./controllers/bookController');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3200;
app.listen(PORT, () => console.log(PORT));

app
  .route('/books')
  .get(bookController.getAll)
  .post(bookController.addBook);

app.route('/books/:id')
  .get(bookController.getById)
  .put(bookController.updateBook)
  .delete(bookController.delete);

app.use((err, _req, res, _next) => {
  console.log(err.message);
  res.status(500).json({ message: err.message });
});
