import { Router } from 'express';
import {gameController} from '../controllers/gameController';

class Games {

  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get('/', gameController.getGames);
    this.router.get('/:gameId', gameController.singleGame);
    this.router.post('/', gameController.createGame);
    this.router.put('/');
    this.router.delete('/');
  }

}

const games = new Games();
export default games.router;