import { TestDto } from "../../domain/dtos/TestDto"
// import User from "../../Infrastructure/db/models/User"
import db from "../../Infrastructure/db/models"

export const toEntity = (testDto: TestDto) => {
    let testEntity = new db.Test();
    testEntity.id = testDto.Id;
    testEntity.title = testDto.title
    return testEntity;
}