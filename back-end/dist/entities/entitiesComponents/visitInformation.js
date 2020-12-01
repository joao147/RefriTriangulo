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
var visit_1 = __importDefault(require("../visit"));
var VisitInformation = /** @class */ (function () {
    function VisitInformation() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('increment'),
        __metadata("design:type", Number)
    ], VisitInformation.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ length: '20' }),
        __metadata("design:type", String)
    ], VisitInformation.prototype, "equipamentType", void 0);
    __decorate([
        typeorm_1.Column({ length: '50' }),
        __metadata("design:type", String)
    ], VisitInformation.prototype, "equipamentBrand", void 0);
    __decorate([
        typeorm_1.Column({ length: '50' }),
        __metadata("design:type", String)
    ], VisitInformation.prototype, "equipamentModel", void 0);
    __decorate([
        typeorm_1.Column({ length: '50' }),
        __metadata("design:type", String)
    ], VisitInformation.prototype, "equipamentSerie", void 0);
    __decorate([
        typeorm_1.Column({ length: '50' }),
        __metadata("design:type", String)
    ], VisitInformation.prototype, "problem", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return visit_1.default; }, function (visit) { return visit.visitInformation; }),
        typeorm_1.JoinColumn({ name: 'visitId' }),
        __metadata("design:type", visit_1.default)
    ], VisitInformation.prototype, "visit", void 0);
    VisitInformation = __decorate([
        typeorm_1.Entity('visit_information')
    ], VisitInformation);
    return VisitInformation;
}());
exports.default = VisitInformation;
