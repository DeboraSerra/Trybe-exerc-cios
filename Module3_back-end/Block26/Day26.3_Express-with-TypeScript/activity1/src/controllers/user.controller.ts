import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../services/user.service';

class UserController {
  constructor(private service = new UserService()) {};
  public getAll = async (req: Request, res: Response) => {
    const users = await this.service.getAll();
    res.status(StatusCodes.OK).json({ users });
  }
  public findById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await this.service.findById(+id);
    res.status(StatusCodes.OK).json({ user });
  }
  public create = async (req: Request, res: Response) => {
    const user = await this.service.create(req.body);
    res.status(StatusCodes.CREATED).json({ user });
  }
  public update = async (req: Request, res: Response) => {
    const { id } = req.params;
    this.service.update(+id, req.body);
    res.status(203);
  }
  public delete = async (req: Request, res: Response) => {
    const { id } = req.params;
    this.service.delete(+id);
    res.status(203);
  }
}

export default UserController;
