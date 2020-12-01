"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Yup = __importStar(require("yup"));
var postVisit_1 = __importDefault(require("../entities/postVisit"));
var visit_1 = __importDefault(require("../entities/visit"));
exports.default = {
    index: function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var filters, name, visitDate, postVisitRepository, allPostVitis;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filters = request.query;
                        name = filters.name;
                        visitDate = filters.visitDate;
                        return [4 /*yield*/, typeorm_1.getRepository(postVisit_1.default)];
                    case 1:
                        postVisitRepository = _a.sent();
                        if (!(name !== '' && visitDate !== '')) return [3 /*break*/, 3];
                        return [4 /*yield*/, postVisitRepository.createQueryBuilder('post_visit')
                                .leftJoinAndSelect('post_visit.visit', 'visit')
                                .where('visit.name LIKE :name', { name: name + "%" })
                                .andWhere('visit.visitDate = :visitDate', { visitDate: visitDate })
                                .getMany()];
                    case 2:
                        allPostVitis = _a.sent();
                        return [3 /*break*/, 9];
                    case 3:
                        if (!(name !== '')) return [3 /*break*/, 5];
                        return [4 /*yield*/, postVisitRepository.createQueryBuilder('post_visit')
                                .leftJoinAndSelect('post_visit.visit', 'visit')
                                .where('visit.name LIKE :name', { name: name + "%" })
                                .getMany()];
                    case 4:
                        allPostVitis = _a.sent();
                        return [3 /*break*/, 9];
                    case 5:
                        if (!(visitDate !== '')) return [3 /*break*/, 7];
                        return [4 /*yield*/, postVisitRepository.createQueryBuilder('post_visit')
                                .leftJoinAndSelect('post_visit.visit', 'visit')
                                .where('visit.visitDate = :visitDate', { visitDate: visitDate })
                                .getMany()];
                    case 6:
                        allPostVitis = _a.sent();
                        return [3 /*break*/, 9];
                    case 7: return [4 /*yield*/, postVisitRepository.find({
                            relations: ['visit', 'material', 'visit.visitInformation']
                        })];
                    case 8:
                        allPostVitis = _a.sent();
                        _a.label = 9;
                    case 9: return [2 /*return*/, response.json(allPostVitis)];
                }
            });
        });
    },
    show: function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var postVisitRepository, id, postVisit;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, typeorm_1.getRepository(postVisit_1.default)];
                    case 1:
                        postVisitRepository = _a.sent();
                        id = request.params.id;
                        return [4 /*yield*/, postVisitRepository.findOneOrFail(id, { relations: ['visit', 'material', 'visit.visitInformation'] })];
                    case 2:
                        postVisit = _a.sent();
                        return [2 /*return*/, response.json(postVisit)];
                }
            });
        });
    },
    create: function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, material, laborPrice, visitId, totalPrice, visit, data, schema, postVisitRepository, newPostVisit;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, material = _a.material, laborPrice = _a.laborPrice, visitId = _a.visitId;
                        totalPrice = Number(laborPrice);
                        material.forEach(function (material) { totalPrice = totalPrice + Number(material.materialPrice); });
                        return [4 /*yield*/, typeorm_1.getRepository(visit_1.default).findOneOrFail(visitId)];
                    case 1:
                        visit = _b.sent();
                        data = {
                            material: material,
                            laborPrice: laborPrice,
                            totalPrice: totalPrice,
                            visit: visit
                        };
                        schema = Yup.object().shape({
                            material: Yup.array(Yup.object().shape({
                                material: Yup.string().required(),
                                materialPrice: Yup.number().required(),
                                guarantee: Yup.string().required()
                            })),
                            priceLabor: Yup.number().required(),
                            totalPrice: Yup.number().required(),
                            visitId: Yup.number().required()
                        });
                        return [4 /*yield*/, schema.isValid(data, {
                                abortEarly: false
                            })];
                    case 2:
                        _b.sent();
                        postVisitRepository = typeorm_1.getRepository(postVisit_1.default);
                        newPostVisit = postVisitRepository.create(data);
                        return [4 /*yield*/, postVisitRepository.save(newPostVisit)];
                    case 3:
                        _b.sent();
                        visit.status = true;
                        return [4 /*yield*/, typeorm_1.getRepository(visit_1.default).save(visit)];
                    case 4:
                        _b.sent();
                        return [2 /*return*/, response.sendStatus(201)];
                }
            });
        });
    }
};
