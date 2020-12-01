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
var postVisit_1 = __importDefault(require("../postVisit"));
var Material = /** @class */ (function () {
    function Material() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('increment'),
        __metadata("design:type", Number)
    ], Material.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ length: '50' }),
        __metadata("design:type", String)
    ], Material.prototype, "material", void 0);
    __decorate([
        typeorm_1.Column({ type: 'decimal', precision: 10, scale: 2 }),
        __metadata("design:type", Number)
    ], Material.prototype, "materialPrice", void 0);
    __decorate([
        typeorm_1.Column({ length: '10' }),
        __metadata("design:type", String)
    ], Material.prototype, "guarantee", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return postVisit_1.default; }, function (postVisit) { return postVisit.material; }),
        typeorm_1.JoinColumn({ name: 'postVisitId' }),
        __metadata("design:type", postVisit_1.default)
    ], Material.prototype, "postVisit", void 0);
    Material = __decorate([
        typeorm_1.Entity('material')
    ], Material);
    return Material;
}());
exports.default = Material;
