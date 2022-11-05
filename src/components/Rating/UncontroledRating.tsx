import React, {useState} from "react";



type RatingPropsType ={
}
export function UncontroledRating(props:RatingPropsType) {

    let [value, setValue] = useState(4)

    console.log("rating rendered")
    return (
        <div>
            <Star selected={value > 0}/>
            <button onClick={() => {
                setValue(1)
            }}>1
            </button>
            <Star selected={value > 1}/>
            <button onClick={() => {
                setValue(2)
            }}>2
            </button>
            <Star selected={value > 2}/>
            <button onClick={() => {
                setValue(3)
            }}>3
            </button>
            <Star selected={value > 3}/>
            <button onClick={() => {
                setValue(4)
            }}>4
            </button>
            <Star selected={value > 4}/>
            <button onClick={() => {
                setValue(5)
            }}>5
            </button>
        </div>
    )


    type StarPropsType = {
        selected: boolean
    }


    function Star(props: StarPropsType) {
        console.log("star rendered")
        return (props.selected ? <span><b>star </b></span> : <span>star </span>)
    }
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