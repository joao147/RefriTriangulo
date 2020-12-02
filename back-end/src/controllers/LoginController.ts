import { Request,Response } from 'express';
import { getRepository } from 'typeorm'
import bcrypt from 'bcryptjs'

import User from '../entities/user';

import * as jwt from '../util/jwt';
import { verify } from 'jsonwebtoken';


export default {
  async login(request: Request, response: Response) {
    
    var credentials = request.headers.authorization;
    
    if(credentials !== undefined){

      const [,hash] = credentials.split(' ');

      credentials =  Buffer.from(hash, 'base64').toString();

      const [email, password] = credentials.split(':'); 

      const userRepository = await getRepository(User);
      
      await userRepository.findOneOrFail({where: {email: email} })
      .then((user: User) => {
        bcrypt.compare(password, user.password, (err, res) => {
          if(res){

            const token = jwt.sign({userId: user.id});

            return response.json({ token });
          }else return response.send(false);
        })
      })
      .catch(() => response.send(false))
      }
  },
  async create(request: Request, response: Response) {

    const data = request.body;

    console.log(data);

    const userRepository = await getRepository(User);

    const newUser = userRepository.create(data);

    await userRepository.save(newUser);

    return response.status(201).json(newUser);
  }
}