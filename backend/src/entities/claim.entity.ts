import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from "typeorm"
import { Address } from "./address.entity"
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

  @OneToOne(() => Address, { eager: true })
  @JoinColumn()
  address: Address

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @ManyToOne(() => User, (user) => user.claims)
  user: User
}

export { Claim }
