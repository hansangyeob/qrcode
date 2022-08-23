import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export class Qrcode {

    @PrimaryGeneratedColumn()
    readonly Type: string;

    @Column()
    readonly SCode: string;
  
    @Column()
    readonly DeviceID: string;

    @Column()
    readonly ReaderNo: number;

    @Column()
    readonly ActIndex: number;
    @Column()
    readonly SN: string;

    @Column()
    readonly username: string;

    @Column()
    readonly password: string;
  
}