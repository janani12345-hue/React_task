import React, { useState } from 'react';
 function List(){  
   const [list,setfruits]=useState(["Garlic","onion","Tomoto"])
    const [boxvalue,setvalue]=useState("")
    function change(event){
      setvalue(event.target.value)
        

    }
    function click(){
setfruits([...list,boxvalue])
        setvalue("")
    }
    return(
<div>
         <input type="text" value={boxvalue} onChange={change}></input>
       <button onClick={click}>Add</button>
        <ul style={{listStyle:"none"}}>
         {
        
            list.map((item)=>{

               return(<li>{item}</li>)
            })
         }


        </ul></div>    )
 }
export default List