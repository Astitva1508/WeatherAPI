const { default: axios } = require("axios");

const postUtility = async(cities)=>{
    const cityWeather = {}
    for await (const city of cities) {
        const response = await axios.post(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`)
        cityWeather[`${city}`] = response.data.main.temp
    }
    return cityWeather ;
}

module.exports=postUtility


