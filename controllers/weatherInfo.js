const postUtility = require('../utilities/postUtility')

const weatherInfo= async (req,res)=>{
    const cities = req.body.cities
    const cityWeather = await postUtility(cities)
    res.status(200).json({weather :cityWeather})
}

module.exports = weatherInfo