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
exports.MailController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const mail_service_1 = require("./mail.service");
const config_1 = require("../config");
let MailController = class MailController {
    constructor(mailService) {
        this.mailService = mailService;
        this.configuration = (0, config_1.default)();
    }
    create(body) {
        const { user, jobOffer } = body;
        return this.mailService.sendToUserAppliedOk({ displayName: user.displayName, email: user.email }, {
            job: jobOffer.job,
            url: this.configuration.front.host + '/job/' + jobOffer.id,
        });
    }
    welcomeMsg(user) {
        return this.mailService.sendToUserWelcomeMail({
            displayName: user.displayName,
            email: user.email,
        });
    }
    statusUpdate(body) {
        const { user, jobOffer, statusDescription } = body;
        return this.mailService.sendToUserStatusChanged({
            displayName: user.displayName,
            email: user.email,
        }, {
            job: jobOffer.job,
            url: this.configuration.front.host + '/job/' + jobOffer.id,
        }, statusDescription);
    }
};
__decorate([
    (0, common_1.Post)('sendToUserAppliedOk'),
    (0, swagger_1.ApiOperation)({ summary: 'Send Email User Applied' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MailController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('sendToUserWelcomeMessage'),
    (0, swagger_1.ApiOperation)({ summary: 'Send Welcome Message' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MailController.prototype, "welcomeMsg", null);
__decorate([
    (0, common_1.Post)('sendToUserStatusChanged'),
    (0, swagger_1.ApiOperation)({ summary: 'Send Status Update' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MailController.prototype, "statusUpdate", null);
MailController = __decorate([
    (0, swagger_1.ApiTags)('Mail Service'),
    (0, common_1.Controller)('mail'),
    __metadata("design:paramtypes", [mail_service_1.MailService])
], MailController);
exports.MailController = MailController;
//# sourceMappingURL=mail.controllers.js.map