import { CreateEventsDto, UpdateEventsDto } from '../dtos/events.dtos';
import { EventsService } from '../services/events.service';
export declare class EventsController {
    private eventsService;
    constructor(eventsService: EventsService);
    findAll(): Promise<any[]>;
    create(body: CreateEventsDto): Promise<CreateEventsDto>;
    findBy(prop: string, value: string): Promise<any[]>;
    update(id: string, body: UpdateEventsDto): Promise<any>;
    delete(id: string): Promise<any>;
}
