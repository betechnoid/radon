let axios = require("axios")

const weather=async function(req, res){
    try{let london=req.query.q
    let api=req.query.appid
    let options={
        method:"get",
        url:`http://api.openweathermap.org/data/2.5/weather?q=${london}&appid=${api}`
    }
    let result = await axios(options)
    res.status(200).send({ msg: result.data}) 
}catch(err){res.status(500).send({ msg: err})}
}

let cities=["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
const weathersort=async function(req, res){
    try{
        let api=req.query.appid
        let emptyarray=[]
        for(i=0;i<cities.length;i++){
            let object={city:cities[i]}
            
            let result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${api}`)
            object.temp=result.data.main.temp
            emptyarray.push(object)
        }

    let sortt=emptyarray.sort((a,b)=>a.temp-b.temp)
    
    res.status(200).send({msg:sortt}) 
}catch(err){res.status(500).send({ msg: err})}
}

module.exports.weather=weather

module.exports.weathersort=weathersort