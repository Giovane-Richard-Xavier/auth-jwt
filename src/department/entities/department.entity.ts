import { Department } from "@prisma/client";

export class DepartmentEntity implements Department {
    id: string;
    name: string;
    code: number;
    abbreviation: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}
