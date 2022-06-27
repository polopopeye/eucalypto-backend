import { Timestamp } from '@google-cloud/firestore';
export declare class CreateCompanyDto {
    static collectionName: string;
    id: string;
    name: string;
    description: string;
    coverImg: string;
    web: string;
    linkedIn: string;
    email: string;
    phone: string;
    country: string;
    owners: Array<string>;
    published: boolean;
}
export declare class GetCompanyDto extends CreateCompanyDto {
    createdAt: Timestamp;
    updatedAt: Timestamp;
}
declare const UpdateCompanyDto_base: import("@nestjs/common").Type<Partial<GetCompanyDto>>;
export declare class UpdateCompanyDto extends UpdateCompanyDto_base {
}
export {};
