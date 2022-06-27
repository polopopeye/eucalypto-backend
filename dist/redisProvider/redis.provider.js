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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisProvider = void 0;
const common_1 = require("@nestjs/common");
const redis_1 = require("redis");
const config_1 = require("../config");
let RedisProvider = class RedisProvider {
    constructor() {
        this.configuration = (0, config_1.default)();
        this.redisClient = (0, redis_1.createClient)({
            url: this.configuration.redis.url,
        });
        this.redisClient.connect();
        this.redisClient.on('error', (err) => console.log('Redis Client Error', err));
        this.redisClient.on('connect', () => console.log('Redis Client Connected'));
    }
    async get(key) {
        const redisValue = await this.redisClient.get(key);
        return JSON.parse(redisValue);
    }
    async update(key, value) {
        const cacheTimeOut = parseInt(this.configuration.redis.cacheTimeOut);
        const parsedRedisValue = JSON.stringify(value);
        await this.redisClient.setEx(key, cacheTimeOut, parsedRedisValue);
        console.log('Redis updated');
        return true;
    }
    async delete(key) {
        await this.redisClient.del(key);
        console.log('Redis deleted');
        return true;
    }
    async getKeys(pattern) {
        const keys = await this.redisClient.keys(pattern);
        return keys;
    }
    async getAllKeys() {
        const keys = await this.redisClient.keys('*');
        return keys;
    }
    async getKeysInclude(pattern) {
        const keys = [];
        const redisKeys = await this.getAllKeys();
        redisKeys.forEach((key) => {
            if (key.includes(pattern)) {
                keys.push(key);
            }
        });
        return keys;
    }
};
RedisProvider = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], RedisProvider);
exports.RedisProvider = RedisProvider;
//# sourceMappingURL=redis.provider.js.map