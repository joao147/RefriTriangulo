import { Request, Response } from 'express';
import { getRepository } from 'typeorm'
import * as Yup from 'yup'

import VisitInformation from '../entities/entitiesComponents/visitInformation'
import Visit from '../entities/visit'

import getDateToString from '../util/getDateToString'

export default {

  async index(request: Request, response: Response) {

    const visitRepository = getRepository(Visit);

    const allVisit = await visitRepository.find({ relations: ['visitInformation'] });

    return response.json(allVisit)
  },

  async show(request: Request, response: Response){

    const visitRepository = getRepository(Visit);

    const { id } = request.params;

    const visit = await visitRepository.findOneOrFail(id, { relations: ['visitInformation'] });

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

    const visitDate = getDateToString(new Date());

    const visitData = {
      name,
      adress,
      contact,
      secondContact,
      visitDate
    }

    const visitSchema = Yup.object().shape({
      name: Yup.string().required(),
      adress: Yup.string().required(),
      contact: Yup.string().required(),
      secondContact: Yup.string().notRequired(),
      visitDate: Yup.string().required()
    })

    await visitSchema.validate(visitData, {
      abortEarly: false
    })

    const visitInformationData = visitInformation.map((visitInformation: VisitInformation) => {
      return {
        equipamentType: visitInformation.equipamentType,
        equipamentModel: visitInformation.equipamentModel,
        problem: visitInformation.problem,
        visit: newVisit
      }
    })

    const visitInformationSchema = Yup.array(Yup.object().shape({
      equipamentType: Yup.string().required(),
      equipamentModel: Yup.string().required(),
      problem: Yup.string().required(),
      visit: visitSchema
    }))

    await visitInformationSchema.validate(visitInformationData, {
      abortEarly: false
    })

    const visitRepository = getRepository(Visit);

    const newVisit = visitRepository.create(visitData);

    await visitRepository.save(newVisit);

    const visitInformationRepository = getRepository(VisitInformation);

    visitInformationData.forEach(async (visitInformations: VisitInformation)=>{

      const newVisitInformation = visitInformationRepository.create(visitInformations);

      await visitInformationRepository.save(newVisitInformation);
    })

    return response.status(201);
  }
}
