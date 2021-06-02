import {Router} from 'express'
const router=Router();
import * as productoCtr from '../controllers/producto.controller';
const {checkToken}=require('../auth/token_validation')
router.get('/',checkToken,productoCtr.readAllProducts);
router.get('/:id',checkToken,productoCtr.readProduct);
router.delete('/:id',checkToken,productoCtr.dellProduct);
router.put('/:id',checkToken,productoCtr.updateProduct);
router.post('/',checkToken,productoCtr.createUser);
export default router;