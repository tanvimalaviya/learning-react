import React from 'react'

const ArrayDemo5 = () => {
    var sales = [
        {
            id:101,
            day:"monday",
            sales:0,
            discount:'10',
            profit:500
        },
        {
            id:102,
            day:"sunday",
            sales:0,
            discount:5,
            profit:200
        },
        {
            id:103,
            day:"saturday",
            sales:0,
            discount:7,
            profit:1000
        },
        {
            id:104,
            day:"thursday",
            sales:0,
            discount:10,
            profit:600
        },
        {
            id:105,
            day:"monday",
            sales:0,
            discount:51,
            profit:234
        }
    ]
    return (
    <div style={{textAlign:'center'}}>
        {/* <h1 style={{backgroundColor:'red'}}>ArrayDemo5</h1> */}
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>DAY</th>
                    <th>SALES</th>
                    <th>DISCOUNT</th>
                    <th>PROFIT</th>
                </tr>
            </thead>
            <tbody>
                {sales.map((sale)=>{
                    return(
                        <tr>
                            <td style={{backgroundColor:sale.discount>50?"green":"white"}}>{sale.id}</td>
                            <td>{sale.day}</td>
                            <td>{sale.sales}</td>
                            <td>{sale.discount}%</td>
                            <td>{sale.profit}</td>
                        </tr>    
                    )
                })

                }
            </tbody>
        </table>
      
    </div>
  )
}

export default ArrayDemo5
