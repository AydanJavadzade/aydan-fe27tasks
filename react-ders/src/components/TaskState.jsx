// import { useState } from "react"

// function State() {
//     const [count, setCount] = useState(0)

//     const azalt = () => {
//         if (count !== -10) {
//             setCount(count - 1)
//         }
//     }
//     const artir = () => {
//         if (count !== 10) {
//             setCount(count + 1)
//         }
//     }
//     return (
//     <>
//         <h1>{count}</h1>
//         <button onClick={artir}>artir</button>
//         <button onClick={azalt}>azalt</button>
//         <button onClick={()=>{setCount(0)}}>sifirla</button>
//     </>)
// }
// export default State;



//export const ChangeCount=()=>{
    // const [count,setCount]=useState(0)
//   setInterval(( )=>setCount(count+1),1000)
// return<>
// <h1>{count}</h1>
// </>
// }
 




// export const ChangeColor=()=>{
//     const [color,setColor]=useState('red')
//     const [value,setValue]=useState("")
//     const changeBgColor=(colorName)=>{
//         setColor(colorName)}
//         return<>
//         <input type="text" onChange={(e)=>setValue(e.target.value)}></input>
//         <p>{value}</p>
//         <div className="color-div" style={{backgroundColor:color}}></div>
//          <button onClick={()=>changeBgColor('red')}>red</button>
//          <button onClick={()=>changeBgColor('green')}>green</button>
//          <button onClick={()=>changeBgColor('yellow')}>yellow</button>
//          <button onClick={()=>changeBgColor('blue')}>blue</button>
//          <button onClick={()=>changeBgColor('purple')}>purple</button>
//         </>
//     }
//   
