import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup'

import Material from '../entities/entitiesComponents/material';
import PostVisit from '../entities/postVisit';
import Visit from '../entities/visit'

export default {

  async index(request: Request, response: Response) {

    const postVisitRepository = await getRepository(PostVisit);

    const allPostVitis = await postVisitRepository.find({ relations: ['visit', 'material'] });

    return response.json(allPostVitis);
  },

  async show(request: Request, response: Response){

    const postVisitRepository = await getRepository(PostVisit);

    const { id } = request.params;

    const postVisit = await postVisitRepository.findOneOrFail(id, { relations: ['visit', 'material'] });

    return response.json(postVisit);
  },

  async create(request: Request, response: Response) {

    const {
      material,
      laborPrice,
      visitId
    } = request.body;

    var totalPrice = laborPrice;

    material.forEach((material: Material) => {totalPrice = totalPrice + material.materialPrice})

    const visit = await getRepository(Visit).findOneOrFail(visitId);

    const data = {
      material,
      laborPrice,
      totalPrice,
      visit: visit
    }

    const schema = Yup.object().shape({
      material: Yup.array(Yup.object().shape({
        material: Yup.string().required(),
        materialPrice: Yup.number().required(),
        guarantee: Yup.string().required()
      })),
      priceLabor: Yup.number().required(),
      totalPrice: Yup.number().required(),
      visitId: Yup.number().required()
    })

    await schema.isValid(data, {
      abortEarly: false
    })

    const postVisitRepository = getRepository(PostVisit);

    const newPostVisit = postVisitRepository.create(data);

    await postVisitRepository.save(newPostVisit);

    return response.status(201).json(data);
  }
}
