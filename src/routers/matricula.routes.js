import {Router} from 'express';
const router=Router();
import * as mtrCtr from '../controllers/matricula.controller';
const {checkToken}=require('../auth/token_validation');
router.get('/',checkToken,mtrCtr.readAllmatriculas);
router.get('/:id',checkToken,mtrCtr.readmatricula);
router.post('/',checkToken,mtrCtr.createMatricula);
router.delete('/:id',checkToken,mtrCtr.dellMatricula);
router.put('/:id',checkToken,mtrCtr.updateMatricula);
export default router;