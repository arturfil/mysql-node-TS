import {Request, Response} from 'express';
import db from '../database';

class GameController {
  
  public async getGames (req: Request, res: Response): Promise<void>{
    await db.query("SELECT * FROM games", (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  }

  public async createGame (req: Request, res: Response): Promise<void> {
    await db.query('INSERT INTO games SET ?', [req.body], (err, result) => {
      if (err) throw err;
      console.log(result);
      res.json({message: "game was created"});
    });
  }

  public async singleGame(req: Request, res: Response): Promise<void> {
    await db.query("SELECT * FROM games WHERE id = ?", req.params.gameId, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  }

}

export const gameController = new GameController();