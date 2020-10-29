import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

import Material from './entitiesComponents/material'

@Entity('post_visit')
export default class PostVisit {
  
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column(type => Material)
  material: Material[];

  @Column()
  priceLabor: number;

  @Column()
  totalPrice: number;
}