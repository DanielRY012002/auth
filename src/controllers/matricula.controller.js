import {pool} from "../database"
export const readAllmatriculas=async(req,res)=>{
    try {
        const response=await pool.query('select * from matricula');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
export const readmatricula=async(req,res)=>{
    try {
        const id=parseInt(req.params.id);
        const response=await pool.query('select * from matricula where idmatricula=$1',[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
export const createMatricula=async(req,res)=>{
    try {
        const{fecha,ciclo,idusuario,idempleado,idescuela,idalumno}=req.body;
        await pool.query('insert into matricula(fecha,ciclo,idusuario,idempleado,idescuela,idalumno)values($1,$2,$3,$4,$5,$6)',[fecha,ciclo,idusuario,idempleado,idescuela,idalumno]);
        return res.status(200).json(`Matricula generada correctamente`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
export const dellMatricula=async(req,res)=>{
    try {
        const id=parseInt(req.params.id);
        const response=await pool.query('delete from matricula where idmatricula=$1',[id]);
        return res.status(200).json(`Matricula eliminda correctamente.....`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
export const updateMatricula=async(req,res)=>{
    try {
        const id=parseInt(req.params.id);
        const{fecha,ciclo,idusuario,idempleado,idescuela,idalumno}=req.body;
        await pool.query('update matricula set fecha=$1,ciclo=$2,idusuario=$3,idempleado=$4,idescuela=$5,idalumno=$6 where idmatricula=$7',[fecha,ciclo,idusuario,idempleado,idescuela,idalumno,id]);
        return res.status(200).json(`Matricula actualizada correctamente.....`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}