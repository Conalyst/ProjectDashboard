"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiskDto = void 0;
class RiskDto {
    constructor(id, category, title, description, impact, likelihood, rating, createAt) {
        this.Id = id;
        this.category = category;
        this.title = title;
        this.description = description;
        this.impact = impact;
        this.likelihood = likelihood;
        this.rating = rating;
        this.CreatedAt = createAt;
        this.UpdatedAt = null;
    }
}
exports.RiskDto = RiskDto;
