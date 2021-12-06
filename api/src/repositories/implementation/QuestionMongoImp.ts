import { Question } from 'src/models/Question'
import IQuestionRepository from '../IQuestionRepository'

export default class QuestionMongoImp implements IQuestionRepository {
  saveQuestion (Question: Question): Promise<void> {
    throw new Error('Method not implemented.')
  }

  deleteQuestion (Question: Question): Promise<void> {
    throw new Error('Method not implemented.')
  }

  findAll (): Promise<Question[]> {
    throw new Error('Method not implemented.')
  }

  findByName (name: string): Promise<Question[]> {
    throw new Error('Method not implemented.')
  }

  updateQuestion (Question: Question, id: string): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
