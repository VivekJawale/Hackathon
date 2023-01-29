

export async function getUser(req,res){
    try{
        res.status(200).json({name:"get"})
    }catch(error){
        res.status(405).json({error:"erroe"})
    }

}
export async function postUser(req,res){
    const body=req.body
    try{
        res.status(200).json({name:"post",body})
    }catch(error){
        res.status(405).json({error:"erroe"})
    }

}