"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreatDto = void 0;
class ThreatDto {
    constructor(id, category, agent, title, description, impact, likelihood, rating, indexRating, createAt) {
        this.Id = id;
        this.category = category;
        this.agent = agent;
        this.title = title;
        this.description = description;
        this.impact = impact;
        this.likelihood = likelihood;
        this.rating = rating;
        this.indexRating = indexRating;
        this.CreatedAt = createAt;
        this.UpdatedAt = null;
    }
}
exports.ThreatDto = ThreatDto;
