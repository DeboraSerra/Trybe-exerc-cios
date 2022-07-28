import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/book.interface';

class UserModel {
  connection: Pool;
  constructor(connection: Pool) {
    this.connection = connection;
  }
  public getAll = async (): Promise<User[]> => {
    const [users] = await this.connection.execute('SELECT id, name, email FROM Users;');
    return users as User[];
  }
  public findById = async (id: number): Promise<User> => {
    const [rows] = await this.connection.execute('SELECT id, name, email FROM Users WHERE id = ?', [id]);
    const [user] = rows as User[];
    return user;
  }
  public create = async (user: User): Promise<User> => {
    const { name, email, password } = user;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>('INSERT INTO Users (name, email, password) VALUES (?, ?, ?);', [name, email, password]);
    return { id: insertId, name, email };
  }
  public update = async (id: number, user: User) => {
    const { name, email, password } = user;
    await this.connection.execute('UPDATE Users SET name = ?, email = ?, password = ? WHERE id = ?', [name, email, password, id]);
  }
  public delete = async (id: number) => {
    await this.connection.execute('DELETE FROM Users WHERE id = ?', [id]);
  }
}

export default UserModel;
