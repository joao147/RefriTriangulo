import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm'

import PostVisit from '../postVisit'

@Entity('material')
export default class Material {

  @PrimaryGeneratedColumn('increment')
  id:number;
  
  @Column()
  material: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  materialPrice: number;

  @Column()
  guarantee: string;

  @ManyToOne(type => PostVisit, postVisit => postVisit.material)
  @JoinColumn({name: 'postVisitId'})
  postVisit: PostVisit;
}