import React from 'react'

export default function Days({dailyMin,dailyMax}) {


  return (
 <>

<div className='flex w-screen justify-between p-2'>
  <p className=' w-[15%]' >Monday</p>
  <div><i className="fa-regular fa-sun"></i></div>
  <div>{dailyMin}'-{dailyMax}'</div>
</div>
<div className='flex w-screen justify-between p-2'>
  <p className=' w-[15%]'>Tuesday</p>
  <div><i className="fa-regular fa-sun"></i></div>
  <div>{dailyMin}'-{dailyMax}'</div>
</div>
<div className='flex w-screen justify-between p-2'>
  <p className=' w-[15%]' >Wednesday</p>
  <div><i className="fa-regular fa-sun"></i></div>
  <div>{dailyMin}'-{dailyMax}'</div>
</div>
<div className='flex w-screen justify-between p-2'>
  <p className=' w-[15%]' >Thursday</p>
  <div><i className="fa-regular fa-sun"></i></div>
  <div>{dailyMin}'-{dailyMax}'</div>
</div>
<div className='flex w-screen justify-between p-2'>
  <p className=' w-[15%]' >Friday</p>
  <div><i className="fa-regular fa-sun"></i></div>
  <div>{dailyMin}'-{dailyMax}'</div>
</div>
<div className='flex w-screen justify-between p-2'>
  <p className=' w-[15%]' >Saturday</p>
  <div><i className="fa-regular fa-sun"></i></div>
  <div>{dailyMin}'-{dailyMax}'</div>
</div>
<div className='flex w-screen justify-between p-2'>
  <p className=' w-[15%]'>Sunday</p>
  <div><i className="fa-regular fa-sun"></i></div>
  <div>{dailyMin}'-{dailyMax}'</div>
</div>
 
 
 </>
  )
}
