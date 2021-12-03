import { User, UserModel } from 'src/models/User'
import IUserRepository from '../IUserRepository'

export default class UserMongoImp implements IUserRepository {
  private projection: object;
  constructor () {
    this.projection = {
      password: 0,
      _id: 0
    }
  }

  async saveUser (user: User): Promise<void> {
    await UserModel.create(user)
  }

  async deleteUser (user: User): Promise<void> {
    await UserModel.deleteOne({ id: user.id })
  }

  async findAll (): Promise<User[]> {
    return await UserModel.find({}, this.projection)
  }

  async findById (id: string): Promise<User | null> {
    return await UserModel.findOne({ id }, this.projection)
  }

  async findByEmail (email: string): Promise<User | null> {
    return await UserModel.findOne({ email }, this.projection)
  }

  async updateUser (user: User, id: string): Promise<void> {
    await UserModel.findOneAndUpdate({ id }, user)
  }
}
