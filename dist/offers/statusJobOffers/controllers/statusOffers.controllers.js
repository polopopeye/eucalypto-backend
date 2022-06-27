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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusOffersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const statusOffers_dtos_1 = require("../dtos/statusOffers.dtos");
const statusOffers_service_1 = require("../services/statusOffers.service");
let StatusOffersController = class StatusOffersController {
    constructor(statusOffersService) {
        this.statusOffersService = statusOffersService;
    }
    findAll() {
        return this.statusOffersService.findAll();
    }
    create(body) {
        return this.statusOffersService.create(body);
    }
    findBy(userId, jobId) {
        return this.statusOffersService.findBy(userId, jobId);
    }
    update(id, body) {
        return this.statusOffersService.update(id, body);
    }
    deleteById(id) {
        return this.statusOffersService.deleteById(id);
    }
    delete(id, idJobOffer) {
        return this.statusOffersService.delete(id, idJobOffer);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'List all the status job offers' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StatusOffersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new status job offer' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [statusOffers_dtos_1.CreateStatusOffersDto]),
    __metadata("design:returntype", void 0)
], StatusOffersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':userId/:jobId'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new status job offer' }),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('jobId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], StatusOffersController.prototype, "findBy", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update status job offer' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, statusOffers_dtos_1.StatusUpdateOffersDto]),
    __metadata("design:returntype", void 0)
], StatusOffersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id/'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete status job offer by id' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StatusOffersController.prototype, "deleteById", null);
__decorate([
    (0, common_1.Delete)(':id/:idJobOffer'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete all status job offer By UserID and JobID' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('idJobOffer')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], StatusOffersController.prototype, "delete", null);
StatusOffersController = __decorate([
    (0, swagger_1.ApiTags)('StatusJobOffers'),
    (0, common_1.Controller)('status-job-offers'),
    __metadata("design:paramtypes", [statusOffers_service_1.StatusOffersService])
], StatusOffersController);
exports.StatusOffersController = StatusOffersController;
//# sourceMappingURL=statusOffers.controllers.js.map