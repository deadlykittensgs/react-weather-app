import { useState } from 'react'
import './App.css'
import Hours from './components/Hours'
import Days from './components/Days'

function App() {



  let result = ""
  let emojiChoice = ""
  const [emoji, setEmoji] = useState("sun")
  const [city, setCity] = useState('Oklahoma city')
  const [description, setDescription] = useState("Sunny")
  const [dailyMin, setDailyMin] = useState("min")
  const [dailyMax, setDailyMax] = useState("max")
  const [weatherArray, setWeatherArray] = useState("")
  const [inputValue, setInputValue] = useState('');
  const [weather, setWeather] = useState(0)
  const [humidity, setHumidity] = useState(0)
  const [visibility, setVisibility] = useState(0)
  const [windspeed, setWindspeed] = useState(0)
  const [windDirection,setWindDirection] =useState("S")
  const [sunrise, setSunrise] = useState(0)
  const [sunset, setSunset] = useState(0)
  const [feelsLike, setFeelsLike] = useState(0)
  const [pressure, setPressure] = useState(0)
  const apiKey ="37c2c16aaa0dc6e405e59110c9fe7c67";

 //  step 1 add use states to put information in 

  // Step 2: Handle input change and update the state
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Step 3: Handle click event and store the input value
  const handleClick = () => {
    let locationOfSearch = inputValue.toLocaleLowerCase()
    getWeatherData(locationOfSearch)
  };

  function kelvinToFahrenheit(kelvin) {
    // Convert Kelvin to Celsius
    let celsius = kelvin - 273.15;
    // Convert Celsius to Fahrenheit
    let fahrenheit = (celsius * (9/5) + 32);
    return Math.floor(fahrenheit)
  }

//   function convertUnixToLocal(unixTimestamp) {
//     // Create a Date object from the Unix timestamp (multiply by 1000 to convert seconds to milliseconds)
//     const date = new Date(unixTimestamp * 1000);

//     // Convert to local time string
//     const localTimeString = date.toLocaleString();

//     return localTimeString;
// }

// this is using the timezone on your local device this will need to be fixed
  

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
  // else if {
  //   emojiChoice = "?"
  // }
   return emojiChoice
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
console.log(apiInformation.weather[0].id)
setCity(apiInformation.name)
setWeatherArray(apiInformation)
setWeather(kelvinToFahrenheit(apiInformation.main.temp))
setDailyMin(kelvinToFahrenheit(apiInformation.main.temp_min))
setDailyMax(kelvinToFahrenheit(apiInformation.main.temp_max))
setDescription(apiInformation.weather[0].description) 
setHumidity(apiInformation.main.humidity)
setVisibility(fixVisibility(apiInformation.visibility))
setWindspeed(toMph(apiInformation.wind.speed))
setWindDirection(degToCompass(apiInformation.wind.deg))
setFeelsLike(kelvinToFahrenheit(apiInformation.main.feels_like))
setPressure(apiInformation.main.pressure)

console.log(apiInformation)
console.log(kelvinToFahrenheit(apiInformation.main.temp))
}










  return (
    // html
    <section className='w-screen h-screen'>
      {/* header section  */}
    <header className='flex bg-blue-400 align-center justify-between p-3'>
      
      <p>1/1/34</p>
      <p>The Weather App</p>
      <p><i className="fa-solid fa-sun"></i></p>
    </header>

{/* body */}
    <div className='flex flex-col h-full items-center bg-sunny-day bg-cover bg-no-repeat bg-center '>
      <div className='flex flex-col items-center p-10'>
      <h1 className='text-xl'>{city}</h1>
        <div>{description}</div>
        <div>{emoji}</div>
        <div className='text-[4rem]'>{weather}' </div>
        <div>H:{dailyMax}' L:{dailyMin}' </div>

      </div>
      

        <div className=' flex flex-col justify-between w-4/5 h-2/5 bg-slate-100/30 overflow-auto p-3'>
      <Hours setVisibility={setVisibility} windDirection={windDirection}  humidity={humidity} visibility={visibility} windspeed={windspeed} sunrise={sunrise} sunset={sunset} feelsLike={feelsLike} pressure={pressure} />
        </div>
        <p className='text-blue-500 text-sm'> <i className="fa-solid fa-arrow-left"></i> scroll <i className="fa-solid fa-arrow-right"></i> </p>

   
  <div> 
    <h2 className='text-xl'> Change Location</h2>
    <div>
    <input id='locationInput' type="text" value={inputValue}  onChange={handleInputChange} placeholder='enter your location here'/>
    <button onClick={handleClick} className=' bg-slate-300 p-1 rounded m-2'>Search</button>
<button className=' bg-slate-300 p-1 rounded m-2'><i className="fa-solid fa-crosshairs"></i></button>
    </div>
    

  </div>



  </div>


  
    </section>
  )
}

export default App
