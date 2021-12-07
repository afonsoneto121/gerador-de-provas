import { Router } from 'express'
import controllerSubject from '../useCases/SubjectCRUD'
import controlerUserCRUD from '../useCases/UserCRUD'

const router = Router()

router.post('/user', async (req, res) => controlerUserCRUD.handleSaveUser(req, res))
router.get('/user', async (req, res) => controlerUserCRUD.handleFindUser(req, res))
router.delete('/user', async (req, res) => controlerUserCRUD.handleDeleteUser(req, res))
router.put('/user', async (req, res) => controlerUserCRUD.handleUpdateUser(req, res))

router.route('/question')
  .post(async (req, res) => controllerSubject.handleSaveSubject(req, res))
  .get(async (req, res) => controllerSubject.handleFindSubject(req, res))
  .delete(async (req, res) => controllerSubject.handleDeleteSubject(req, res))
  .put(async (req, res) => controllerSubject.handleUpdateSubject(req, res))

router.route('/subject')
  .post(async (req, res) => res.send())
  .get(async (req, res) => res.send())
  .delete(async (req, res) => res.send())
  .put(async (req, res) => res.send())

router.route('/test')
  .post(async (req, res) => res.send())
  .delete(async (req, res) => res.send())
  .put(async (req, res) => res.send())

export default router
