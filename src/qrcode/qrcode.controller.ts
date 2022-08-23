import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Qrcode } from './entities/qrcode.entity';
import { QrcodeService } from './qrcode.service';

@Controller('qrcode')
export class QrcodeController {
  constructor(private readonly qrcodeService: QrcodeService) {}

  @Post()
  async create(@Body() qrcode: Qrcode): Promise<Qrcode> {
    return await this.qrcodeService.create(qrcode);
  }

  @Get()
  async findAll(): Promise<Qrcode[]> {
    return await this.qrcodeService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.qrcodeService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateQrcodeDto: UpdateQrcodeDto) {
  //   return this.qrcodeService.update(+id, updateQrcodeDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.qrcodeService.remove(+id);
  // }
}
