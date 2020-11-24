import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne} from 'typeorm'

import VisitInformation from './entitiesComponents/visitInformation'
import PostVisit from './postVisit'

@Entity('visit')
export default class Visit {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ length:'100' })
  name: string;

  @Column({ length:'20' })
  document: string;

  @Column({ length:'100' })
  adress: string;

  @Column({ length:'20' })
  contact: string;

  @Column({ length:'20' })
  secondContact: string;

  @Column({ length:'100' })
  technician: string;

  @OneToMany(type => VisitInformation, visitInformation => visitInformation.visit, {
    cascade:['insert', 'update']
  })
  visitInformation: VisitInformation[];
  
  @Column({ length:'12' })
  visitDate: string;

  @Column({ length: '8' })
  visitHour: string;

  @Column({type: 'boolean'})
  status: boolean = false;

  @OneToOne(type => PostVisit, postVisit => postVisit.visit)
  postVisit: PostVisit
}