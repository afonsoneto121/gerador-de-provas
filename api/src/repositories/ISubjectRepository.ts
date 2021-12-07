import { Subject } from '../models/Subject'

export default interface ISubjectRepository {
  saveSubject(subject: Subject): Promise<void>;
  deleteSubject(subject: Subject): Promise<void>;
  findAll(): Promise<Subject[]>;
  findByName(name: string): Promise<Subject[]>;
  updateSubject(subject: Subject, id: string): Promise<void>;
}
