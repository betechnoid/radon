const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  
  try{
    let data = req.body;
    if(Object.keys(data).length !=0){
      let savedData = await userModel.create(data);
    res.status(201).send({ msg: savedData });
  
  }else res.status(400).send({msg:"please fill all details"})
}
  catch(error){
    res.status(500).send({msg:"error", error:error.massage})
  }
};

const loginUser = async function (req, res) {

  try{
    let userName = req.body.emailId;
    let password = req.body.password;

    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user)
    return res.status(400).send({
      status: false,
      msg: "username or the password is not corerct",
    });

    let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "Radon",
      organisation: "FunctionUp",
    },"functionup-radon");
    res.setHeader("x-auth-token", token);
    res.status(201).send({ status: true, token: token });
  }catch(err){res.status(500).send({msg:"err", error:err})}

};

const getUserData = async function (req, res) {
  
try{
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.status(404).send({ status: false, msg: "No such user exists" });

  res.status(200).send({ status: true, data: userDetails });
}catch(err){res.status(500).send({msg:"err", error:err})}
};

const updateUser = async function (req, res) {
try{
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.status(404).send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData,{new:true});
  res.status(200).send({ msg:updatedUser });
}catch(err){res.status(500).send({msg:"err", error:err})}
};

const deleteUser= async function (req, res){
try{
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.status(404).send("No such user exists");
  }
  let deleteUser = await userModel.findByIdAndUpdate({ _id: userId }, {$set:{isDelete:true}}, {new:true});
  res.status(200).send({ msg:deleteUser });
}catch(err){res.status(500).send({msg:"err", error:err})}
}


module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser= deleteUser;