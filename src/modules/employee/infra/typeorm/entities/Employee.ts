import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity('employee')
class Empployee {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 50 })
  username: string;

  @Column({ length: 50 })
  password: string;

  @Column({ length: 50 })
  role: string;

  @Column({ length: 50 })
  department: string;

  @CreateDateColumn({ length: 50 })
  created_at: Date;

  @UpdateDateColumn({ length: 50 })
  updated_at: Date;

  @DeleteDateColumn({ length: 50 })
  deleted_at: Date;

}

export { Empployee }
