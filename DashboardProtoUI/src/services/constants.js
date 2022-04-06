export const BASE_ADDRESS = () => 'http://localhost:5000/api'
export const GET_ALL_TEST = () => `${BASE_ADDRESS()}/v2/tests`
export const LOGIN = ()=> `${BASE_ADDRESS()}/v2/login`;
export const COMPANYASSETS = (id)=>`${BASE_ADDRESS()}/v2/assets/company/${id}`;

