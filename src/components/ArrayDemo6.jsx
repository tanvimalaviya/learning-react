import React from 'react'

const ArrayDemo6 = () => {
    var cityes = [
        {
            id:11,
            cityname:"delhi",
            populate:1000000,
            aqi:200
        }, 
        {
            id:12,
            cityname:"ahmedabad",
            populate:3000000,
            aqi:300
        },       
        {
            id:13,
            cityname:"surat",
            populate:"500000",
            aqi:150
        },       
        {
            id:14,
            cityname:"vadodara",
            populate:500000,
            aqi:400
        },       
        {
            id:15,
            cityname:"pune",
            populate:6000000,
            aqi:500
        }            
    ]
  return (
    <div style={{textAlign:"center"}}>
        {/* <h1>Array Demo 6</h1> */}
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>CITYNAME</th>
                    <th>POPULATE</th>
                    <th>AQI</th>
                </tr>
            </thead>
            <tbody>
                {cityes.map((city)=>{
                        return(
                            <tr>
                                <td>{city.id}</td>
                                <td>{city.cityname}</td>
                                <td style={{color:city.populate>500000?"red":"black"}}>{city.populate}</td>
                                <td>
                                    <span style={{color:city.aqi > 300 ? 'red' : city.aqi < 200 ? 'green' : 'black'}
                                }>
                                        {city.aqi}</span></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
      
    </div>
  )
}

export default ArrayDemo6
