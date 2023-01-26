import { AfterInsert, AfterRemove, AfterUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Report } from "../reports/report.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password:string;

  @OneToMany(()=> Report, (report) => report.user)
  reports:Report[];

  @Column({default:false})
  admin:boolean;

  @AfterInsert()
  logInsert(){
    console.log("user created")
  }
  @AfterUpdate()
  logUpdate(){
    console.log("user updated ")
  }
  @AfterRemove()
  logRemove(){
    console.log("user removed")
  }
}