import { $Enums, User } from "@prisma/client";

export class UserEntity implements User {
    id: string;
    full_name: string;
    birtdate: string;
    cpf: string;
    password_hash: string;
    email: string;
    phone: string;
    is_active: boolean;
    role: $Enums.user_role;
    department_id: string;
    office_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}
