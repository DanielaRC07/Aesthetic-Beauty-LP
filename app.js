const express=require('express')
const app=express()
const path=require('path')
const cors=require('cors')
const rutas=require('./routes/site')

app.set('port',3001)
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

app.use('/',rutas)
app.use(express.static(path.join(__dirname,'public')))
app.use(cors())

app.listen(app.get('port'),()=>{
	console.log('WebSite Escuchando por el puerto', app.get('port'))
	console.log(__dirname)

})