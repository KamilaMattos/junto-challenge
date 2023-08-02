import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
} from "typeorm"
import { User } from "./user.entity"

@Entity("claims")
class Claim {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({ type: "date" })
  date: string

  @Column({
    type: "enum",
    enum: ["Roubo ou Furto", "Colisão", "Causas Naturais"],
  })
  type: string

  @Column()
  street: string

  @Column({ type: "int" })
  number: number

  @Column()
  neighborhood: string

  @Column()
  city: string

  @Column()
  state: string

  @Column()
  country: string

  @Column({ default: true })
  isActive: boolean

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @ManyToOne(() => User, (user) => user.claims)
  user: User
}

export { Claim }
