import { ThreatDto } from "../../domain/dtos/ThreatDto"
import db from "../../Infrastructure/db/models"

export const toEntity = (ThreatDto: ThreatDto) => {
    let threatEntity = new db.Threat();
    threatEntity.id = ThreatDto.Id;
    threatEntity.category = ThreatDto.category;
    threatEntity.agent = ThreatDto.agent;
    threatEntity.title = ThreatDto.title;
    threatEntity.description = ThreatDto.description;
    threatEntity.impact = ThreatDto.impact;
    threatEntity.likelihood = ThreatDto.likelihood;
    threatEntity.rating = ThreatDto.rating;
    return threatEntity;
}