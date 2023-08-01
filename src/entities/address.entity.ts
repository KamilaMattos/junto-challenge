import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity("addresses")
class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string

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

  
}

export { Address }
