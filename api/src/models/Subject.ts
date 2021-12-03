import { model, Schema } from 'mongoose'
import { v4 as uuidv4 } from 'uuid'

export interface Subject {
  id?: string;
  name: string;
}

const schema = new Schema<Subject>({
  id: {
    type: String,
    default: uuidv4()
  },
  name: {
    type: String,
    required: [true, 'Name is required']
  }
}, {
  versionKey: false
})

export const SubjectModel = model<Subject>('Subject', schema)
