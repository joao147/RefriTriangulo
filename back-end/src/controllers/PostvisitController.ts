import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup'

import PostVisit from '../entities/postVisit';

export default {

  async index(request: Request, response: Response) {

    const postVisitRepository = getRepository(PostVisit);

    const allPostVitis = await postVisitRepository.find();

    return response.json(allPostVitis);
  },

  async show(request: Request, response: Response){

    const postVisitRepository = getRepository(PostVisit);

    const { id } = request.params;

    const postVisit = postVisitRepository.findOneOrFail(id);

    return response.json(postVisit);
  },

  async create(request: Request, response: Response) {

    const {
      material,
      priceLabor,
      totalPrice
    } = request.body;

    const data = {
      material,
      priceLabor,
      totalPrice
    }

    const schema = Yup.object().shape({
      material: Yup.array(Yup.object().shape({
        material: Yup.string().required(),
        materialPrice: Yup.number().required(),
        guarantee: Yup.string().required()
      })),
      priceLabor: Yup.number().required(),
      totalPrice: Yup.number().required()
    })

    await schema.validate(data, {
      abortEarly: false
    })

    const postVisitRepository = getRepository(PostVisit);

    const newPostVisit = postVisitRepository.create(data);

    await postVisitRepository.save(newPostVisit);

    return response.status(201).json(newPostVisit);
  }
}