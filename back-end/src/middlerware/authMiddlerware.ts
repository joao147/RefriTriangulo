import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm'

import * as jwt from '../util/jwt'

import User from '../entities/user'

export default async function authMiddlerware(request: Request, response: Response, next: NextFunction) {

  const headers = request.headers.authorization;

  if (headers !== undefined){

    const [, token] = headers.split(' ');

    try {
      await jwt.verify(token);

      next();
    } catch (error) {
      return response.send({message: 'token inválido'})
    }
  }else return response.sendStatus(401)
}