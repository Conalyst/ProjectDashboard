import { Router } from 'express'
import assetRouter from './Asset'
import userRouter from './User'
import companyAssetsRouter from './CompanyAssets'

const router = Router()

router.use('/assets', assetRouter)
router.use('/assets/company', companyAssetsRouter)
router.use('/users', userRouter)
router.use('/', userRouter)

export default router;