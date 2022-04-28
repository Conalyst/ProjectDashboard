import { atom } from 'recoil' 


export const asset = atom({
  key: "asset",
  default: {},
})

export const risk = atom({
  key: "risk",
  default: [],
})

export const vuln = atom({
  key: "vuln",
  default: [],
})

export const threat = atom({
  key: "threat",
  default: [],
})

