import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  async create({email, name, password}: CreateUserDTO) {
    const salt = await bcrypt.genSalt();
    password = await bcrypt.hash(password, salt);

    return this.prisma.user.create({
      data: {
        email,
        name,
        password
      }
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }
}
