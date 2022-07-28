import { Router } from 'express';
import UserController from '../controllers/user.controller';

const userController = new UserController();

const route = Router();

route.route('/')
  .get(userController.getAll)
  .post(userController.create);

route.route('/:id')
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.delete);

export default route;
