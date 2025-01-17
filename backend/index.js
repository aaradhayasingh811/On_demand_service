import dotenv from "dotenv"
dotenv.config({
    path: './.env'
})

import {app} from "../backend/app.js"
import {connection} from "../backend/config/connection.js"

connection().then(()=>{
    app.listen(import.meta.env.PORT,()=>{
        console.log('server is running on port',import.meta.env.PORT);
    })
}).catch((err)=>{
    console.log(err)
})