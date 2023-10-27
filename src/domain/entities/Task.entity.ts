import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
// export class Task extends BaseEntity {
export class Task extends BaseEntity {
    @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 30 })
  name: string;

  @Column({ nullable: true })
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @Column({ nullable: true })
  tags: string

  @Column({ type: 'boolean', default: false })
  done: boolean;
}