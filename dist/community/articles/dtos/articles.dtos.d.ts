import { Timestamp } from '@google-cloud/firestore';
export declare class CreateArticlesDto {
    static collectionName: string;
    id: string;
    name: string;
    article: string;
    author: string;
    coverImg: string;
    description: string;
    categories: Array<string>;
    published: boolean;
}
export declare class GetArticlesDto extends CreateArticlesDto {
    createdAt: Timestamp;
    updatedAt: Timestamp;
}
declare const UpdateArticlesDto_base: import("@nestjs/common").Type<Partial<GetArticlesDto>>;
export declare class UpdateArticlesDto extends UpdateArticlesDto_base {
}
export {};
