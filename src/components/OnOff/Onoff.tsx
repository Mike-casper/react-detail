import React, {useState} from "react";

type OnoffPropsType={
    // on:boolean
}

export function Onoff(props:OnoffPropsType){
    console.log("onoff rendered")
    let [on, setOn] = useState(false);
    console.log(on)
    const onStyle= {
        width: "30px",
        height: "20px",
        border:"1px solid black",
        display:"inline-block",
        marginLeft:"15px",
        backgroundColor: on ? "green" : "white"//если правда то грин, иначе вайт
    }
    const offStyle={
        width: "30px",
        height: "20px",
        border:"1px solid black",
        display:"inline-block",
        marginLeft:"10px",
        backgroundColor:on ? "white" : "red"
    };
    const indicateStyle={
        width:"30px",
        height:"30px",
        borderRadius:"15px",
        border:"1px solid black",
        display:"inline-block",
        marginLeft:"20px",
        backgroundColor: on ? "green" : "red"
    };

    return <div>
        <div style={onStyle} onClick={()=>{setOn(true)}}>On</div>
        <div style={offStyle} onClick={()=>{setOn(false)}}>Off</div>
        <div style={indicateStyle}></div>
    </div>
}
//
//
//
//
//
//
//
// {
//     if (props.value !== "true") {
//         return ("no")
//     } else {
//         return ("yes")
//     }
//     return(
//     <>
//         {props.value}
//     </>
// )
