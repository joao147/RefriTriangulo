"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var visit_1 = __importDefault(require("./visit"));
var material_1 = __importDefault(require("./entitiesComponents/material"));
var PostVisit = /** @class */ (function () {
    function PostVisit() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('increment'),
        __metadata("design:type", Number)
    ], PostVisit.prototype, "id", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return material_1.default; }, function (material) { return material.postVisit; }, {
            cascade: ['insert', 'update']
        }),
        __metadata("design:type", Array)
    ], PostVisit.prototype, "material", void 0);
    __decorate([
        typeorm_1.Column({ type: 'decimal', precision: 10, scale: 2 }),
        __metadata("design:type", Number)
    ], PostVisit.prototype, "laborPrice", void 0);
    __decorate([
        typeorm_1.Column({ type: 'decimal', precision: 10, scale: 2 }),
        __metadata("design:type", Number)
    ], PostVisit.prototype, "totalPrice", void 0);
    __decorate([
        typeorm_1.OneToOne(function (type) { return visit_1.default; }, function (visit) { return visit.postVisit; }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", visit_1.default)
    ], PostVisit.prototype, "visit", void 0);
    PostVisit = __decorate([
        typeorm_1.Entity('post_visit')
    ], PostVisit);
    return PostVisit;
}());
exports.default = PostVisit;
