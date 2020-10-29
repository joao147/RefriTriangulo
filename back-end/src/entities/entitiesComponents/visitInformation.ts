import { Column} from 'typeorm'

export default class VisitInformation {
  
  @Column()
  reasonVisit: string;

  @Column()
  equipamentModel: string;

  @Column()
  problem: string;

}