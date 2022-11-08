import React, {useState} from "react";



type RatingPropsType ={
}
export function UncontroledRating(props:RatingPropsType) {

    let [value, setValue] = useState(0)

    console.log("rating rendered")
    return (
        <div>
            <Star selected={value > 0} setValue={()=>{setValue(1)}}/>
            <Star selected={value > 1} setValue={()=>{setValue(2)}}/>
            <Star selected={value > 2} setValue={()=>{setValue(3)}}/>
            <Star selected={value > 3} setValue={()=>{setValue(4)}}/>
            <Star selected={value > 4} setValue={()=>{setValue(5)}}/>
        </div>
    )
}


    type StarPropsType = {
        selected: boolean
        setValue:()=>void
    }


    function Star(props: StarPropsType)  {
        console.log("star rendered")
        // return (props.selected ? <span><b>star </b></span> : <span>star </span>)
        return <span onClick={()=>{props.setValue()}}>
            {props.selected ? <b>star</b> : "star"} </span>
    }


    //     if(props.selected===true){
    //         return <span><b>star </b></span>
    //     }else{
    //         return <span>star </span>
    //     }
    //   }
    // }


// <AccordionTitle title={props.titleValue}/>
// {!props.collapsed && <AccordionBody/>}
// </div>
// }
//simplifiled code above
//     if (props.collapsed === true) {
//         return (
//             <div>
//                 <AccordionTitle title={props.titleValue}/>
//                 <AccordionBody/>
//             </div>
//         )
//     } else {
//         return (
//             <div>
//                 <AccordionTitle title={props.titleValue}/>
//             </div>
//         )
//     }
// }