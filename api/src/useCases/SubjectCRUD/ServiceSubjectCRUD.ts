import { Subject } from '../../models/Subject'
import ISubjectRepository from '../../repositories/ISubjectRepository'
import { SubjectDTO } from './DTOSubjectCRUD'

export default class ServiceSubjectCRUD {
  private repository: ISubjectRepository
  constructor (repository: ISubjectRepository) {
    this.repository = repository
  }

  async saveSubject (dto: SubjectDTO) {
    const subjectAlreadyExists = await this.repository.findByName(dto.name)
    if (subjectAlreadyExists) {
      throw new Error('Subject already exists')
    }
    await this.repository.saveSubject(dto)
  }

  async deleteSubject (dto: Subject) {
    this.repository.deleteSubject(dto)
  }

  async updateSubject (dto: Subject, id: string) {
    this.repository.updateSubject(dto, id)
  }

  async findAll () {
    return await this.repository.findAll()
  }

  async findByName (name: string) {
    const result = await this.repository.findByName(name)
    if (result.length === 0) {
      throw new Error('Subject not found')
    }
    return result
  }
}
