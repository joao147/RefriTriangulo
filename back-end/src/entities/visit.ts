import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn} from 'typeorm'

import VisitInformation from './entitiesComponents/visitInformation'

@Entity('visit')
export default class Visit {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  adress: string;

  @Column()
  contact: string;

  @Column()
  secondContact: string;

  @OneToMany(type => VisitInformation, visitInformation => visitInformation.visit, {
    cascade:['insert', 'update']
  })
  @JoinColumn(/*{name: visit_id}*/)
  visitInformation: VisitInformation[];
  
  @Column()
  visitDate: string;
}