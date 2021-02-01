import { IsNotEmpty } from 'class-validator';

export class UserDTO{
    id: number;

    username: string;

    password: string;

    createTime: Date;
}

export class UserCreateDTO{

    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    password: string;
}

export class UserUpdateDTO{

    @IsNotEmpty()
    id: string;

    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    password: string;
}

export class UserLoginDTO{
    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    password: string;
}