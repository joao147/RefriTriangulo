import {Router} from 'express'

import authMiddlerware from './middlerware/authMiddlerware'

import VisitController from './controllers/VisitController';
import PostVisitController from './controllers/PostvisitController';
import LoginController from './controllers/LoginController'

const routes = Router();

routes.post('/sign', LoginController.create);
routes.get('/login', LoginController.login);

routes.use(authMiddlerware)

routes.get('/visit', VisitController.index);
routes.get('/visit/:id', VisitController.show);
routes.post('/visit', VisitController.create);

routes.get('/post_visit', PostVisitController.index);
routes.get('/post_visit/:id', PostVisitController.show);
routes.post('/post_visit', PostVisitController.create);

export default routes
