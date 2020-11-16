import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup'

import Material from '../entities/entitiesComponents/material';
import PostVisit from '../entities/postVisit';
import Visit from '../entities/visit'

export default {

  async index(request: Request, response: Response) {
    
    const filters = request.query;

    const name = filters.name as string;
    const visitDate = filters.visitDate as string;

    const postVisitRepository = await getRepository(PostVisit);

    var allPostVitis;

    if(name !== '' && visitDate !== ''){
      allPostVitis = await postVisitRepository.find({ 
        relations: [ 'visit', 'material', 'visit.visitInformation' ],
        where: { visit: { name, visitDate } }
      });
    }else if (name !== ''){
      allPostVitis = await postVisitRepository.find({ 
        relations: [ 'visit', 'material', 'visit.visitInformation' ],
        where: { visit:{ name } }
      });
    }else if (visitDate !== ''){
      allPostVitis = await postVisitRepository.find({ 
        relations: [ 'visit', 'material', 'visit.visitInformation' ],
        where: { visit: { visitDate } }
      });
    }else {
      allPostVitis = await postVisitRepository.find({ 
        relations: [ 'visit', 'material', 'visit.visitInformation' ],
        where: { visit: { id:1 } }
      });
    }

    return response.json(allPostVitis);
  },

  async show(request: Request, response: Response){

    const postVisitRepository = await getRepository(PostVisit);

    const { id } = request.params;

    const postVisit = await postVisitRepository.findOneOrFail(id, { relations: [ 'visit', 'material', 'visit.visitInformation' ] });

    return response.json(postVisit);
  },

  async create(request: Request, response: Response) {

    const {
      material,
      laborPrice,
      visitId
    } = request.body;

    var totalPrice = Number(laborPrice);

    material.forEach((material: Material) => {totalPrice = totalPrice + Number(material.materialPrice)})

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

    visit.status = true;

    await getRepository(Visit).save(visit);

    return response.status(201).json(data);
  }
}
