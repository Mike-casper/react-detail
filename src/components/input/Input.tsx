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
export const ControledInput=()=>{
    const [parentValue, setParentValue] = useState("")
    debugger
    const onChange=(e:ChangeEvent<HTMLInputElement>)=> {
        debugger
        setParentValue(e.currentTarget.value)
    }
    return <input value={parentValue} onChange={onChange}/>
}

export const ControlledCheckbox=()=>{
const [parentValue, setParentValue] = useState(true)
    const onChange = (e:ChangeEvent<HTMLInputElement>)=> {
        setParentValue(e.currentTarget.checked)
    }
    return <input type="checkbox" checked={parentValue} onChange={onChange}/>
}

export const ControlledSelect=()=>{
const [parentValue, setParentValue] = useState <string|undefined>(undefined);
// const [parentValue, setParentValue] = useState <string|undefined>("2");
    const onChange = (e:ChangeEvent<HTMLSelectElement>)=>{
    setParentValue(e.currentTarget.value)
    }
    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value={"1"}>Kiev</option>
        <option value={"2"}>Minsk</option>
        <option value={"3"}>Moscow</option>
    </select>
}
// export const GetValueOfUncontroledInputByButtonPress = () => {
//     const [value, setValue] = useState("");
//     return <>
//         <input id={"InputID"}/> <button onClick={(e)=>{
//             const el = document.getElementById("InputID") as HTMLInputElement;
//             setValue(el.value);
//         }}>Save</button> - actual value: {value}
//     </>;
// } нарушает принципы React - 12 видео

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

