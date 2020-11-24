import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm'

import Visit from '../visit';

@Entity('visit_information')
export default class VisitInformation {

  @PrimaryGeneratedColumn('increment')
  id:number;
  
  @Column({ length: '20' })
  equipamentType: string;

  @Column({ length: '50' })
  equipamentBrand: string;

  @Column({ length: '50' })
  equipamentModel: string;

  @Column({ length: '50' })
  equipamentSerie: string;

  @Column({ length: '50' })
  problem: string;

  @ManyToOne(type => Visit, visit => visit.visitInformation)
  @JoinColumn({name: 'visitId'})
  visit: Visit;
}