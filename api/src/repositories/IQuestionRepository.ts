import { Question } from '../models/Question'

export default interface IQuestionRepository {
  saveQuestion(Question: Question): Promise<void>;
  deleteQuestion(Question: Question): Promise<void>;
  findAll(): Promise<Question[]>;
  findByTitle(title: string): Promise<Question[]>;
  updateQuestion(Question: Question, id: string): Promise<void>;
}
