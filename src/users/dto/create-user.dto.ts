import { $Enums } from "@prisma/client";
import { IsBoolean, IsEmail, IsEnum, IsOptional, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    full_name: string;

    @IsString()
    birtdate: string;

    @IsString()
    cpf: string;

    @IsString()
    password_hash: string;

    @IsEmail()
    email: string;

    @IsString()
    phone: string;

    @IsBoolean()
    is_active: boolean;

    @IsEnum($Enums.user_role)
    role: $Enums.user_role;

    @IsString()
    @IsOptional()
    department_id?: string;

    @IsString()
    @IsOptional()
    office_id?: string;
}
