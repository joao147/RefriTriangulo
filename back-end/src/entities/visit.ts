import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne} from 'typeorm'

import VisitInformation from './entitiesComponents/visitInformation'
import PostVisit from './postVisit'

@Entity('visit')
export default class Visit {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  document: string;

  @Column()
  adress: string;

  @Column()
  contact: string;

  @Column()
  secondContact: string;

  @Column()
  technician: string;

  @OneToMany(type => VisitInformation, visitInformation => visitInformation.visit, {
    cascade:['insert', 'update']
  })
  visitInformation: VisitInformation[];
  
  @Column()
  visitDate: string;

  @OneToOne(type => PostVisit, postVisit => postVisit.visit)
  postVisit: PostVisit
}