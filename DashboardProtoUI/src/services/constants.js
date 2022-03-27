export const BASE_ADDRESS = () => 'http://localhost:3002/api'
export const GET_ALL_TEST = () => `${BASE_ADDRESS()}/v2/tests`
export const LOGIN = ()=>BASE_ADDRESS()+'/v2/login';
export const ASSET = ()=>BASE_ADDRESS()+'/v2/dashboard/asset';