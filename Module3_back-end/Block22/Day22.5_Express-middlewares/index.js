const express = require('express');
const app = express();
app.use(express.json());

app.listen(4000, () => console.log('listening port 4000'));

// exercise 1
const salesRouter = require('./salesApi');
app.use('/sales', salesRouter);

// exercise 2
const signupRouter = require('./signupApi');
app.use('/signup', signupRouter);

app.use((err, req, res, next) => {
  console.log(err.message);
})
