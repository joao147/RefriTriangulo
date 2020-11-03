import { Column, Entity, JoinColumn, ManyToOne} from 'typeorm'

import PostVisit from '../postVisit'

@Entity('material')
export default class Material {
  
  @Column()
  material: string;

  @Column()
  materialPrice: number;

  @Column()
  guarantee: string;

  @Column()
  @ManyToOne(type => PostVisit, postVisit => postVisit.material)
  @JoinColumn(/*{name: postVisit_id}*/)
  postVisit: PostVisit;
}