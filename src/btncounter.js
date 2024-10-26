import { useState } from "react"

function Counter(){
    const [count,setcount] = useState(0)
function counter(){
    setcount(count+1)
}
    return(
        <div>
        <h1>{count}</h1>
        <button onClick={counter}>Increment</button>
        </div>
    )
}

export default Counter