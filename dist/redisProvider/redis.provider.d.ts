export declare class RedisProvider {
    private configuration;
    private readonly redisClient;
    constructor();
    get(key: string): Promise<any>;
    update(key: string, value: any): Promise<boolean>;
    delete(key: string): Promise<boolean>;
    getKeys(pattern: string): Promise<string[]>;
    getAllKeys(): Promise<string[]>;
    getKeysInclude(pattern: string): Promise<any[]>;
}
