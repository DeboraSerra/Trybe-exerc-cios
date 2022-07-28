import User from '../interfaces/book.interface';
import BookModel from '../models/user.model';
import connection from '../models/connection';
import { ConflictError, NotFoundError, BadRequestError } from 'restify-errors';

const validateUser = (user: User) => {
  const { name, email, password } = user;
  if (!name || !email || !password) throw new BadRequestError('The fields can\'t be empty');
}

class UserService {
  model: BookModel;
  constructor() {
    this.model = new BookModel(connection);
  }
  public getAll = async (): Promise<User[]> => {
    const users = await this.model.getAll();
    return users;
  }
  public findById = async (id: number): Promise<User> => {
    const user = await this.model.findById(id);
    if (!user) throw new NotFoundError('NotFoundError');
    return user;
  }
  public create = async (user: User): Promise<User> => {
    validateUser(user);
    const users = await this.model.getAll();
    const exists = users.find(({ email }) => email === user.email);
    if (exists) throw new ConflictError('User already exists');
    const newUser = await this.model.create(user);
    return newUser;
  }
  public update = async (id: number, user: User) => {
    validateUser(user);
    const foundUser = await this.model.findById(id);
    if (!foundUser) throw new NotFoundError('User not found');
    const users = await this.model.getAll();
    const exists = users.find(({ email }) => email === user.email);
    if (exists) throw new ConflictError('Email already exists');
    await this.model.update(id, user)
  }
  public delete = async (id: number) => {
    const foundUser = await this.model.findById(id);
    if (!foundUser) throw new NotFoundError('User not found');
    await this.model.delete(id);
  }
}

export default UserService;
