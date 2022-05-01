export const BASE_ADDRESS = () => 'http://localhost:5000/api'
export const GET_ALL_TEST = () => `${BASE_ADDRESS()}/v2/tests`
export const LOGIN = ()=>BASE_ADDRESS()+'/v2/login';
// export const COMPANYASSETS = ()=>BASE_ADDRESS()+'/v2/assets/company/';
export const COMPANYASSETS = (id)=>`${BASE_ADDRESS()}/v2/assets/company/${id}`;
export const GET_ASSET_BY_COMPANY_ID = (companyId)=>BASE_ADDRESS()+'/v2/dashboard/asset?companyId=${companyId}';

export const GET_ALL_ASSETS = ()=>BASE_ADDRESS()+'/v2/assets';
export const GET_ASSET_BY_ID = (assetId)=>BASE_ADDRESS()+'/v2/dashboard/asset?assetId=${assetId}';
export const POST_ASSET= () => `${BASE_ADDRESS()}/v2/assets`
export const PUT_ASSET= (id) => `${BASE_ADDRESS()}/v2/assets/${id}`
export const DELETE_ASSET= (id) => `${BASE_ADDRESS()}/v2/assets/${id}`
export const GET_STATIC_ASSETS= () => `${BASE_ADDRESS()}/v2/assets/static`
export const GET_STATS_BARCHART= () => `${BASE_ADDRESS()}/v2/assets/bar-stats`

export const POST_ASSET_VULN= () => `${BASE_ADDRESS()}/v2/asset-vuln`

export const GET_ALL_VULNERABILITIES = ()=>BASE_ADDRESS()+'/v2/vulnerabilities';
export const GET_VULNERABILITY_BY_ID = (vulnerabilityId)=>BASE_ADDRESS()+'/v2/vulnerability?vunerabilityId=${vulnerabilityId}';
export const POST_VULNERABILITY = ()=>BASE_ADDRESS()+'/v2/vulnerabilities';
export const GET_STATIC_VULNERABILITIES= () => `${BASE_ADDRESS()}/v2/vulnerabilities/static`
export const DELETE_VULN= (id) => `${BASE_ADDRESS()}/v2/vulnerabilities/${id}`
export const PUT_VULN= (id) => `${BASE_ADDRESS()}/v2/vulnerabilities/${id}`

export const POST_VULN_THREAT= () => `${BASE_ADDRESS()}/v2/vuln-threat`

export const GET_ALL_THREATS = ()=>BASE_ADDRESS()+'/v2/threats';
export const GET_THREAT_BY_ID = (threatId)=>BASE_ADDRESS()+'/v2/threat?threatId=${threatId}';
export const POST_THREAT = ()=>BASE_ADDRESS()+'/v2/threats';
export const DELETE_THREAT= (id) => `${BASE_ADDRESS()}/v2/threats/${id}`
export const GET_STATIC_THREATS= () => `${BASE_ADDRESS()}/v2/threats/static`
export const GET_AGENTS_BY_HIGH= () => `${BASE_ADDRESS()}/v2/threats/agent`

export const POST_RISK = ()=>BASE_ADDRESS()+'/v2/risks';
export const GET_ALL_RISKS = ()=>BASE_ADDRESS()+'/v2/risks';
export const DELETE_RISK= (id) => `${BASE_ADDRESS()}/v2/risks/${id}`
export const GET_RISK_BY_ID = (riskId)=>BASE_ADDRESS()+'/v2/riskcalc?riskId=${riskId}';
export const GET_STATIC_RISKS= () => `${BASE_ADDRESS()}/v2/risks/static`

export const POST_RISK_ASSET= () => `${BASE_ADDRESS()}/v2/risk-asset`


export const RECOMMENDATIONS = ()=>BASE_ADDRESS()+'/v2/dashboard/rec';