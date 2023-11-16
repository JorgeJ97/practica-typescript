import express, { Request, Response, NextFunction } from 'express'
const cors = require('cors')
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
import router from './routes/index';

export const server = express()

server.use(express.json()) //middleware que transforma el req.body a json
server.use(express.urlencoded({extended: false}))
server.use(cors())
server.use(morgan('dev'));
server.use(cookieParser());



server.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5173'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

server.use('/', router)


  // Error catching endware.
server.use((err: Error, _req: Request, res: Response, next: NextFunction): void => {
  // const status = err.|| 500;
  const message = err.message || err;
  console.error(err);
  res.status(500).send(message);
  next()
});
  