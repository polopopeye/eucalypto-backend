import { OauthService } from '../services/oauth.service';
export declare class customOauthController {
    private oauthService;
    constructor(oauthService: OauthService);
    linkedInOauth(body: any): Promise<any>;
}
