import MemoryCard from "./MemoryCard";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export default function Memories() {
  const [memories, setMemories] = useState([])


useEffect(()=>{
  async function fetchMemories(){
    try {
      const {data}  =  await axios.get("http://localhost:8080/posts")
      console.log('data: ', data);
      setMemories(data)
      
    } catch (error) {
      console.log({error:error})
    }
  }
  fetchMemories()
},[])

  return <>
  <div className="grid grid-cols-2 gap-4 w-full">

    {memories && memories.map((memory)=>{
      return (
        <MemoryCard memory={memory}/>
      )
    })}
  </div>

  </>;
}
