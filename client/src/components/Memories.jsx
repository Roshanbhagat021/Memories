import MemoryCard from "./MemoryCard";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export default function Memories({changeHappened,setChangeHappended}) {
  const [memories, setMemories] = useState([])


useEffect(()=>{
  async function fetchMemories(){
    try {
      const {data}  =  await axios.get("http://localhost:8080/posts")
      setMemories(data)
      
    } catch (error) {
      console.log({error:error})
    }
  }
  fetchMemories()
},[changeHappened])

  return <>
  <div className="grid grid-cols-2 gap-4 w-full">

    {memories && memories.map((memory,index)=>{
      return (
        <MemoryCard key={index} memory={memory} setChangeHappended={setChangeHappended}/>
      )
    })}
  </div>

  </>;
}
