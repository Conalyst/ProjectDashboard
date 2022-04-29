export {getAllTest} from './testService';
export {postLogin} from './loginService';
export {getAllAssets} from './assetsService';
export {getAssetsByCompanyId} from './assetsService';
export {getAssetsById} from './assetsService';
export {postAsset, putAsset, postAssetVuln, deleteAsset} from './assetsService';
export {postRisk, postRiskAsset, deleteRisk} from './riskService';
export { getStaticAssets, getStatsForBarChart} from './assetsService'
export { getStaticThreats} from './threatService'
export { getStaticVulnerability, postVulnThreat, deleteVuln} from './vulnerabilityService'
export { getStaticRisks} from './riskService'
export { getAgents, deleteThreat} from './threatService'
