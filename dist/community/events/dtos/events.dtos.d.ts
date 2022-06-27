import { Timestamp } from '@google-cloud/firestore';
export declare class CreateEventsDto {
    static collectionName: string;
    id: string;
    name: string;
    organizator: string;
    location: string;
    state: string;
    ZIPcode: string;
    country: string;
    coverImg: string;
    description: string;
    price: string;
    categories: Array<string>;
    endTime: Timestamp;
    iniTime: Timestamp;
    published: boolean;
}
export declare class GetEventsDto extends CreateEventsDto {
    assistants: Array<string>;
    createdAt: Timestamp;
    updatedAt: Timestamp;
}
declare const UpdateEventsDto_base: import("@nestjs/common").Type<Partial<GetEventsDto>>;
export declare class UpdateEventsDto extends UpdateEventsDto_base {
}
export {};
