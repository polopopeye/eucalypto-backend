import { Timestamp } from '@google-cloud/firestore';
export declare class CreateUserDto {
    static collectionName: string;
    id: string;
    completeName: string;
    displayName: string;
    languages: Array<string>;
    categories: Array<string>;
    role: string;
    jobOffers: Array<{
        id: string;
        status: Array<string>;
    }>;
    coverImg: string;
    web: string;
    linkedIn: string;
    email: string;
    phone: string;
    github: string;
    location: string;
    curriculum: string;
    published: boolean;
}
export declare class GetUserDto extends CreateUserDto {
    createdAt: Timestamp;
    updatedAt: Timestamp;
}
declare const UpdateUserDto_base: import("@nestjs/common").Type<Partial<GetUserDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
}
export {};
