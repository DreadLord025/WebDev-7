import { User } from 'src/user/entities/user.entity'
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm'

@Entity()
export class ITShop {
  @PrimaryGeneratedColumn({ name: 'model_id' })
  id: number

  @Column()
  model: string

  @Column()
  price: number

  @ManyToOne(() => User, (user) => user.models, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User
}
