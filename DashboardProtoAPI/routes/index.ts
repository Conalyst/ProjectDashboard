import { Router } from 'express'
import assetRouter from './asset'
import testRouter from './Test'
import userRouter from './user'
import companyAssetsRouter from './CompanyAssets'
import vulnerabilityRouter from './Vulnerability'
import assetVulnerabilityRouter from './AssetVulnerability'
import threatRouter from './Threat'
import vulnerabilityThreatRouter from './VulnerabilityThreat'
import riskRouter from './Risk'
import riskAssetRouter from './RiskAsset'

const router = Router()

router.use('/assets', assetRouter)
router.use('/assets/company', companyAssetsRouter)
router.use('/users', userRouter)
router.use('/', userRouter)
// this is just a test of authorization
router.use('/tests', testRouter)
router.use('/vulnerabilities', vulnerabilityRouter)
router.use('/asset-vulnerability', assetVulnerabilityRouter)
router.use('/threats', threatRouter)
router.use('/vulnerability-threat', vulnerabilityThreatRouter)
router.use('/risks', riskRouter)
router.use('/risk-asset', riskAssetRouter)

export default router;