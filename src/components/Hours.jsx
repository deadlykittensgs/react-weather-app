import React from 'react'

export default function Hours( {humidity,  visibility,setVisibility, windspeed,windDirection, sunrise, sunset, feelsLike, pressure}) {



  return (
    <>
    <div></div>
    <div className='flex justify-between'>
    <p>humidity</p>
      <div>{humidity}%</div>
      </div>
      <div className='flex justify-between'>
    <p>feelsLike</p>
      <div>{feelsLike}'</div>
      </div>
      <div className='flex justify-between'>
    <p>pressure</p>
      <div>{pressure} Hpa </div>
      </div>
      <div className='flex justify-between'>
    <p>visibility</p>
      <div>{visibility}</div>
      </div>
      <div className='flex justify-between '>
    <p>windspeed</p>
      <div>{windspeed} MPH</div>
      </div>
      <div className='flex justify-between'>
    <p>windDirection</p>
      <div>{windDirection}</div>
      </div> 
    <div></div>
    </>

  )
}
