import React from "react";

export default function Container(){
    const data = [1,2,5,4];
    return(
        <>
           {
            data.map((item,index) => {
                return(
                    <div key={index}>
                        value is: {index},{item}
                    </div>
                )
            })
           }
        </>
    )

}