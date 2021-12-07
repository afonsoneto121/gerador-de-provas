import { Question, QuestionModel } from '../../models/Question'
import IQuestionRepository from '../IQuestionRepository'

export default class QuestionMongoImp implements IQuestionRepository {
  private projection: object;
  constructor () {
    this.projection = {
      _id: 0
    }
  }

  async saveQuestion (Question: Question): Promise<void> {
    await QuestionModel.create(Question)
  }

  deleteQuestion (Question: Question): Promise<void> {
    throw new Error('Method not implemented.')
  }

  async findAll (): Promise<Question[]> {
    return await QuestionModel.find({}, this.projection)
  }

  async findByTitle (title: string): Promise<Question[]> {
    return await QuestionModel.find({ title }, this.projection)
  }

  updateQuestion (Question: Question, id: string): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
