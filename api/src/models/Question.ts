import { model, Schema } from 'mongoose'
import { Subject } from './Subject'
import { v4 as uuidv4 } from 'uuid'

export interface Question {
  id: string;
  alternates: string[];
  answer: string;
  subject: Subject;
}

const schema = new Schema<Question>({
  id: {
    type: String,
    default: uuidv4()
  },
  alternates: [String],
  answer: String,
  subject: Object
}, {
  versionKey: false
})

export const QuestionModel = model<Question>('Question', schema)
