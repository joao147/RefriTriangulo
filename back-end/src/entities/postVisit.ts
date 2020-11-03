import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn} from 'typeorm'

import Material from './entitiesComponents/material'

@Entity('post_visit')
export default class PostVisit {
  
  @PrimaryGeneratedColumn('increment')
  id: number;

  @OneToMany(type => Material, material => material.postVisit, {
    cascade:['insert', 'update']
  })
  @JoinColumn(/*{name: postVisit_id}*/)
  material: Material[];

  @Column()
  priceLabor: number;

  @Column()
  totalPrice: number;
}