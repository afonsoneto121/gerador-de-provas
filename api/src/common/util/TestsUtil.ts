import { Question } from 'src/models/Question'
import { Subject } from 'src/models/Subject'
import { User } from 'src/models/User'

export const validUser: User = {
  id: '1',
  name: 'Afonso Neto',
  password: 'Secretpassword',
  email: 'valid@email.com'
}

export const ValidSubject: Subject = {
  id: '1',
  name: 'Math'
}

export const validQuestion: Question = {
  id: '1',
  title: 'Select the correct answer',
  alternates: ['Number 1', 'Number 2', 'Number 3', 'Correct'],
  answer: 'Correct',
  subject: ValidSubject
}

export const invalidQuestion: Question = {
  id: '1',
  title: 'Select the correct answer',
  alternates: ['Number 1', 'Number 2', 'Number 3', 'Number 4', 'Number 5', 'Correct'],
  answer: 'Correct',
  subject: ValidSubject
}
