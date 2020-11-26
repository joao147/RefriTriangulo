import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from 'typeorm';
import * as bcrypt from 'bcryptjs'

@Entity('user')
export default class user{

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({length: '100', nullable: false, unique: true })
  email: string;

  @Column({length: '255', nullable: false})
  password: string;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 13);
  }
}