import { Router } from 'express'
import assetRouter from './asset'
import testRouter from './Test'
import userRouter from './user'
import companyAssetsRouter from './CompanyAssets'

const router = Router()

router.use('/assets', assetRouter)
router.use('/assets/company', companyAssetsRouter)
router.use('/users', userRouter)
router.use('/', userRouter)
// this is just a test of authorization
router.use('/tests', testRouter)

export default router;