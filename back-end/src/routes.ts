import {Router} from 'express'

import VisitController from './controllers/VisitController';
import PostVisitController from './controllers/PostVisitController';

const routes = Router();

//Routas para visita
routes.get('/visit', VisitController.index);
routes.get('/visit/:id', VisitController.show);
routes.post('/visit/create', VisitController.create);

//Rotas para o pós-visita
routes.get('/post_visit/:id', PostVisitController.show);
routes.post('/post_visit/create', PostVisitController.create);

export default routes
