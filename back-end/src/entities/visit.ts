import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

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

  @Column(type => VisitInformation)
  visitInformation: VisitInformation[];

}