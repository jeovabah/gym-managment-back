import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: any): Promise<import("@prisma/client/runtime").GetResult<{
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
