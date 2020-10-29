import { Column} from 'typeorm'

export default class Material {
  
  @Column()
  material: string;

  @Column()
  materialPrice: number;

  @Column()
  guarantee: string;

}