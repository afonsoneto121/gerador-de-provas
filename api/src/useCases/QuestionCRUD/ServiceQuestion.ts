import { Question } from '../../models/Question'
import IQuestionRepository from '../../repositories/IQuestionRepository'

export default class ServiceQuestionCRUD {
  private repository: IQuestionRepository
  constructor (repository: IQuestionRepository) {
    this.repository = repository
  }

  async saveQuestion (question: Question) {
    if (question.alternates.length > 5) {
      throw new Error('Max number of alternatives exceeded')
    }
    await this.repository.saveQuestion(question)
  }

  async findAll () {
    return await this.repository.findAll()
  }

  async findByTitle (title: string) {
    const result = await this.repository.findByTitle(title)
    if (result.length === 0) {
      throw new Error('No results found')
    }
    return result
  }
}
