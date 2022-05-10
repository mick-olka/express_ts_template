
import { Request, Response } from 'express';
import * as homeService from "../service/home"

/**
 * Gets the API information.
 *
 * @param {Request} req
 * @param {Response} res
 */
export const getAppInfo = (req: Request, res: Response) => {
  const result = homeService.getAppInfo();

  res.json(result);
};

export const getMainPage = (req: Request, res: Response) => {
  res.header('Content-Type', 'text/html');
  res.render('index', {title: 'node-express-ts-hbs_template'});
};
