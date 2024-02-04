import React, { useState } from "react";


function Student()
{
    const [name,setname]=useState('');
    const [surname,setsurname]=useState('');
    const[check,checkbox]=useState(false);
    

    function submit(e)
    {
            e.preventDefault();
            console.log(name,surname,check);
    }
    return (<div>
        
        <form   onSubmit={submit}> <input type="text" placeholder="Enter Your Name" onChange={(e)=>setname(e.target.value)}/>
        <input type="text" placeholder="Enter Surname" onChange={(e)=>setsurname(e.target.value)}/>
        <input type="checkbox" onChange={(e)=>checkbox(e.target.checked)} />
        <button>Submit</button></form>
    </div>);
}
export default Student