import { useState } from "react"

function Toogle(){
    const [visible,setvisible]=useState(true)
   function click(){
    setvisible(!visible)
   }
    return(
        <div>
            
        <h1 style={{display:visible?"block":"none"}}>Welcome to EMC </h1>
        <button onClick={click}>Toogle</button></div>
        
    )
}
export default Toogle