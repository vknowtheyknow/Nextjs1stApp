import React from "react";
export default function Student(props){
    const {id, name, age} = props;
    return(
        <div className="border-2 border-gray-400 rounded-md shadow-md w-1/2 p-4 m-2">
            <div className="min-w-full text-center px-2 py-4 text-lg text-blue-500">
                Student Id: {id},Student Name: {name}, Age:{age}
            </div>
        </div>
    )
}