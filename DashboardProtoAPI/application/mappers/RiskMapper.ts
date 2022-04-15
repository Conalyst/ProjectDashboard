import { RiskDto } from "../../domain/dtos/RiskDto"
import db from "../../Infrastructure/db/models"

export const toEntity = (riskDto: RiskDto) => {
    let riskEntity = new db.Risk();
    riskEntity.id = riskDto.Id;
    riskEntity.category = riskDto.category;
    riskEntity.title = riskDto.title;
    riskEntity.description = riskDto.description;
    riskEntity.impact = riskDto.impact;
    riskEntity.likelihood = riskDto.likelihood;
    riskEntity.rating = riskDto.rating;
    return riskEntity;
}