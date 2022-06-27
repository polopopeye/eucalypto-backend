import { CollectionReference } from '@google-cloud/firestore';
import { CreateEventsDto, UpdateEventsDto } from '../dtos/events.dtos';
export declare class EventsService {
    private collection;
    constructor(collection: CollectionReference<CreateEventsDto>);
    create(events: any): Promise<CreateEventsDto>;
    findAll(): Promise<any[]>;
    findBy(prop: any, value: any): Promise<any[]>;
    update(id: string, changes: UpdateEventsDto): Promise<any>;
    delete(id: string): Promise<any>;
}
