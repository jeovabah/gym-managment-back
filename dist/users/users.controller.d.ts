import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        email: string;
        name: string;
        password: string;
        role: import(".prisma/client").UserRole;
        createdAt: Date;
        updatedAt: Date;
        payRate: number;
    }, unknown, never> & {}>;
    findAll(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        email: string;
        name: string;
        password: string;
        role: import(".prisma/client").UserRole;
        createdAt: Date;
        updatedAt: Date;
        payRate: number;
    }, unknown, never> & {})[]>;
    findOne(id: string): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        email: string;
        name: string;
        password: string;
        role: import(".prisma/client").UserRole;
        createdAt: Date;
        updatedAt: Date;
        payRate: number;
    }, unknown, never> & {}>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        email: string;
        name: string;
        password: string;
        role: import(".prisma/client").UserRole;
        createdAt: Date;
        updatedAt: Date;
        payRate: number;
    }, unknown, never> & {}>;
    remove(id: string): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        email: string;
        name: string;
        password: string;
        role: import(".prisma/client").UserRole;
        createdAt: Date;
        updatedAt: Date;
        payRate: number;
    }, unknown, never> & {}>;
}
