
  import * as express from "express"
  import { Application } from "express"
import { getAllUsers, getUserByEmail } from "./get-user.ctrl"
  const bodyParser=require('body-parser')

  const app: Application = express()

  app.use(bodyParser.json())
  //Routes
  app.route('/api/users').get(getAllUsers)
  app.route('/api/user').get(getUserByEmail)


  const httpServer: any = app.listen(3000,()=>{
    console.log("Http Rest API Server running at http://localhost:" + httpServer.address().port);

  })
