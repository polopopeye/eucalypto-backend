import { Timestamp } from '@google-cloud/firestore';
export declare class CreateOffersDto {
    static collectionName: string;
    id: string;
    company: string;
    job: string;
    fulltime: string;
    location: string;
    remote: boolean;
    description: string;
    salary: string;
    categories: Array<string>;
    deadLine: string;
    technologies: any;
    published: boolean;
}
export declare class GetOffersDto extends CreateOffersDto {
    applicants: Array<string>;
    createdAt: Timestamp;
    updatedAt: Timestamp;
}
declare const UpdateOffersDto_base: import("@nestjs/common").Type<Partial<GetOffersDto>>;
export declare class UpdateOffersDto extends UpdateOffersDto_base {
}
export {};
