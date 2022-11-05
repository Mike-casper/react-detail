import {useState} from "react";

type AccordionPropsType ={
  titleValue: string
  // collapsed:boolean
}

function UncontroledAccordion(props:AccordionPropsType) {
    let[collapsed, setUncollapsed] = useState(false)

    // const collapsed = false;
    return <div>
        <AccordionTitle title={props.titleValue}/> <button onClick={()=>{setUncollapsed(!collapsed)}}>TOOGLE</button>
        {collapsed && <AccordionBody/>}
    </div>
}
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


  type AccordionTitlePropsType = {
    title:string
  }
  function AccordionTitle(props:AccordionTitlePropsType){
    console.log("AccordionTitle is rendered")
    return <h3>-----{props.title}</h3>
    
  }
  function AccordionBody(){
    console.log("AccordionBody is rendered")
    return ( <ul>
        <li>1</li>
        <li>2</li>
      </ul>
    )
  }


  export default UncontroledAccordion;