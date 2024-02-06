import { useState } from "react";

function BasicFormValidation() {

    const [name,setname]=useState('')
    const[password,setsurname]=useState('')
    const[usererr,seterr]=useState(false)
    const[passerr,setpasserr]=useState(false)
    function submitform(e)
    {
        if(name.length<3 || password.length<3)
        {
            alert("type correct values")
        }
        else
        {
            alert("all good")
        }
        e.preventDefault();   //to prevent auto submiting the form
    }


    function handle(e)
    {
        const  item =e.target.value
            if(item.length<3)
            {
                seterr(true)
            }
            else
            {
                seterr(false)
            }
            setname(e.target.value)
      }
      function pandle(e)
      {
      const  item =e.target.value
        if(item.length<3)
        {
            setpasserr(true)
        }
        else
        {
            setpasserr(false)
        }
        setsurname(e.target.value)
      }

    return ( <div>
        <form  onSubmit={submitform}>
            <input type="text"  onChange={handle}/>{usererr? <span>Invalid </span>:"" }
            <br/>
            <input type="password" onChange={pandle}/>{passerr? <span>Invalid </span>:"" }
            <br />
            <button type="submit">Submit</button>
            </form>
    </div>)
}

export default BasicFormValidation