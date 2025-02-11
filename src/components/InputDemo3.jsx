import React ,{ useState } from 'react'

const InputDemo3 = () => {
    const [moviename, setmoviename] = useState("")
    const [theater, settheater] = useState("")
    const [movieticketnum, setmovieticketnum] = useState()
    const [date, setdate] = useState()
    const [time, settime] = useState()
  return (
    <div style={{textAlign:'center'}}> 
        <h1>TICKET BOOKING</h1>
        <div>
            <label>MOVIE NAME</label>
            <input type='text' placeholder='enter movie name' onChange={(event)=>{setmoviename(event.target.value)}}></input>
            {moviename}
        </div>
        <div>
            <label>THEATER NAME</label>
            <input type='text' placeholder='enter theater name' onChange={(event)=>{settheater(event.target.value)}}></input>
            {theater}
        </div>
        <div>
            <label>MOVIE TICKET NUMBER</label>
            <input type='number' placeholder='enter movieticket number' onChange={(event)=>{setmovieticketnum(event.target.value)}}></input>
            {movieticketnum}
        </div>
        <div>
            <label>DATE</label>
            <input type='Date'placeholder='enter date' onChange={(event)=>{setdate(event.target.value)}}></input>
            {date}
        </div>
        <div>
            <label>TIME</label>
            <input type='Time' placeholder='enter time ' onChange={(event)=>{settime(event.target.value)}}></input>
            {time}
        </div>
        <button>submit</button>
      
    </div>
  )
}

export default InputDemo3
