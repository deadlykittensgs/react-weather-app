import { useState } from 'react'
import './App.css'
import Stats from './components/Stats'

function App() {

  let result = ""
  let emojiChoice = ""

  const [emoji, setEmoji] = useState("")
  const [city, setCity] = useState('')
  const [description, setDescription] = useState("")
  const [dailyMin, setDailyMin] = useState("")
  const [dailyMax, setDailyMax] = useState("")
  const [weatherArray, setWeatherArray] = useState("")
  const [inputValue, setInputValue] = useState('');
  const [weather, setWeather] = useState()
  const [humidity, setHumidity] = useState(0)
  const [visibility, setVisibility] = useState(0)
  const [windspeed, setWindspeed] = useState(0)
  const [windDirection,setWindDirection] =useState("S")
  const [sunrise, setSunrise] = useState(0)
  const [sunset, setSunset] = useState(0)
  const [feelsLike, setFeelsLike] = useState(0)
  const [pressure, setPressure] = useState(0)
  const apiKey ="37c2c16aaa0dc6e405e59110c9fe7c67";


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    let locationOfSearch = inputValue.toLocaleLowerCase()
    getWeatherData(locationOfSearch)
    setInputValue("")
  };


  function kelvinToFahrenheit(kelvin) {
    // Convert Kelvin to Celsius
    let celsius = kelvin - 273.15;
    // Convert Celsius to Fahrenheit
    let fahrenheit = (celsius * (9/5) + 32);
    return Math.floor(fahrenheit)
  }


function degToCompass(num) {
  var val = Math.floor((num / 22.5) + 0.5);
  var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
  return arr[(val % 16)];
}

function toMph(num) {
  let answer = num * 2.2369363
  return Math.floor(answer)
}


function fixVisibility(vis) {
if (vis > 700) {
  result = "High"
}
if (vis > 400 && vis < 700) {
result = "Average"
}
if (vis < 400) {
  result = "Low"
}

return result
}
  

function fixEmoji(emoji) {
  if (emoji >= 200 && emoji < 600) {
    emojiChoice = <i className="fa-solid fa-cloud-rain"></i>
  }
  if (emoji >= 600 && emoji < 700) {
    emojiChoice = <i className="fa-solid fa-snowflake"></i>
  }
  if (emoji >= 700 && emoji < 800) {
    emojiChoice = <i className="fa-solid fa-smog"></i>
  }
  if (emoji === 800) {
    emojiChoice = <i className="fa-regular fa-sun"></i>
  }
  if (emoji >= 801 && emoji < 810) {
    emojiChoice = <i className="fa-solid fa-cloud"></i>
  }
   return emojiChoice
}


async function getLocation() {
  if (!navigator.geolocation) {
    console.error(`Your browser doesn't support Geolocation`);
}
  await    navigator.geolocation.getCurrentPosition(onSuccess, onError)

}

function onSuccess(position) {
  const {
      latitude,
      longitude
  } = position.coords;

 console.log(`Your location: (${latitude},${longitude})`)
 getWeatherDataByCords(longitude, latitude)
}

function onError() {
  message.classList.add('error');
  message.textContent = `Failed to get your location!`;
}


async function getWeatherDataByCords(lon, lat) {
  
  console.log(lon)
  console.log(lat)
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
  const response = await fetch(apiUrl)


// check to see if response is ok
if (!response.ok) {
  console.log("fetch fail")
  throw new Error("could not fetch weather Data")
}

// if valid information is returned 
let apiInformation = await response.json()

// give use state information to set
setEmoji( fixEmoji(apiInformation.weather[0].id))
setCity(apiInformation.name)
setWeatherArray(apiInformation)
setWeather(kelvinToFahrenheit(apiInformation.main.temp)+"'")
setDailyMin("L:" + kelvinToFahrenheit(apiInformation.main.temp_min)+"'")
setDailyMax("H:" + kelvinToFahrenheit(apiInformation.main.temp_max)+ "'")
setDescription(apiInformation.weather[0].description) 
setHumidity(apiInformation.main.humidity)
setVisibility(fixVisibility(apiInformation.visibility))
setWindspeed(toMph(apiInformation.wind.speed))
setWindDirection(degToCompass(apiInformation.wind.deg))
setFeelsLike(kelvinToFahrenheit(apiInformation.main.feels_like))
setPressure(apiInformation.main.pressure)
}





async function getWeatherData(city) {

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  const response = await fetch(apiUrl)


// check to see if response is ok
if (!response.ok) {
  console.log("fetch fail")
  throw new Error("could not fetch weather Data")
}

// if valid information is returned 
let apiInformation = await response.json()

// give use state information to set
setEmoji( fixEmoji(apiInformation.weather[0].id))
setCity(apiInformation.name)
setWeatherArray(apiInformation)
setWeather(kelvinToFahrenheit(apiInformation.main.temp)+"'")
setDailyMin("L:" + kelvinToFahrenheit(apiInformation.main.temp_min)+"'")
setDailyMax("H:" + kelvinToFahrenheit(apiInformation.main.temp_max)+ "'")
setDescription(apiInformation.weather[0].description) 
setHumidity(apiInformation.main.humidity)
setVisibility(fixVisibility(apiInformation.visibility))
setWindspeed(toMph(apiInformation.wind.speed))
setWindDirection(degToCompass(apiInformation.wind.deg))
setFeelsLike(kelvinToFahrenheit(apiInformation.main.feels_like))
setPressure(apiInformation.main.pressure)
}



function onload() {
  if(city === "") {
    getLocation()
  }
  if(!city === "") {
    return
  }
}

onload()





  return (
    // html
    <section className='w-screen h-screen'>
      {/* header section  */}
    <header className='flex bg-blue-400 align-center justify-center p-3'>
      
   
      <p>Todays Weather</p>
    </header>

{/* body */}
    <div className='flex flex-col h-full items-center bg-sunny-day bg-cover bg-no-repeat bg-center '>
      <div className='flex flex-col items-center p-10'>
      <h1 className='text-[3rem]'>{city}</h1>
        <div className='text-gray-800'>{description}</div>
        <div className='text-[2.5rem]'>{emoji}</div>
        <div className='text-[4rem]'>{weather} </div>
        <div className='flex gap-3'><div className='text-red-600'>{dailyMax}</div>  <div className='text-blue-600'>{dailyMin}</div></div>

      </div>
      

        <div className=' flex flex-col justify-between w-4/5 h-2/5 bg-slate-100/30 overflow-auto p-3'>
      <Stats setVisibility={setVisibility} windDirection={windDirection}  humidity={humidity} visibility={visibility} windspeed={windspeed} sunrise={sunrise} sunset={sunset} feelsLike={feelsLike} pressure={pressure} />
        </div>

   
  <div> 
    <h2 className='text-xl'> Change Location</h2>
    <div>
    <input id='locationInput' type="text" value={inputValue} name='town'  onChange={handleInputChange} placeholder='enter your location here'/>
    <button onClick={handleClick} className=' bg-slate-300 p-1 rounded m-2'>Search</button>
<button onClick={getLocation} className=' bg-slate-300 p-1 rounded m-2'><i className="fa-solid fa-crosshairs"></i></button>
    </div>
    

  </div>



  </div>


  
    </section>
  )
}

export default App
