import MyParent from "./MyParent";
import React,{useState} from "react";

export default function MyChild({setData}){
    function Plus(){
        setData((oldState)=>oldState+1)
    }
    function Minus(){
        setData((oldState)=>oldState-1)
    }
    return(
        <div className="flex justify-center items-center mt-3">
            <button onClick={Plus} className="w-16 h-16 rounded-full bg-orange-400 hover:bg-orange-500 text-white text-4xl mx-2 flex items-center justify-center">+</button>
            <button onClick={Minus} className="w-16 h-16 rounded-full bg-orange-400 hover:bg-orange-500 text-white text-4xl mx-2 flex items-center justify-center">-</button>
        </div>
    )
}