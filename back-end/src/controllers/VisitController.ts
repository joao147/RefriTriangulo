import { Request, Response } from 'express';
import { getRepository } from 'typeorm'
import * as Yup from 'yup'

import Visit from '../entities/visit'

export default {

  async index(request: Request, response: Response) {

    const visitRepository = getRepository(Visit);

    const allVisit = await visitRepository.find();

    return response.json(allVisit)
  },

  async show(request: Request, response: Response){

    const visitRepository = getRepository(Visit);

    const { id } = request.params;

    const visit = await visitRepository.findOneOrFail(id);

    return response.json(visit)
  },

  async create(request: Request, response: Response) {

    const {
      name,
      adress,
      contact,
      secondContact,
      visitInformation
    } = request.body;

    const data = {
      name,
      adress,
      contact,
      secondContact,
      visitInformation
    }

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      adress: Yup.string().required(),
      contact: Yup.string().required(),
      secondContact: Yup.string().notRequired(),
      visitInformation: Yup.array(Yup.object().shape({
        reasonVisit: Yup.string().required(),
        equipamentModel: Yup.string().required(),
        problem: Yup.string().required()
      }))
    })

    await schema.validate(data, {
      abortEarly: false
    })

    const visitRepository = getRepository(Visit);

    const newVisit = visitRepository.create(data);

    await visitRepository.save(newVisit);

    return response.status(201).json(newVisit);
  }
}