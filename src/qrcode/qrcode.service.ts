import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Qrcode } from './entities/qrcode.entity';

@Injectable()
export class QrcodeService {
    constructor(
    @InjectRepository(Qrcode) private qrRepository: Repository<Qrcode>,
  ) {
  }

 async create(song: Qrcode): Promise<Qrcode> {
    return await this.qrRepository.save(song);
  }

  async findAll(): Promise<Qrcode[]> {
    return await this.qrRepository.find();
  }

  // async findOne(id: number): Promise<Qrcode> {
  //   return await this.qrRepository.findOne({ Scode });
  // }

  // async remove(id: number): Promise<void> {
  //   await this.qrRepository.delete(id);
  // }
}
