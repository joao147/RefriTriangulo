import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm'

import Visit from '../visit';

@Entity('visit_information')
export default class VisitInformation {

  @PrimaryGeneratedColumn('increment')
  id:number;
  
  @Column()
  equipamentType: string;

  @Column()
  equipamentBrand: string;

  @Column()
  equipamentModel: string;

  @Column()
  problem: string;

  @ManyToOne(type => Visit, visit => visit.visitInformation)
  @JoinColumn({name: 'visitId'})
  visit: Visit;
}