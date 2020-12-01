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
var visitInformation_1 = __importDefault(require("./entitiesComponents/visitInformation"));
var postVisit_1 = __importDefault(require("./postVisit"));
var Visit = /** @class */ (function () {
    function Visit() {
        this.status = false;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('increment'),
        __metadata("design:type", Number)
    ], Visit.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ length: '100' }),
        __metadata("design:type", String)
    ], Visit.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({ length: '20' }),
        __metadata("design:type", String)
    ], Visit.prototype, "document", void 0);
    __decorate([
        typeorm_1.Column({ length: '100' }),
        __metadata("design:type", String)
    ], Visit.prototype, "adress", void 0);
    __decorate([
        typeorm_1.Column({ length: '20' }),
        __metadata("design:type", String)
    ], Visit.prototype, "contact", void 0);
    __decorate([
        typeorm_1.Column({ length: '20' }),
        __metadata("design:type", String)
    ], Visit.prototype, "secondContact", void 0);
    __decorate([
        typeorm_1.Column({ length: '100' }),
        __metadata("design:type", String)
    ], Visit.prototype, "technician", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return visitInformation_1.default; }, function (visitInformation) { return visitInformation.visit; }, {
            cascade: ['insert', 'update']
        }),
        __metadata("design:type", Array)
    ], Visit.prototype, "visitInformation", void 0);
    __decorate([
        typeorm_1.Column({ length: '12' }),
        __metadata("design:type", String)
    ], Visit.prototype, "visitDate", void 0);
    __decorate([
        typeorm_1.Column({ length: '8' }),
        __metadata("design:type", String)
    ], Visit.prototype, "visitHour", void 0);
    __decorate([
        typeorm_1.Column({ type: 'boolean' }),
        __metadata("design:type", Boolean)
    ], Visit.prototype, "status", void 0);
    __decorate([
        typeorm_1.OneToOne(function (type) { return postVisit_1.default; }, function (postVisit) { return postVisit.visit; }),
        __metadata("design:type", postVisit_1.default)
    ], Visit.prototype, "postVisit", void 0);
    Visit = __decorate([
        typeorm_1.Entity('visit')
    ], Visit);
    return Visit;
}());
exports.default = Visit;
