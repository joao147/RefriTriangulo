import {Router} from 'express'

import VisitController from './controllers/VisitController';
import PostVisitController from './controllers/PostvisitController';
import LoginController from './controllers/LoginController'

const routes = Router();

routes.get('/visit', VisitController.index);
routes.get('/visit/:id', VisitController.show);
routes.post('/visit', VisitController.create);

routes.get('/post_visit', PostVisitController.index);
routes.get('/post_visit/:id', PostVisitController.show);
routes.post('/post_visit', PostVisitController.create);

routes.post('/sign', LoginController.create);
routes.post('/login', LoginController.login);
export default routes
