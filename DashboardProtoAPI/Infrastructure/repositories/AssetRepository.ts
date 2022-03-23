import { BaseRepository } from "../contracts/BaseRepository"
import  {AssetEntity as Asset}  from "../db/models/Asset"
import { CompanyEntity as Company } from "../db/models/Company";


export class AssetRepository {
    constructor(){
    }
    public async Get(): Promise<Asset[]>{
        let assets  = await Asset.findAll();
        return assets;
    }   
    public async GetById(id:number): Promise<Asset | null>{
      return Asset.findByPk(id); 
    }

    public async GetByCompanyId(id:number): Promise<Company | null>{
      // return Company.findByPk(id); 
    }
}