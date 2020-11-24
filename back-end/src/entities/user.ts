import { Entity, PrimaryGeneratedColumn, Column, AfterInsert, AfterUpdate } from 'typeorm';
import * as bcrypt from 'bcryptjs'

@Entity('user')
export default class user{

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({length: '100', nullable: false, unique: true })
  email: string;

  @Column({length: '255', nullable: false})
  password: string;

  @AfterInsert()
  @AfterUpdate()
  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 13);
  }
}