const express=require('express')
const router=express.Router()

router.get('/',(req,res)=>{
	res.render('index')
})

router.get('/Home',(req,res)=>{
	res.render('index')
})

router.get('/Registrar',(req,res)=>{
	res.render('registro')
})

router.get('/MySide',(req,res)=>{
	res.render('login')
})

router.get('/Ver',(req,res)=>{
	res.render('consulta')
})

router.get('/Update',(req,res)=>{
	res.render('Actualizar')
})


module.exports=router