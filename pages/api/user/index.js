
import { useColorModeValue } from "@chakra-ui/react";
import main from "../../../database/conn";
import { getUser, postUser } from "../../../database/controller";
export default function handler(
    req,res
  ) {
    main().catch(error=>console.error(error));
const {method}=req;
switch (method){
  case "GET":
    getUser(req,res)
    case "POST":
      postUser(req,res)
    case "PUT":
    res.status(200).json({method,name:"PUT"})
    case "DELETE":
    res.status(200).json({method,name:"DELETE"})
    default:
      res.setHeader("Allow",["GET","POST","PUT","DELETE",])
    res.status(405).end(`method ${method} not allow`)
}



    const create =new useColorModeValue({name:"john"});
    create.save().then(()=>{
        res.status(200).json(create)
    })
   
  }