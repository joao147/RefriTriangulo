import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn} from 'typeorm'

import Visit from './visit';
import Material from './entitiesComponents/material'

@Entity('post_visit')
export default class PostVisit {
  
  @PrimaryGeneratedColumn('increment')
  id: number;

  @OneToMany(type => Material, material => material.postVisit, {
    cascade:['insert', 'update']
  })
  material: Material[];

  @Column()
  laborPrice: number;

  @Column()
  totalPrice: number;

  @OneToOne(type => Visit, visit => visit.postVisit)
  @JoinColumn()
  visit: Visit;
}