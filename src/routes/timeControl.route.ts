import { startTimeControl } from '../controllers/timeControl.controller';
import express from 'express';

const routerTimeControl = express.Router();

//log into
routerTimeControl.post('/', startTimeControl);


export default routerTimeControl;
