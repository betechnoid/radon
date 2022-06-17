let axios = require("axios")

const creatememe=async function(req,res){
    try{
    let template_id=req.query.template_id
    let text0=req.query.text0
    let username=req.query.username
    let password=req.query.password
    let options={
        method:"post",
        url:`https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&username=${username}&password=${password}`
    }
    let result = await axios(options)
    res.status(200).send({ msg: result.data}) 
    }catch(err){res.status(500).send({ msg: err})}
}

module.exports.creatememe=creatememe