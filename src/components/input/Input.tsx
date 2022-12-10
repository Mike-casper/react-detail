import React, {ChangeEvent, useRef, useState} from "react";

export default {
    title: "input",
};
export const UncontroledInput = () => <input/>;

export const TrackValueOfUncontroledInput = () => {

    const [value, setValue] = useState("");
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value;
        setValue(actualValue);
    }
    return <>
        <input onChange={onChange}/> - {value}
    </>;
}
// kolesnayavika
// export const GetValueOfUncontroledInputByButtonPress = () => {
//     const [value, setValue] = useState("");
//     return <>
//         <input id={"InputID"}/> <button onClick={(e)=>{
//             const el = document.getElementById("InputID") as HTMLInputElement;
//             setValue(el.value);
//         }}>Save</button> - actual value: {value}
//     </>;
// } нарушает принципы React 12 видео

export const GetValueOfUncontroledInputByButtonPress = () => {
    const [value, setValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value);
    }

    return <>
        <input ref={inputRef}/>
        <button onClick={save}>Save</button>
        - actual value: {value}
    </>;
}

export const ControledInputWithValue = () => <input value={"Hey"}/>

