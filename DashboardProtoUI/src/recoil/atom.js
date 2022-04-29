import { atom } from 'recoil' 

export const assetId = atom({
  key: "assetId",
  default: "",
})

export const asset = atom({
  key: "asset",
  default: {},
})

export const risk = atom({
  key: "risk",
  default: [],
})

export const vulnerabilities = atom({
  key: "vulnerabilities",
  default: [],
})

export const threats = atom({
  key: "threats",
  default: [],
})


