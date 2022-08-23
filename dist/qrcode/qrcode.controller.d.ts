import { Qrcode } from './entities/qrcode.entity';
import { QrcodeService } from './qrcode.service';
export declare class QrcodeController {
    private readonly qrcodeService;
    constructor(qrcodeService: QrcodeService);
    create(qrcode: Qrcode): Promise<Qrcode>;
    findAll(): Promise<Qrcode[]>;
}
