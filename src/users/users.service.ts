import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Role } from './entities/role.enum';

// export type User = {
//     id: number;
//     name: string;
//     username: string;
//     password: string;
// }

@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            id: 1,
            name: "Kasun",
            username: "kasun",
            password: "kasun",
            roles: [Role.ADMIN]
        },
        {
            id: 2,
            name: "Nuwan",
            username: "nuwan",
            password: "nuwan",
            roles: [Role.USER]
        }
    ]

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user=>user.username === username);
    }
}
