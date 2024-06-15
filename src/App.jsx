import { useState } from 'react'
import './App.css'
import Hours from './components/Hours'
import Days from './components/Days'

function App() {
  const [weatherArray, setWeatherArray] = useState([])
  const [inputValue, setInputValue] = useState('');
  const [storedValue, setStoredValue] = useState('');
  const [weather, setWeather] = useState(60)
  const apiKey ="37c2c16aaa0dc6e405e59110c9fe7c67";

 //  step 1 add use states to put information in 
  // Step 2: Handle input change and update the state
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Step 3: Handle click event and store the input value
  const handleClick = () => {
    setStoredValue(inputValue);
    let locationOfSearch = inputValue.toLocaleLowerCase()
    getWeatherData(locationOfSearch)
  };




async function getWeatherData(city) {

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  const response = await fetch(apiUrl)


// check to see if response is ok
if (!response.ok) {
  throw new Error("could not fetch weather Data")
}
// if valid information is returned 

let apiInformation = await response.json()

// give use state information
setWeatherArray(apiInformation)
console.log(weatherArray)
changeDom()

}

function changeDom() {
  setWeather(weatherArray.main.temp )

}






function getLocation() {
  let location = locationInput.value
  locationInput = ""
  getWeatherData(location)
}




  return (
    // html
    <section className='w-screen h-screen'>
      {/* header section  */}
    <header className='flex bg-blue-400 align-center justify-between p-3'>
      
      <p>1/1/34</p>
      <p>The Weather App</p>
      <p>sun</p>
    </header>

{/* body */}
    <div className='flex flex-col h-full items-center bg-sunny-day bg-cover bg-no-repeat bg-center '>
      <div className='flex flex-col items-center p-10'>
      <h1 className='text-xl'>Oklahoma City</h1>
        <div>mostly sunny</div>
        <div className='text-[4rem]'>{weather}' </div>
        <div>H:85 L:65 </div>

      </div>
      

        <div className=' bg-slate-200/50 flex overflow-auto gap-10 w-full'>
      <Hours/>
        </div>
        <p className='text-blue-500 text-sm'> <i className="fa-solid fa-arrow-left"></i> scroll <i className="fa-solid fa-arrow-right"></i> </p>

     <div className=' flex flex-col bg-blue-300/70 w-[100%] '>
     <Days/>
  </div>

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
