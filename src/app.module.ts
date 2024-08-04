import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { DepartmentModule } from './department/department.module';
import { OfficeModule } from './office/office.module';

@Module({
  imports: [PrismaModule, UsersModule, DepartmentModule, OfficeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
