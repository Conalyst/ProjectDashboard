import { Router } from 'express'
import assetRouter from './asset'
import companyAssetsRouter from './CompanyAssets'

const router = Router()

router.use('/assets', assetRouter)
router.use('/assets/company', companyAssetsRouter)

export default router;