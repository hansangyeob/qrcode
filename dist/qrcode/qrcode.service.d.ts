import { Repository } from 'typeorm';
import { Qrcode } from './entities/qrcode.entity';
export declare class QrcodeService {
    private qrRepository;
    constructor(qrRepository: Repository<Qrcode>);
    create(song: Qrcode): Promise<Qrcode>;
    findAll(): Promise<Qrcode[]>;
}
