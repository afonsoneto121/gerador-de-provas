import { User } from '../models/User'

export default interface IUserRepository {
  saveUser(user: User): Promise<void>;
  deleteUser(user: User): Promise<void>;
  findAll(): Promise<User[]>;
  findById(id: string): Promise<User| null>;
  findByEmail(email: string): Promise<User| null>;
  updateUser(user: User, id: string): Promise<void>;
}
