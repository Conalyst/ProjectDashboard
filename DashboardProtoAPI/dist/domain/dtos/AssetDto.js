"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetDto = void 0;
class AssetDto {
    constructor(id, categoryId, title, description, createAt) {
        this.Id = id;
        this.categoryId = categoryId;
        this.title = title;
        this.description = description;
        this.CreatedAt = createAt;
        this.UpdatedAt = null;
    }
}
exports.AssetDto = AssetDto;
