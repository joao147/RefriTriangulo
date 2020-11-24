import { Request,Response } from 'express';
import { getRepository } from 'typeorm'
import bcrypt from 'bcryptjs'

import User from '../entities/user';

import * as jwt from '../util/jwt';


export default {
  async login(request: Request, response: Response) {
    
    const credentials = request.body;
    
    if(credentials !== undefined){

      const {email, password} = credentials;

      const userRepository = await getRepository(User);
      
      await userRepository.findOneOrFail({where: {email: email} })
      .then((user: User) => {

        bcrypt.hash(password, 13, (err, hash) => {

          if(err) throw err;
          
          bcrypt.compare(user.password, hash)
          .then( res => {
            if(res){

              const token = jwt.sign({userId: user.id});

              return response.json({ token });
            }else return response.json({message: 'error'});
          })
        })
      })
      .catch(() => response.status(400).json({message: 'email ou senha invalido'}));
    }  
  },
  async create(request: Request, response: Response) {

    const data = request.body;

    const userRepository = await getRepository(User);

    const newUser = userRepository.create(data);

    await userRepository.save(newUser);

    return response.status(201).json(newUser);
  }
}