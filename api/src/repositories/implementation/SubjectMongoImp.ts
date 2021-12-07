import { Subject, SubjectModel } from '../../models/Subject'
import ISubjectRepository from '../ISubjectRepository'

export default class SubjectMongoImp implements ISubjectRepository {
  private projection: object;
  constructor () {
    this.projection = {
      _id: 0
    }
  }

  async saveSubject (subject: Subject): Promise<void> {
    await SubjectModel.create(subject)
  }

  async deleteSubject (subject: Subject): Promise<void> {
    await SubjectModel.deleteOne({ id: subject.id })
  }

  async findAll (): Promise<Subject[]> {
    return await SubjectModel.find({}, this.projection)
  }

  async findByName (name: string): Promise<Subject[]> {
    return await SubjectModel.find({ name }, this.projection)
  }

  updateSubject (subject: Subject, id: string): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
