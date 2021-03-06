import { Entity, PrimaryGeneratedColumn } from 'typeorm'
import { InterfaceType, Field, ID } from 'type-graphql'

@InterfaceType()
@Entity()
export abstract class Connection {
  @Field(type => ID)
  @PrimaryGeneratedColumn()
  id: number
}
