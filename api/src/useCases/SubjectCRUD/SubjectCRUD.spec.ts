import * as TestUtil from '../../common/util/TestsUtil'
import ServiceSubjectCRUD from './ServiceSubjectCRUD'

describe('Test SubjectService', () => {
  const mockRepository = {
    saveSubject: jest.fn(),
    deleteSubject: jest.fn(),
    findAll: jest.fn(),
    findByName: jest.fn(),
    updateSubject: jest.fn()
  }
  let service: ServiceSubjectCRUD

  beforeEach(() => {
    service = new ServiceSubjectCRUD(mockRepository)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  describe('create a new subject', () => {
    beforeEach(() => {
      mockRepository.saveSubject.mockReset()
      mockRepository.findByName.mockReset()
    })
    it('should be create a subject', async () => {
      const subject = TestUtil.ValidSubject
      mockRepository.saveSubject.mockReturnThis()
      mockRepository.findByName.mockReturnValue(null)

      await service.saveSubject(subject)

      expect(mockRepository.saveSubject).toBeCalledTimes(1)
      expect(mockRepository.findByName).toBeCalledTimes(1)
    })
    it('should be throw a exception when a subject already to exist', async () => {
      const subject = TestUtil.ValidSubject
      mockRepository.saveSubject.mockReturnThis()
      mockRepository.findByName.mockReturnValue(subject)

      expect(service.saveSubject(subject)).rejects.toThrowError()
      expect(mockRepository.saveSubject).toBeCalledTimes(0)
      expect(mockRepository.findByName).toBeCalledTimes(1)
    })
  })
  describe('find subject', () => {
    beforeEach(() => {
      mockRepository.findAll.mockReset()
      mockRepository.findByName.mockReset()
    })
    it('should be find all subject', async () => {
      const subject = TestUtil.ValidSubject
      mockRepository.findAll.mockReturnValue([subject, subject])

      const result = await service.findAll()

      expect(result).toBeTruthy()
      expect(result).toHaveLength(2)
      expect(mockRepository.findAll).toBeCalledTimes(1)
    })
    it('should be find by name', async () => {
      const subject = TestUtil.ValidSubject
      mockRepository.findByName.mockReturnValue(subject)

      const result = await service.findByName(subject.name)

      expect(result).toBeTruthy()
      expect(result).toEqual(subject)
      expect(mockRepository.findByName).toBeCalledTimes(1)
    })
    it('should be throw a exception when no name is found', async () => {
      mockRepository.findByName.mockReturnValue([])

      expect(service.findByName('other')).rejects.toThrowError()
      expect(mockRepository.findByName).toHaveBeenCalledTimes(1)
    })
  })
})
