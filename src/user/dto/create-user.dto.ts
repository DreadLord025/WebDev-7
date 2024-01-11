import { IsEmail, MinLength } from "class-validator";

export class CreateUserDto {
    @IsEmail()
    email: string;

    @MinLength(6, { message: 'Change password on 6 or above symbols'})
    password: string;
}
