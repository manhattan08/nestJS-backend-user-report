import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./users/user.entity";
import { Report } from "./reports/report.entity";

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'andrey',
    password: 'root',
    database: 'nest',
    entities: [User,Report],
    synchronize: true,
  }),UsersModule, ReportsModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
