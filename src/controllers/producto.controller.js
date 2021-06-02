import {pool} from "../database"
export const readAllProducts=async(req,res)=>{
    try {
        const response=await pool.query('select * from producto');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
export const readProduct=async(req,res)=>{
    try {
        const id=parseInt(req.params.id);
        const response=await pool.query('select * from producto where idproducto=$1',[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
export const dellProduct=async(req,res)=>{
    try {
        const id=parseInt(req.params.id);
        const response=await pool.query('delete from producto where idproducto=$1',[id]);
        return res.status(200).json(`Producto ${id} elimindo correctamente.....`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
export const updateProduct=async(req,res)=>{
    try {
        const id=parseInt(req.params.id);
        const{nombre,precio,stock}=req.body;
        await pool.query('update producto set nombre=$1,precio=$2,stock=$3 where idproducto=$4',[nombre,precio,stock,id]);
        return res.status(200).json(`Producto ${id} modificado correctamente.....`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
export const createUser=async(req,res)=>{
    try {
        const{nombre,precio,stock}=req.body;
        await pool.query('insert into producto(nombre,precio,stock)values($1,$2,$3)',[nombre,precio,stock]);
        return res.status(200).json(`Producto ${nombre} creado correctamente`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}