export const BASE_ADDRESS = () => 'http://localhost:5000/api'
export const GET_ALL_TEST = () => `${BASE_ADDRESS()}/v2/tests`
export const LOGIN = ()=>BASE_ADDRESS()+'/v2/login';
export const GET_ALL_ASSETS = ()=>BASE_ADDRESS()+'/v2/dashboard/asset';
export const RECOMMENDATIONS = ()=>BASE_ADDRESS()+'/v2/dashboard/rec';
export const GET_ASSET_BY_COMPANY_ID = (companyId)=>$BASE_ADDRESS()+'/v2/dashboard/asset?companyId=${companyId}';
export const GET_ASSET_BY_ID = (assetId)=>BASE_ADDRESS()+'/v2/dashboard/asset?companyId=${assetId}';