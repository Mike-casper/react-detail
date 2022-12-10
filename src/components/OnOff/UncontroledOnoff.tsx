import React, {useState} from "react";
import {
    ControledInputWithValue,
    GetValueOfUncontroledInputByButtonPress,
    TrackValueOfUncontroledInput,
    UncontroledInput
} from "../input/Input";

type OnoffPropsType={
    onChange:(on:boolean)=>void
}

export function UncontroledOnoff(props:OnoffPropsType){
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
    const onClicked=()=>{
        setOn(true)
        props.onChange(true)
    }
    const offClicked=()=>{
        setOn(false)
        props.onChange(false)
    }
    return <div>
        <div style={onStyle} onClick={onClicked}>On</div>
        <div style={offStyle} onClick={offClicked}>Off</div>
        <div style={indicateStyle}></div>
        <div>
            <UncontroledInput/>
            <ControledInputWithValue/>
            <TrackValueOfUncontroledInput/>
            <GetValueOfUncontroledInputByButtonPress/>
        </div>
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
