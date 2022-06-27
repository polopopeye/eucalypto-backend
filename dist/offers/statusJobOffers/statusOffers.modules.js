"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusOffersModule = void 0;
const common_1 = require("@nestjs/common");
const redis_provider_1 = require("../../redisProvider/redis.provider");
const statusOffers_controllers_1 = require("./controllers/statusOffers.controllers");
const statusOffers_service_1 = require("./services/statusOffers.service");
let StatusOffersModule = class StatusOffersModule {
};
StatusOffersModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [statusOffers_controllers_1.StatusOffersController],
        providers: [statusOffers_service_1.StatusOffersService, redis_provider_1.RedisProvider],
        exports: [],
    })
], StatusOffersModule);
exports.StatusOffersModule = StatusOffersModule;
//# sourceMappingURL=statusOffers.modules.js.map