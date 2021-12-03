import { Router } from 'express'
import controlerUserCRUD from 'src/useCases/UserCRUD'

const router = Router()

router.post('/user', async (req, res) => controlerUserCRUD.handleSaveUser(req, res))
router.get('/user', async (req, res) => controlerUserCRUD.handleFindUser(req, res))
router.delete('/user', async (req, res) => controlerUserCRUD.handleDeleteUser(req, res))
router.put('/user', async (req, res) => controlerUserCRUD.handleUpdateUser(req, res))

router.route('/question')
  .post(async (req, res) => res.send())
  .get(async (req, res) => res.send())
  .delete(async (req, res) => res.send())
  .put(async (req, res) => res.send())

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
