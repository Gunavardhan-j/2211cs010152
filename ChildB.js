import {memo} from 'react'

const ChildB=({count,increment})=>{
    console.log("Child B rendered")
    return(
        <div>
            <h1>Count:{count}</h1>
            <button onclick={increment}>Increment</button>
        </div>
    )
}
export default memo(ChildB);