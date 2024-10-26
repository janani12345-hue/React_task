import { useState } from "react"

function Input(){
    const [value,setvalue] = useState("")
    function change(event){
        setvalue(event.target.value)
    }

    return(

      <form>
        <h1>Form Input Handler</h1>
        <input type="text" value={value} onChange={change}></input>
        <p>{value}</p>
      </form>
    )
}
export default Input