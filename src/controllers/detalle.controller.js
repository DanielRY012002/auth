import { pool } from "../database"
const helpers=require('../libs/helpers');
export const readAllDetails=async(req,res)=>{
    try {
        const response=await pool.query('select * from detalle');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
export const readDetails=async(req,res)=>{
    try {
        const id=parseInt(req.params.id);
        const response=await pool.query('select * from detalle where iddetalle=$1',[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
export const createDetail=async(req,res)=>{
    try {
        const{creditos,horas,idcurso,idmatricula}=req.body;
        await pool.query('insert into detalle(creditos,horas,idcurso,idmatricula)values($1,$2,$3,$4)',[creditos,horas,idcurso,idmatricula]);
        return res.status(200).json(`Detalle registrado correctamente`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
export const dellDetail=async(req,res)=>{
    try {
        const id=parseInt(req.params.id);
        const response=await pool.query('delete from detalle where iddetalle=$1',[id]);
        return res.status(200).json(`Detalle elimindo correctamente.....`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
export const updateDetail=async(req,res)=>{
    try {
        const id=parseInt(req.params.id);
        const{creditos,horas,idcurso,idmatricula}=req.body;
        await pool.query('update detalle set creditos=$1,horas=$2,idcurso=$3,idmatricula=$4 where iddetalle=$5',[creditos,horas,idcurso,idmatricula,id]);
        return res.status(200).json(`Detalle actualizado correctamente.....`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}