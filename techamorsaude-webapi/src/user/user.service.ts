import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ){}
  
  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepository.create(createUserDto);
    await this.userRepository.save(user);
    const { password, ...result } = user;
    return result;
  }

  async findOneWithUserName(userEmail: string) {
    return await this.userRepository.findOne({ where: { email: userEmail } });
  }

  async findOne(uuid: string) {
    return await this.userRepository.findOne({ where: { uuid: uuid }});
  }
}
