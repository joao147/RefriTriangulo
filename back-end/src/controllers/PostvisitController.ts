import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup'

import Material from '../entities/entitiesComponents/material';
import PostVisit from '../entities/postVisit';

export default {

  async index(request: Request, response: Response) {

    const postVisitRepository = getRepository(PostVisit);

    const allPostVitis = await postVisitRepository.find({ relations: ['material'] });

    return response.json(allPostVitis);
  },

  async show(request: Request, response: Response){

    const postVisitRepository = getRepository(PostVisit);

    const { id } = request.params;

    const postVisit = postVisitRepository.findOneOrFail(id, { relations: ['material'] });

    return response.json(postVisit);
  },

  async create(request: Request, response: Response) {

    const {
      material,
      priceLabor
    } = request.body;

    var totalPrice = priceLabor;

    material.forEach((material: Material) => {totalPrice = totalPrice+ material.materialPrice})

    const postVisitData = {
      priceLabor,
      totalPrice
    }

    const postVisitSchema = Yup.object().shape({
      priceLabor: Yup.number().required(),
      totalPrice: Yup.number().required()
    })

    await postVisitSchema.validate(postVisitData, {
      abortEarly: false
    })

    const materialData = material.map((material: Material) => {
      return {
        material: material.material,
        materialPrice: material.materialPrice,
        guarantee: material.guarantee,
        postVisit: newPostVisit
      }
    })

    const materialSchema = Yup.array(Yup.object().shape({
      material: Yup.string().required(),
      materialPrice: Yup.number().required(),
      guarantee: Yup.string().required(),
      postVisit: postVisitSchema
    }))

    await materialSchema.validate(materialData, {
      abortEarly: false
    })

    //new register on post_visit table
    const postVisitRepository = getRepository(PostVisit);

    const newPostVisit = postVisitRepository.create(postVisitData);

    await postVisitRepository.save(newPostVisit);

    //new registers on material table
    const materialRepository = getRepository(Material);

    materialData.forEach(async (material: Material) => {

      const newMaterial = materialRepository.create(material);

      await materialRepository.save(newMaterial);
    })

    return response.status(201);
  }
}
