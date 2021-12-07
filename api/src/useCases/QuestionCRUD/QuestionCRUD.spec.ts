import ServiceQuestionCRUD from './ServiceQuestion'
import * as TestUtil from '../../common/util/TestsUtil'
describe('Test ServiceQuestionCRUD', () => {
  const mockRepository = {
    saveQuestion: jest.fn(),
    findAll: jest.fn(),
    findByTitle: jest.fn(),
    deleteQuestion: jest.fn(),
    updateQuestion: jest.fn()
  }
  let service: ServiceQuestionCRUD
  beforeEach(() => {
    service = new ServiceQuestionCRUD(mockRepository)
  })
  describe('create question', () => {
    beforeEach(() => {
      mockRepository.saveQuestion.mockReset()
    })
    it('should create a question', async () => {
      const question = TestUtil.validQuestion
      mockRepository.saveQuestion.mockReturnThis()
      await service.saveQuestion(question)
      expect(mockRepository.saveQuestion).toHaveBeenCalledTimes(1)
    })

    it('should be throw a exception when try create a invalid question', async () => {
      const question = TestUtil.invalidQuestion
      mockRepository.saveQuestion.mockReturnThis()

      expect(service.saveQuestion(question)).rejects.toThrowError()
      expect(mockRepository.saveQuestion).toHaveBeenCalledTimes(0)
    })
  })

  describe('find question', () => {
    beforeEach(() => {
      mockRepository.findAll.mockReset()
      mockRepository.findByTitle.mockReset()
    })
    it('should return all questions', async () => {
      const question = TestUtil.validQuestion
      mockRepository.findAll.mockReturnValue([question, question])

      const result = await service.findAll()

      expect(result).toBeTruthy()
      expect(result).toHaveLength(2)
      expect(mockRepository.findAll).toHaveBeenCalledTimes(1)
    })

    it('should return a question by title', async () => {
      const question = TestUtil.validQuestion
      mockRepository.findByTitle.mockReturnValue(question)

      const result = await service.findByTitle(question.title)

      expect(result).toBeTruthy()
      expect(result).toEqual(question)
      expect(mockRepository.findByTitle).toHaveBeenCalledTimes(1)
    })

    it('should be throw a exception when does not find a question by title', async () => {
      mockRepository.findByTitle.mockReturnValue([])

      expect(service.findByTitle('title')).rejects.toThrowError()
      expect(mockRepository.findByTitle).toBeCalledTimes(1)
    })
  })
})
