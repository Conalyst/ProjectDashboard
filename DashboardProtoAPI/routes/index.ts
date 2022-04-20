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
import express from 'express'

const router = Router()
const apiRouter = Router();
router.use('/', apiRouter)
// Static routes
// Serve React build files in production
if (process.env.NODE_ENV === 'production') {
  const path = require('path');
  // Serve the frontend's index.html file at the root route
  router.get('/', (req, res) => {
    // res.cookie('XSRF-TOKEN', req.csrfToken());
    res.sendFile(
      path.resolve(__dirname, '../../DashboardProtoAPI', 'build', 'index.html')
    );
  });

  // Serve the static assets in the frontend's build folder
  router.use(express.static(path.resolve("../DashboardProtoAPI/build")));

  // Serve the frontend's index.html file at all other routes NOT starting with /api
  router.get(/^(?!\/?api).*/, (req, res) => {
    // res.cookie('XSRF-TOKEN', req.csrfToken());
    res.sendFile(
      path.resolve(__dirname, '../../DashboardProtoAPI', 'build', 'index.html')
    );
  });
}

// Add a XSRF-TOKEN cookie in development
// if (process.env.NODE_ENV == 'production') {
//   router.get('/api/csrf/restore', (req, res) => {
//     // res.cookie('XSRF-TOKEN', req.csrfToken());
//     res.status(201).json({});
//   });
// }




router.use('/assets', assetRouter)
router.use('/assets/company', companyAssetsRouter)
router.use('/users', userRouter)

// this is just a test of authorization
router.use('/tests', testRouter)
router.use('/vulnerabilities', vulnerabilityRouter)
router.use('/asset-vulnerability', assetVulnerabilityRouter)
router.use('/threats', threatRouter)
router.use('/vulnerability-threat', vulnerabilityThreatRouter)
router.use('/risks', riskRouter)
router.use('/risk-asset', riskAssetRouter)

export default router;