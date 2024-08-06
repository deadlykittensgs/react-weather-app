import React from 'react'

export default function Hours( {humidity,  visibility,setVisibility, windspeed, windDirection, sunrise, sunset, feelsLike, pressure}) {



  return (



    <div className='flex flex-col w-full h-full '>

<div className='flex w-[100%] h-[100%] md:flex-col'>

<div className='flex flex-1 flex-col items-center md:flex-row '>
    <p className='flex flex-1 justify-center items-end font-semibold'>Humidity</p>
      <div className='flex flex-1 justify-center'>{humidity}%</div>
      </div>


      <div className='flex flex-1 flex-col items-center md:flex-row '>
    <p className='flex flex-1 justify-center items-end font-semibold' >Feels Like</p>
      <div className='flex flex-1 justify-center' >{feelsLike}'</div>
      </div>
</div>

<div className='flex w-[100%] h-[100%] md:flex-col'>

<div className='flex flex-1 flex-col items-center md:flex-row'>
    <p className='flex flex-1 justify-center items-end font-semibold'>Pressure</p>
      <div className='flex flex-1 justify-center'>{pressure} Hpa </div>
      </div>
      <div className='flex flex-1 flex-col items-center md:flex-row'>
    <p className='flex flex-1 justify-center items-end font-semibold'>Visibility</p>
      <div className='flex flex-1 justify-center'>{visibility}</div>
      </div>

</div>

<div className='flex w-[100%] h-[100%] md:flex-col'>
<div className='flex flex-1 flex-col items-center md:flex-row  '>
    <p className='flex flex-1 justify-center items-end font-semibold'>Windspeed</p>
      <div className='flex flex-1 justify-center'>{windspeed} MPH</div>
      </div>
      <div className='flex flex-1 flex-col items-center md:flex-row '>
    <p className='flex flex-1 justify-center items-end font-semibold'>WindDirection</p>
      <div className='flex flex-1 justify-center'>{windDirection}</div>
      </div> 

</div>
  
    </div>

  )
}
