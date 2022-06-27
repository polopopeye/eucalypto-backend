"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OauthService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const config_1 = require("../../config");
let OauthService = class OauthService {
    constructor() {
        this.configuration = (0, config_1.default)();
    }
    async linkedInOauth(body) {
        const { authCode, uri } = body;
        const client_id = this.configuration.linkedin.clientID;
        const client_secret = this.configuration.linkedin.clientSecret;
        const response = {
            email: {},
            profile: {},
        };
        await (0, axios_1.default)({
            method: 'post',
            params: {
                code: authCode,
                client_id: client_id,
                client_secret: client_secret,
                redirect_uri: uri,
                grant_type: 'authorization_code',
            },
            url: 'https://www.linkedin.com/uas/oauth2/accessToken',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
            .then(async (res) => {
            const accesToken = res.data.access_token;
            if (accesToken) {
                await axios_1.default
                    .get('https://api.linkedin.com/v2/clientAwareMemberHandles?q=members&projection=(elements*(primary,type,handle~))', {
                    headers: {
                        Authorization: `Bearer ${accesToken}`,
                    },
                })
                    .then((res) => {
                    response.email = res.data;
                    return res.data;
                })
                    .catch((err) => {
                    console.log('🚀 ~ file: oauth.service.ts ~ line 48 ~ OauthService ~ .then ~ err', err);
                });
                await axios_1.default
                    .get('https://api.linkedin.com/v2/me', {
                    headers: {
                        Authorization: `Bearer ${accesToken}`,
                    },
                })
                    .then((res) => {
                    response.profile = res.data;
                    return res.data;
                })
                    .catch((err) => {
                    console.log('🚀 ~ file: oauth.service.ts ~ line 48 ~ OauthService ~ .then ~ err', err);
                });
            }
            else {
                console.log('🚀 ~ file: oauth.service.ts ~ line 57 ~ OauthService ~ .then ~ empty');
            }
        })
            .catch((err) => {
            console.log('🚀 ~ file: oauth.service.ts ~ line 55 ~ OauthService ~ linkedInOauth ~ err', err);
        });
        return response;
    }
};
OauthService = __decorate([
    (0, common_1.Injectable)()
], OauthService);
exports.OauthService = OauthService;
//# sourceMappingURL=oauth.service.js.map