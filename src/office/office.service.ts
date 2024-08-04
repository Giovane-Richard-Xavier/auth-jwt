import { Injectable } from '@nestjs/common';
import { CreateOfficeDto } from './dto/create-office.dto';
import { UpdateOfficeDto } from './dto/update-office.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { OfficeEntity } from './entities/office.entity';

@Injectable()
export class OfficeService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createOfficeDto: CreateOfficeDto): Promise<OfficeEntity> {
    return await this.prisma.office.create({
      data: createOfficeDto,
    });
  }

  async findAll(): Promise<OfficeEntity[]> {
    return  await this.prisma.office.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} office`;
  }

  update(id: number, updateOfficeDto: UpdateOfficeDto) {
    return `This action updates a #${id} office`;
  }

  remove(id: number) {
    return `This action removes a #${id} office`;
  }
}
