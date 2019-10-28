import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Moment} from "moment";

@Entity('timeline_entry')
export default class TimelineEntry {
  @PrimaryGeneratedColumn()
  id?:number;

  @Column()
  message:string;

  @Column()
  imageURL:string;

  @Column({
    nullable: true
  })
  labelURL:string;

  @Column()
  label:string;

  @Column()
  when:Date | Moment;

  @Column()
  createdOn?:Date;

  @Column()
  updatedOn?:Date;
}
