type AccordionPropsType ={
  titleValue: string
  collapsed:boolean
    onClick:(collapsed:boolean)=>void
}


function Accordion(props:AccordionPropsType) {
    console.log("accordion rendered")
    return <div>
        <AccordionTitle title={props.titleValue}
        onClick={props.onClick}
        collapsed={props.collapsed}/>
        {!props.collapsed && <AccordionBody/>}
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
      collapsed:boolean
      onClick:(collapsed:boolean)=>void
  }
  function AccordionTitle(props:AccordionTitlePropsType){
    console.log("AccordionTitle is rendered")
    return (
        <h3 onClick={()=>props.onClick(props.collapsed)}>
            {props.title}</h3>
    )
  }
  function AccordionBody(){
    console.log("AccordionBody is rendered")
    return ( <ul>
        <li>1</li>
        <li>2</li>
      </ul>
    )
  }


  export default Accordion;