import React from 'react'

export default function Hours( {humidity, visibility, windspeed,windDirection, sunrise, sunset, feelsLike, pressure}) {
  return (
    <>
    <div></div>
    <div className='flex flex-col items-center'>
    <p>humidity</p>
    <div><i className="fa-solid fa-sun"></i></div>
      <div>{humidity}</div>
      </div>
      <div className='flex flex-col items-center'>
    <p>feelsLike</p>
    <div><i className="fa-solid fa-sun"></i></div>
      <div>{feelsLike}</div>
      </div>
      <div className='flex flex-col items-center'>
    <p>pressure</p>
    <div><i className="fa-solid fa-sun"></i></div>
      <div>{pressure}</div>
      </div>
      <div className='flex flex-col items-center'>
    <p>visibility</p>
    <div><i className="fa-solid fa-sun"></i></div>
      <div>{visibility}</div>
      </div>
      <div className='flex flex-col items-center'>
    <p>windspeed</p>
    <div><i className="fa-solid fa-sun"></i></div>
      <div>{windspeed}</div>
      </div>
      <div className='flex flex-col items-center'>
    <p>windDirection</p>
    <div><i className="fa-solid fa-sun"></i></div>
      <div>{windDirection}</div>
      </div>
      <div className='flex flex-col items-center'>
    <p>sunrise</p>
    <div><i className="fa-solid fa-sun"></i></div>
      <div>{sunrise}</div>
      </div>
      <div className='flex flex-col items-center'>
    <p>sunset</p>
    <div><i className="fa-solid fa-sun"></i></div>
      <div>{sunset}</div>
      </div>
      
    <div></div>
    </>

  )
}
