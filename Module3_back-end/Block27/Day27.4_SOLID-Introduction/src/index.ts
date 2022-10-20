import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import PlantsController from './controllers/Plants.controller';
import ErrorCode from './errors/ErrorCode';
import Plants from './models/Plants.model';
import PlantsService from './services/Plants.service';

const model = new Plants();
const service = new PlantsService(model);
const controller = new PlantsController(service);

const app = express();
app.use(express.json());

app.route('/plants')
  .get(controller.getPlants)
  .post(controller.savePlant);

app.route('/sunny/:id')
  .get(controller.getPlantsThatNeedsSunWithId);

app.route('/plants/:id')
  .get(controller.getPlantById)
  .put(controller.editPlant)
  .delete(controller.removePlantById);

app.use((err: ErrorCode, _req: Request, res: Response, next: NextFunction) => {
  const { code, message } = err;
  if (code) return res.status(code).json({ message });
  res.status(500).json({ message });
  next();
});

app.listen(3005, () => console.log(3005));
