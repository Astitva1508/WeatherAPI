const addBoxDOM = document.querySelector('.addcity')
const submitButtonDOM = document.querySelector('.submit')
const outputDivDOM = document.getElementById('output')
const inputDivDOM = document.getElementById('input')


addBoxDOM.addEventListener('click',(e)=>{
    e.preventDefault()
    const inputBox = document.createElement('input')
    inputBox.setAttribute('type','text')
    inputBox.setAttribute('placeholder','Enter the name of city')
    inputBox.classList.add('cityName')
    inputDivDOM.appendChild(inputBox)
})

submitButtonDOM.addEventListener('click',async (e)=>{
    e.preventDefault()
    const inputBoxes=document.querySelectorAll('.cityName')
    // const cities = []
    const list = [...inputBoxes]
    const cities = list.map(listitem=>listitem.value)
    try {
        const outputInfo = await axios.post('/getWeather',{
            cities:cities
        })
        const weatherInfo = outputInfo.data.weather
        for (const city in weatherInfo){
            const listElement = document.createElement('li')
            outputDivDOM.appendChild(listElement)
            listElement.innerHTML=`${city}  :  ${weatherInfo[city]}C`
        }
    } catch (error) {
        outputDivDOM.innerHTML=error.message
        setTimeout(()=>{
        },10000)
    }
    setTimeout(() => {
        outputDivDOM.replaceChildren()
    }, 10000);
})
