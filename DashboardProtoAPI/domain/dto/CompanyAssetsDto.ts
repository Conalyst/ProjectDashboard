import { IBaseDto } from "../cotracts/IBaseDto";
import { Optional } from 'sequelize/types'
import { CreateAssetDTO } from "./AssetDto";

export type CreateCompanyAssetsListDTO = {
  confidentiality: string;
  integrity: string;
  availability: string;
  rating: string;
  Assets?: CreateAssetDTO[]
}

//                  