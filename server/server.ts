
import * as express from "express"
import { Application } from "express"
const bodyParser=require('body-parser')

const app: Application = express()

app.use(bodyParser.json())

const httpServer: any = app.listen(3000,()=>{
  console.log("Http Rest API Server running at http://localhost:" + httpServer.address().port);

})
