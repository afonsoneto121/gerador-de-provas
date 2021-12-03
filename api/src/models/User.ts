import { model, Schema } from 'mongoose'
import { v4 as uuidv4 } from 'uuid'
export interface User {
  id?: string;
  name: string;
  password: string;
  email: string;
  reultsExam?: [{ idExam: string, result: number}]
}

const schema = new Schema<User>({
  id: {
    type: String,
    default: uuidv4()
  },
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required']
  },
  reultsExam: [{ idExam: String, result: Number }]
}, {
  versionKey: false
})

export const UserModel = model<User>('User', schema)
