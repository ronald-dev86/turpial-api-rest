import express from 'express';
import cors from 'cors';

import { UserRoute } from '../../users/infrastructure/routes/UserRoute';
import { AuthRoute } from '../../auth/infrastruture/routes/AuthRoute';
import { TaskRoute } from '../../tasks/infractucture/routes/TaskRoute';
export class App {
  public app: express.Application;

  constructor() {
  
    this.app = express();
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    this.app.use(express.static('public'));

    this.app.listen(3000, () => {       
      console.log('Server is running on port 3000');
    });
    
    this.app.use('/api/v1',  [new AuthRoute().router, new UserRoute().router, new TaskRoute().router]);
  
  }
}


