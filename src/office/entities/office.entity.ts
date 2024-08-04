import { Office } from "@prisma/client";

export class OfficeEntity implements Office {
    id: string;
    name: string;
    code: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}
