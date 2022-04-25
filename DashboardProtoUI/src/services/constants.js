 export const BASE_ADDRESS = () => 'http://localhost:5000/'
// export const BASE_ADDRESS = () => ``
export const GET_ALL_TEST = () => `${BASE_ADDRESS()}` + `api/v2/tests`
export const LOGIN = ()=>`${BASE_ADDRESS()}`+ `api/v2/login`;
// export const COMPANYASSETS = ()=>BASE_ADDRESS()+'/v2/assets/company/';
export const COMPANYASSETS = (id)=>`${BASE_ADDRESS()}` + `api/v2/assets/company/${id}`;
export const GET_ASSET_BY_COMPANY_ID = (companyId)=>`${BASE_ADDRESS()}`+`api/v2/dashboard/asset?companyId=${companyId}`;

export const GET_ALL_ASSETS = ()=>`${BASE_ADDRESS()}`+`api/v2/assets`;
export const GET_ASSET_BY_ID = (assetId)=>`${BASE_ADDRESS()}`+`api/v2/dashboard/asset?assetId=${assetId}`;
export const POST_ASSET= () => `${BASE_ADDRESS()}` + `api/v2/assets`


export const GET_ALL_VULNERABILITIES = ()=>`${BASE_ADDRESS()}`+`api/v2/vulnerabilities`;
export const GET_VULNERABILITY_BY_ID = (vulnerabilityId)=>`${BASE_ADDRESS()}`+`api/v2/vulnerability?vunerabilityId=${vulnerabilityId}`;
export const POST_VULNERABILITY = ()=>BASE_ADDRESS()+`api/v2/vulnerabilities`;

export const GET_ALL_THREATS = ()=>`${BASE_ADDRESS()}`+`api/v2/threats`;
export const GET_THREAT_BY_ID = (threatId)=>`${BASE_ADDRESS()}`+`api/v2/threat?threatId=${threatId}`;
export const POST_THREAT = ()=>`${BASE_ADDRESS()}`+`api/v2/threats`;


export const RECOMMENDATIONS = ()=>`${BASE_ADDRESS()}`+`api/v2/dashboard/rec`;