import express from 'express'
import  {AssetRepository as Asset} from '../Infrastructure/repositories/AssetRepository'
export class AssetApi{
    private _asset:any;
    constructor(){
        this._asset = new Asset();
    }
    
    async getAllAssets(req: express.Request, res: express.Response){
      let assetList = await this._asset.Get();
      return  res.status(200).json(assetList);
    };

    // async getAssetsById(req: express.Request, res: express.Response){
    //   let assetId = req.params.id;
    //   console.log("asset id is:" , assetId);
    //   // let asset = await this._asset.GetById(assetId);
    //   // return  res.status(200).json(asset);
    // };
}


// app.get(
//   "/read/:id",
//   TodoValidator.findParam(),
//   Middleware.handleValidationError,
//   async (req: Request, res: Response) => {
//     const id = req.params.id;
//     console.log("id is: ", id);
//     try {
//       const record = await TodoInterface.findOne({ where: { id: id } });
//       return res.json({ record, msg: "find this record" });
//     } catch (err) {
//       return res.json({
//         msg: " failed to find this record",
//         status: 500,
//         route: "/read/:id",
//       });
//     }
//   }
// );