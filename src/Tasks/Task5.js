import { useState } from "react";
 export default function Counters(){
    const [count,setCount]=useState(0)
    function incrementing(){
        setCount(count+1)
    }
    function decrementing(){
        setCount(count-1)
    }
return(
    <div>
        <p>{count}</p>
        <button onClick={incrementing}>Increment</button>
        <button onClick={decrementing}>Decrement</button>
    </div>
)

}