import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm"
import { Exclude } from "class-transformer"
import { Claim } from "./claim.entity"

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  name: string

  @Column({ unique: true, length: 70 })
  email: string

  @Column({ length: 160 })
  @Exclude()
  password: string

  @Column({ default: true })
  isActive: boolean

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @OneToMany(() => Claim, (claims) => claims.user, { eager: true })
  claims: Claim[]
}

export { User }
