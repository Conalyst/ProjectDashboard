"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetDto = void 0;
class AssetDto {
    constructor(id, categoryId, title, description, confidentiality, integrity, availability, rating, createAt) {
        this.Id = id;
        this.categoryId = categoryId;
        this.title = title;
        this.description = description;
        this.confidentiality = confidentiality;
        this.integrity = integrity;
        this.availability = availability;
        this.rating = rating;
        this.CreatedAt = createAt;
        this.UpdatedAt = null;
    }
}
exports.AssetDto = AssetDto;
