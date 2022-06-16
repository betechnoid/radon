const jwt=require("jsonwebtoken")


const authenticate=  function(req, res, next){
  try{
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token) 
    return res.status(401).send({ status: false, msg: "token must be present" });
    
    let decodedToken = jwt.verify(token, "functionup-radon")
    if(!decodedToken)return res.send({ status: false, msg: "token is invalid" });
    req["decodedToken"]=decodedToken
    next()}
    catch(err){
      res.status(500).send({msg:"err", error:err})
    }
  }
  

const authorise=  function(req, res, next){
  try{
  // let token = req.headers["x-Auth-token"];
  // if (!token) token = req.headers["x-auth-token"];
  // if (!token) 
  // return res.sendStatus({ status: false, msg: "token must be present" });
  // let decodedToken = jwt.verify(token, "functionup-radon")
  // if(!decodedToken)return res.send({ status: false, msg: "token is invalid" });
  decodedToken=req["decodedToken"]
 let userToBeModified = req.params.userId;
  let userLoggedIn = decodedToken.userId;
  if(userToBeModified != userLoggedIn) return res.status(403).send({status: false, msg: 'User logged is not allowed to access data'})

  next()}
  catch(err){
    res.status(500).send({msg:"err", error:err})
  }
}

module.exports.authenticate=authenticate
module.exports.authorise=authorise

