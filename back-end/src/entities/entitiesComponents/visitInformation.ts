import { Column, Entity, JoinColumn, ManyToOne} from 'typeorm'

import Visit from '../visit';

@Entity('visit_information')
export default class VisitInformation {
  
  @Column()
  equipamentType: string;

  @Column()
  equipamentModel: string;

  @Column()
  problem: string;

  @ManyToOne(type => Visit, visit => visit.visitInformation)
  @JoinColumn(/*{name: visit_id}*/)
  visit: Visit;
}