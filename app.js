import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import conectDb from './db/connect.js'


const app = express()
app.use(cors())


import adminRoutes from './routes/adminRoutes.js'
import userRoutes from './routes/userRoutes.js'

app.use(express.json({limit: '50mb'}));

app.use('/api/user',userRoutes)
app.use('/api/admin',adminRoutes)


const port = process.env.PORT || 4000

const start = async()=>{
    try {
        await conectDb()
        app.listen(port,console.log(`server is running on port ${port}...`))

    } catch (error) {
        console.log(error)
    }
}
start()