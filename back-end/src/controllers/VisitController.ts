import { Request, Response } from 'express';
import { getRepository } from 'typeorm'
import * as Yup from 'yup'

import Visit from '../entities/visit'

import getDateToString from '../util/getDateToString'
import getHourToString from '../util/getHourToString'

export default {

  async index(request: Request, response: Response) {

    const visitRepository = getRepository(Visit);

    const allVisit = await visitRepository.find({ relations: ['visitInformation'], where:{status: 0}});

    return response.json(allVisit)
  },

  async show(request: Request, response: Response){

    const visitRepository = getRepository(Visit);

    const { id } = request.params;

    const visit = await visitRepository.findOne(id, { relations: ['visitInformation'] });

    return response.json(visit)
  },

  async create(request: Request, response: Response) {

    const {
      name,
      document,
      adress,
      contact,
      secondContact,
      technician,
      visitInformation
    } = request.body;

    const visitDate = getDateToString(new Date());

    const visitHour = getHourToString(new Date());

    const data = {
      name,
      document,
      adress,
      contact, 
      secondContact,
      technician,
      visitInformation,
      visitDate,
      visitHour
    }

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      document: Yup.string().required(),
      adress: Yup.string().required(),
      contact: Yup.string().required(),
      secondContact: Yup.string().notRequired(),
      technician: Yup.string().required(),
      visitInformation: Yup.array(Yup.object().shape({
        equipamentType: Yup.string().required(),
        equipamentBrand: Yup.string().required(),
        equipamentModel: Yup.string().required(),
        equipamentSerie: Yup.string().required(),
        problem: Yup.string().required(),
      })), 
      visitDate: Yup.string().required(),
      visitHour: Yup.string().required(),
    })

    await schema.isValid(data, {
      abortEarly: false
    })

    const visitRepository = getRepository(Visit);

    const newVisit = visitRepository.create(data);

    await visitRepository.save(newVisit);   
 
    return response.status(201).json({message: 'sucess'});
  }
}
