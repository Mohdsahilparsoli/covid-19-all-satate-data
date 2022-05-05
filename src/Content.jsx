import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./index.css"

const Content =()=>{

            const[maindata,updatedata]= useState([]);

            const getdata = async()=>{
                try{
            const data = await fetch(`https://data.covid19india.org/data.json`) 
            //console.log(data)
            const actualdata = await data.json();
            //console.log(actualdata)
            //console.log(actualdata.statewise[0])
           // updatedata(actualdata.statewise);

                }catch(e){
                    console.log(` your error is ${e}`)
                }

            }


            useEffect(()=>{
                getdata()
            },[])
return(<>
<div className="center">
<div className="container">
<div className="content">
    <h1 className="text-center"><span> INDIA covid-19</span> Dashboard</h1>
</div>
<div className="main mt-5"> 
   <table class="table">
  <thead class="table-dark">
  <tr>
      <th scope="col">State</th>
      <th scope="col">Confirmed</th>
      <th scope="col">Recovered</th>
      <th scope="col">Death</th>
      <th scope="col">Active</th>
      <th scope="col">Updated</th>
    </tr>
  </thead>

  <tbody>
{
    maindata.map((cur,ind)=>{
        return(<>

            
  <tr>
        <th>{cur.state}</th>
        <th>{cur.confirmed}</th>
        <th>{cur.recovered}</th>
        <th>{cur.deaths}</th>
        <th>{cur.active}</th>
        <th>{cur.lastupdatedtime}</th>
    </tr>
            
        </>)
    }) 
}

  </tbody>

</table>
</div>
</div>
</div>
    </>)
}
export default Content