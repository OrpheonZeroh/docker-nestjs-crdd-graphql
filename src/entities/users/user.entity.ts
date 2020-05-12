import {Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Entity, BaseEntity} from 'typeorm'
import { Field, ObjectType, Int } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Users extends BaseEntity{
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field(()=> String)
    @Column({type: 'varchar', unique: true, length: 25, nullable: false})
    username!: string;

    @Field(()=> String)
    @Column({type: 'varchar', length: 25})
    name!: string;

    @Field(()=> String)
    @Column({type: 'varchar', length: 25})
    lastname!: string;

    @Field(()=> String)
    @Column({type: 'varchar', nullable: false, unique:true})
    email!: string;

    @Field(()=> String)
    @Column({type: 'varchar', nullable: false})
    password!: string;

    @Field(()=> String)
    @Column({type: 'boolean', nullable: true})
    status!: string;

    @Field(()=> String)
    @Column({type: 'boolean', nullable: true})
    verificated!: string;

    @Field(()=> String)
    @Column({type: 'varchar', nullable: true})
    code_verificate!: string;

    @Field(()=> String)
    @CreateDateColumn({type: 'timestamp', name: 'created_at'})
    createdAt!: string;

    @Field(()=> String)
    @UpdateDateColumn({type: 'timestamp', name: 'update_at'})
    updatedAt!: string;
}