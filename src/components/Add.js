import {useState} from "react";

export default function Add({tasks,setTasks}){
    const [addInput,setAddinput]=useState("");
   
    function handleSettask(){
        setTasks(
            [...tasks,{'id': tasks.length, "text": addInput, "done": false }])
            setAddinput("");}
        
    return(<>
       <input onChange={(e)=>setAddinput(e.target.value)}  value ={addInput}/> 
       <button onClick={()=>handleSettask()}
    >Add</button>
    </>)
}
