declare const _default: (() => {
    google: {
        projectID: string;
        credentials: {
            client_email: string;
            private_key: string;
        };
    };
    redis: {
        url: string;
        cacheTimeOut: string;
    };
    email: {
        user: string;
        pass: string;
    };
    front: {
        host: string;
    };
    linkedin: {
        clientID: string;
        clientSecret: string;
    };
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    google: {
        projectID: string;
        credentials: {
            client_email: string;
            private_key: string;
        };
    };
    redis: {
        url: string;
        cacheTimeOut: string;
    };
    email: {
        user: string;
        pass: string;
    };
    front: {
        host: string;
    };
    linkedin: {
        clientID: string;
        clientSecret: string;
    };
}>;
export default _default;
