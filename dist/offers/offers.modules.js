"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OffersModule = void 0;
const common_1 = require("@nestjs/common");
const redis_provider_1 = require("../redisProvider/redis.provider");
const offers_controllers_1 = require("./controllers/offers.controllers");
const offers_service_1 = require("./services/offers.service");
const statusOffers_modules_1 = require("./statusJobOffers/statusOffers.modules");
let OffersModule = class OffersModule {
};
OffersModule = __decorate([
    (0, common_1.Module)({
        imports: [statusOffers_modules_1.StatusOffersModule],
        controllers: [offers_controllers_1.OffersController],
        providers: [offers_service_1.OffersService, redis_provider_1.RedisProvider],
        exports: [],
    })
], OffersModule);
exports.OffersModule = OffersModule;
//# sourceMappingURL=offers.modules.js.map