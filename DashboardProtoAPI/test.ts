// import express from 'express'

// import  {TestRepository} from './Infrastructure/repositories/TestRepository'
// export class TestApi{
//     private _testRepository:any;
//     constructor(){
//         this._testRepository = new TestRepository();
//     }
    
//     async getAll(req: express.Request, res: express.Response){
//         let testsList = await this._testRepository.Get();
//         return  res.status(200).json(testsList);
//     };
//     async create(req: express.Request, res: express.Response){
//         console.log("in create ", req.body)
//         // const commentDto = this.getDtoFromRequest(req);
        
//         // let createComment = await this._commentsRepository.Create(toEntity(commentDto))
//         // if(createComment){
//         //     console.log('comment created', createComment);
//         //     return res.status(201).json(createComment);
//         // }else{
//         //     return res.status(400).send("The comment could not be created. Please check the provided data.")
//         // }
//     }

//     // getDtoFromRequest(req: express.Request){
//     //     return new CommentDto(req.body.id, new Date(), req.body.userId, 
//     //     req.body.restaurantId,req.body.Comment);
//     // }
// }

