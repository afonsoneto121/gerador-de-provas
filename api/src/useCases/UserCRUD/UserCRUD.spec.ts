import * as TestUtil from '../../common/util/TestsUtil'
import ServiceUserCRUD from './ServiceUserCRUD'

describe('Test ServiceUserCRUD', () => {
  const mockRepository = {
    saveUser: jest.fn(),
    deleteUser: jest.fn(),
    findAll: jest.fn(),
    findById: jest.fn(),
    findByEmail: jest.fn(),
    updateUser: jest.fn()
  }

  let serviceUserCRUD: ServiceUserCRUD

  beforeEach(() => {
    serviceUserCRUD = new ServiceUserCRUD(mockRepository)
  })

  it('should be defined', () => {
    expect(serviceUserCRUD).toBeDefined()
  })

  describe('create a new user', () => {
    beforeEach(() => {
      mockRepository.saveUser.mockReset()
      mockRepository.findByEmail.mockReset()
    })
    it('should create a new user', async () => {
      const user = TestUtil.validUser
      mockRepository.saveUser.mockReturnThis()
      mockRepository.findByEmail.mockResolvedValue(null)

      await serviceUserCRUD.saveUser(user)

      expect(mockRepository.saveUser).toHaveBeenCalledTimes(1)
      expect(mockRepository.findByEmail).toHaveBeenCalledTimes(1)
    })
    it('should be throw a exception when the user already to exist', async () => {
      const user = TestUtil.validUser
      mockRepository.saveUser.mockReturnThis()
      mockRepository.findByEmail.mockReturnValue(user)

      expect(serviceUserCRUD.saveUser(user)).rejects.toThrowError()
      expect(mockRepository.findByEmail).toHaveBeenCalledTimes(1)
      expect(mockRepository.saveUser).toHaveBeenCalledTimes(0)
    })
  })
  describe('Find users', () => {
    it('should be find all users', async () => {
      const user = TestUtil.validUser
      mockRepository.findAll.mockReturnValue([user, user])

      const result = await serviceUserCRUD.findAll()

      expect(result).toBeTruthy()
      expect(result).toHaveLength(2)
      expect(mockRepository.findAll).toHaveBeenCalledTimes(1)
    })

    it('should be find user by id', async () => {
      const user = TestUtil.validUser
      mockRepository.findById.mockReturnValue(user)

      const result = await serviceUserCRUD.findById('1')

      expect(result).toBeTruthy()
      expect(result).toEqual(user)
      expect(result).toHaveProperty('id')
      expect(mockRepository.findById).toHaveBeenCalledTimes(1)
    })

    it('should be return a exception when does not to exist user', async () => {
      mockRepository.findById.mockReturnValue(null)

      expect(serviceUserCRUD.findById('3')).rejects.toThrowError()
    })
  })
})

describe('Test ControlerUserCRUD', () => {

})
