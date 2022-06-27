"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const config_1 = require("@nestjs/config");
const firestore_module_1 = require("./firestore/firestore.module");
const offers_modules_1 = require("./offers/offers.modules");
const categories_modules_1 = require("./categories/categories.modules");
const companies_modules_1 = require("./companies/companies.modules");
const community_module_1 = require("./community/community.module");
const users_modules_1 = require("./users/users.modules");
const mail_module_1 = require("./mail/mail.module");
const oauth_modules_1 = require("./customOauth/oauth.modules");
const config_2 = require("./config");
const Joi = require("joi");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: '.env',
                load: [config_2.default],
                isGlobal: true,
                validationSchema: Joi.object({
                    GOOGLE_PROJECT_ID: Joi.string().required(),
                    GOOGLE_CLIENT_EMAIL: Joi.string().required(),
                    GOOGLE_PRIVATE_KEY: Joi.string().required(),
                    REDIS_URL: Joi.string().required(),
                    REDIS_CACHE_TIME_SECONDS: Joi.number().required(),
                    EMAIL_USER: Joi.string().required(),
                    EMAIL_PASS: Joi.string().required(),
                    FRONT_HOST: Joi.string().required(),
                    LINKEDIN_CLIENT_ID: Joi.string().required(),
                    LINKEDIN_CLIENT_SECRET: Joi.string().required(),
                }),
            }),
            firestore_module_1.FirestoreModule.forRoot({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    projectId: configService.get('GOOGLE_PROJECT_ID'),
                    credentials: {
                        client_email: configService.get('GOOGLE_CLIENT_EMAIL'),
                        private_key: configService.get('GOOGLE_PRIVATE_KEY'),
                    },
                }),
                inject: [config_1.ConfigService],
            }),
            oauth_modules_1.OauthModule,
            community_module_1.CommunityModule,
            offers_modules_1.OffersModule,
            categories_modules_1.CategoriesModule,
            companies_modules_1.CompaniesModule,
            users_modules_1.UsersModule,
            mail_module_1.MailModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map