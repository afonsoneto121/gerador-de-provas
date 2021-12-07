import { Subject } from 'src/models/Subject'

export interface QuestionDTO {
  id?: string,
  title: string,
  alternates: string[],
  answer: string,
  subject: Subject
}
