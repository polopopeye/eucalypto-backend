import { CreateUserDto, UpdateUserDto } from '../dtos/users.dtos';
import { UsersService } from '../services/users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<any[]>;
    create(body: CreateUserDto): Promise<any>;
    manualCreate(body: CreateUserDto): Promise<any>;
    findBy(prop: string, value: string): Promise<any[]>;
    update(id: string, body: UpdateUserDto): Promise<any>;
    delete(id: string): Promise<any>;
}
