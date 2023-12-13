import { Injectable } from '@nestjs/common';
import { CreateWorInput } from './dto/create-wor.input';
import { UpdateWorInput } from './dto/update-wor.input';

@Injectable()
export class WorService {
  create(createWorInput: CreateWorInput) {
    return 'This action adds a new wor';
  }

  findAll() {
    return `This action returns all wor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} wor`;
  }

  update(id: number, updateWorInput: UpdateWorInput) {
    return `This action updates a #${id} wor`;
  }

  remove(id: number) {
    return `This action removes a #${id} wor`;
  }
}
