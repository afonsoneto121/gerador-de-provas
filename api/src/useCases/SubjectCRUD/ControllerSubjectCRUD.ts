import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { Subject } from 'src/models/Subject'
import ServiceSubjectCRUD from './ServiceSubjectCRUD'

export default class ControllerSubjectCRUD {
  private service: ServiceSubjectCRUD;
  constructor (service: ServiceSubjectCRUD) {
    this.service = service
  }

  async handleSaveSubject (req: Request, res: Response) {
    const subject: Subject = req.body
    try {
      await this.service.saveSubject(subject)
      return res.status(StatusCodes.CREATED).send()
    } catch (err: any) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: err.message || 'Unexpected error'
      })
    }
  }

  async handleDeleteSubject (req: Request, res: Response) {
    const subject: Subject = req.body
    try {
      await this.service.deleteSubject(subject)
      return res.status(StatusCodes.NO_CONTENT).send()
    } catch (err: any) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: err.message || 'Unexpected error'
      })
    }
  }

  async handleUpdateSubject (req: Request, res: Response) {
    const id = req.query.id as string
    const subject: Subject = req.body
    try {
      await this.service.updateSubject(subject, id)
      return res.status(StatusCodes.OK).send()
    } catch (err: any) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: err.message || 'Unexpected error'
      })
    }
  }

  async handleFindSubject (req: Request, res: Response) {
    const name = req.query.name as string
    try {
      const result = !name
        ? await this.service.findAll()
        : await this.service.findByName(name)
      return res.status(StatusCodes.OK).json(result)
    } catch (err: any) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: err.message || 'Unexpected error'
      })
    }
  }
}
