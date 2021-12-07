import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { Question } from 'src/models/Question'
import { QuestionDTO } from './DTOQuestion'
import ServiceQuestionCRUD from './ServiceQuestion'

export default class ControllerQuestionCRUD {
  private service: ServiceQuestionCRUD
  constructor (service: ServiceQuestionCRUD) {
    this.service = service
  }

  async handlerSaveQuestion (req: Request, res: Response) {
    const questionDTO: QuestionDTO = req.body
    try {
      const question: Question = questionDTO
      await this.service.saveQuestion(question)
      res.status(StatusCodes.OK).send()
    } catch (err: any) {
      res.status(StatusCodes.BAD_REQUEST).json({
        message: err.message || 'Unexpected error'
      })
    }
  }

  async handlerFind (req: Request, res: Response) {
    const title = req.query.title as string
    try {
      const result = title === undefined
        ? await this.service.findAll()
        : await this.service.findByTitle(title)
      return res.status(StatusCodes.OK).json(result)
    } catch (err: any) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: err.message || 'Unexpected error'
      })
    }
  }
}
