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
var visit_1 = __importDefault(require("../entities/visit"));
var getDateToString_1 = __importDefault(require("../util/getDateToString"));
var getHourToString_1 = __importDefault(require("../util/getHourToString"));
exports.default = {
    index: function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var visitRepository, allVisit;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        visitRepository = typeorm_1.getRepository(visit_1.default);
                        return [4 /*yield*/, visitRepository.find({ relations: ['visitInformation'], where: { status: 0 } })];
                    case 1:
                        allVisit = _a.sent();
                        return [2 /*return*/, response.json(allVisit)];
                }
            });
        });
    },
    show: function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var visitRepository, id, visit;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        visitRepository = typeorm_1.getRepository(visit_1.default);
                        id = request.params.id;
                        return [4 /*yield*/, visitRepository.findOne(id, { relations: ['visitInformation'] })];
                    case 1:
                        visit = _a.sent();
                        return [2 /*return*/, response.json(visit)];
                }
            });
        });
    },
    create: function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, document, adress, contact, secondContact, technician, visitInformation, visitDate, visitHour, data, schema, visitRepository, newVisit;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, name = _a.name, document = _a.document, adress = _a.adress, contact = _a.contact, secondContact = _a.secondContact, technician = _a.technician, visitInformation = _a.visitInformation;
                        visitDate = getDateToString_1.default(new Date());
                        visitHour = getHourToString_1.default(new Date());
                        data = {
                            name: name,
                            document: document,
                            adress: adress,
                            contact: contact,
                            secondContact: secondContact,
                            technician: technician,
                            visitInformation: visitInformation,
                            visitDate: visitDate,
                            visitHour: visitHour
                        };
                        schema = Yup.object().shape({
                            name: Yup.string().required(),
                            document: Yup.string().required(),
                            adress: Yup.string().required(),
                            contact: Yup.string().required(),
                            secondContact: Yup.string().notRequired(),
                            technician: Yup.string().required(),
                            visitInformation: Yup.array(Yup.object().shape({
                                equipamentType: Yup.string().required(),
                                equipamentBrand: Yup.string().required(),
                                equipamentModel: Yup.string().required(),
                                equipamentSerie: Yup.string().required(),
                                problem: Yup.string().required(),
                            })),
                            visitDate: Yup.string().required(),
                            visitHour: Yup.string().required(),
                        });
                        return [4 /*yield*/, schema.isValid(data, {
                                abortEarly: false
                            })];
                    case 1:
                        _b.sent();
                        visitRepository = typeorm_1.getRepository(visit_1.default);
                        newVisit = visitRepository.create(data);
                        return [4 /*yield*/, visitRepository.save(newVisit)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, response.status(201).json({ message: 'sucess' })];
                }
            });
        });
    }
};
