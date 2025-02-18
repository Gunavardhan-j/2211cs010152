//17-02-2025


//function App(){
// const handleClick=()=>{
// alert("Button clicked")
//};
// return(
//   <button onClick={handleClick}>Click Me</button>
// )
//}
//export default App;



// import React ,{useState}from 'react'

// function App(){
//   const[text,setText]=useState("")
//   //initially the value is set as empty string

//   const handleChange=(event)=>{
//     setText(event.target.value)
//     //update the text state with the value input field
//   }
//   return(
//     <div>
//       <input type='text' value={text} onChange={handleChange}/>
//       <p>your text:{text}</p>
//     </div>
//   )
// }
// export default App;




// import React,{ useState} from "react";

// function App(){
//   const[isHovered, setIsHovered] = useState(false);
//   const handleMouseEnter=()=>{
//     setIsHovered(true);
//   }
//   const handleMouseLeave=()=>{
//     setIsHovered(false);
//   }

//   return(
//     <div>
//       <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
//       style={{backgroundColor:isHovered ? 'lightblue':'lightgray',color:isHovered ? 'white':'black'}}
//       >Hover</button>

//       {isHovered && <p>Mouse is over the button</p>}
//     </div>
//   )
// }
// export default App;










//18-02-2025
import React,{useState} from 'react';
import './App.css';
function App(){
  const[key,setKey]=useState("");
  const handleKeyDown=(event)=>{
    setKey(event.key);
  };
  return(
    <div className="app">
      <h1>Welcome to Sai It solutions
      </h1>
      {key&&<h2>Pressed key:{key}</h2>}
      <input type="text" onKeyDown={handleKeyDown} placeholder="pressed here"/>
    </div>
  )
}
export default App;












