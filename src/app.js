import express from 'express';
import morgan from 'morgan';
import userRoutes from './routers/user.routes';
import productsRoutes from './routers/producto.routes';
import matriculasRouters from './routers/matricula.routes';
import authRoutes from './routers/auth.routes';
const app=express();
var cors=require('cors');
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.get('/',function(req,res,next){
    res.send('Bienvenido a Node JS ....');
});
app.use('/api/auth',authRoutes);
app.use('/api/auth/users',userRoutes);
app.use('/api/auth/products',productsRoutes);
app.use('/api/auth/matriculas',matriculasRouters);
export default app;