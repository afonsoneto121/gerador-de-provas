import SubjectMongoImp from 'src/repositories/implementation/SubjectMongoImp'
import ControllerSubjectCRUD from './ControllerSubjectCRUD'
import ServiceSubjectCRUD from './ServiceSubjectCRUD'

const repository = new SubjectMongoImp()
const service = new ServiceSubjectCRUD(repository)

const controllerSubject = new ControllerSubjectCRUD(service)

export default controllerSubject
