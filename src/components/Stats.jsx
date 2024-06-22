import React from 'react'

export default function Hours( {humidity,  visibility,setVisibility, windspeed, windDirection, sunrise, sunset, feelsLike, pressure}) {



  return (
    <>
    <div></div>
    <div className='flex'>
    <p className='flex flex-1 justify-center'>Humidity</p>
      <div className='flex flex-1 justify-center'>{humidity}%</div>
      </div>
      <div className='flex justify-between'>
    <p className='flex flex-1 justify-center' >Feels Like</p>
      <div className='flex flex-1 justify-center' >{feelsLike}'</div>
      </div>
      <div className='flex justify-between'>
    <p className='flex flex-1 justify-center' >Pressure</p>
      <div className='flex flex-1 justify-center'>{pressure} Hpa </div>
      </div>
      <div className='flex justify-between'>
    <p className='flex flex-1 justify-center'>Visibility</p>
      <div className='flex flex-1 justify-center'>{visibility}</div>
      </div>
      <div className='flex justify-between '>
    <p className='flex flex-1 justify-center'>Windspeed</p>
      <div className='flex flex-1 justify-center'>{windspeed} MPH</div>
      </div>
      <div className='flex justify-between'>
    <p className='flex flex-1 justify-center'>WindDirection</p>
      <div className='flex flex-1 justify-center'>{windDirection}</div>
      </div> 
    <div></div>
    </>

  )
}
