import { Timestamp } from '@google-cloud/firestore';
export declare class CreateStatusOffersDto {
    static collectionName: string;
    id: string;
    idJob: string;
    idUser: string;
    status: string;
    description: string;
    published: boolean;
}
export declare class StatusGetOffersDto extends CreateStatusOffersDto {
    createdAt: Timestamp;
    updatedAt: Timestamp;
}
declare const StatusUpdateOffersDto_base: import("@nestjs/common").Type<Partial<StatusGetOffersDto>>;
export declare class StatusUpdateOffersDto extends StatusUpdateOffersDto_base {
}
export {};
