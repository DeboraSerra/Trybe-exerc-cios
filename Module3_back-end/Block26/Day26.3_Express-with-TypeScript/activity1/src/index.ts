import express from 'express';
import 'express-async-errors';
import errorMiddleware from './middlewares/error.middleware';
import userRoute from './routes/user.route';

const app = express();
app.use(express.json());

app.use('/users', userRoute);

const PORT = 3000;
app.listen(PORT, () => console.log(PORT));

app.use(errorMiddleware);
