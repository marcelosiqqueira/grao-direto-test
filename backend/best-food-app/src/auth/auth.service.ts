import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from "@nestjs/jwt";
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { CreateUserDTO } from 'src/user/dto/create-user.dto';

@Injectable()
export class AuthService {

  constructor(
    private readonly prisma: PrismaService,
    private readonly JWTService: JwtService,
  ) {}

  async login( email:string, password:string) {

    const user = await this.prisma.user.findFirst({
        where: {
            email,
        }
    })

    if(!user) {
        throw new UnauthorizedException('Email e/ou senha incorretos.')
    }

    if (!await bcrypt.compare(password, user.password)){
        throw new UnauthorizedException('Email e/ou senha incorretos.')
    }

    return {
        acessToken: this.createToken(user),
        name: user.name,
        email: user.email
    }
  }

  async register(data: CreateUserDTO) {
    // const user = await this.userService.create(data);
    // return this.createToken(user);
  }

    createToken(user: User) {
        return this.JWTService.sign({
            id: user.id,
            name: user.name,
            email: user.email,
        }, {
            expiresIn: "2 days",
        })
    }

checkToken(token: string) {
    try{
        const data = this.JWTService.verify(token);
        return data; 
    }catch (e) {
        throw new BadRequestException(e);
    }       
}

isValidToken(token: string) {
    try{
        this.checkToken(token); 
        return true; 
    } catch (e) {
        return false;
    }
}

}
