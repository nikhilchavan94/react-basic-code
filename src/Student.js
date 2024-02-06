import React, { useState } from "react";


function Student()
{

    const[name,Setname]=useState('')
    const[surname,setsurname]=useState('')
    const[age,setage]=useState('')
    function Submitform(e)
    {
        e.preventDefault();console.log(name,surname,age);
      
    }

    return(
        <div>
            <form onSubmit={Submitform}><input type="text" placeholder="Enter Name" onChange={(e)=>Setname(e.target.value)}/>
            <input type="text" placeholder="Enter Surname" onChange={(e)=>setsurname(e.target.value)}/>
            <input type="number" placeholder="Enter Age"  onChange={(e)=>setage(e.target.value)}/>
            <button>Submit</button></form>
        </div>
    )
}
export default Student