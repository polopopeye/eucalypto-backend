import { Timestamp } from '@google-cloud/firestore';
export declare class ParentCategoryDto {
    static collectionName: string;
    id: string;
    name: string;
    type: string;
}
export declare class CreateCategoriesDto {
    static collectionName: string;
    id: string;
    name: string;
    type: string;
    published: boolean;
}
export declare class GetCategoriesDto extends CreateCategoriesDto {
    createdAt: Timestamp;
    updatedAt: Timestamp;
}
declare const UpdateCategoriesDto_base: import("@nestjs/common").Type<Partial<GetCategoriesDto>>;
export declare class UpdateCategoriesDto extends UpdateCategoriesDto_base {
}
export {};
