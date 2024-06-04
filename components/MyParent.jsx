'use client'
import React,{useState} from "react"
import MyChild from './MyChild'
export default function MyParent(){
    const [state,setState] = useState(0);
    return(
        <div className="w-64">
            <div className="text-center text-xl text-blue-500 border-blue-400 border-4 rounded-xl bg-blue-200 p-8">{state}</div>
            <MyChild setData={setState}/>
        </div>
    )
}