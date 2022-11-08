import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import { Rating, RatingValueType} from './components/Rating/Rating';
import { Onoff } from './components/OnOff/Onoff';
import UncontroledAccordion from "./components/Accordion/UncontroledAccordion";
import { UncontroledRating } from './components/Rating/UncontroledRating';




const App =() =>{
  console.log("App rendering")
    let [ratingValue, setRatingValue] = useState<RatingValueType>(3);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
  return(
    <div>
        <Rating value={ratingValue}
                onClick={setRatingValue}/>
        {/*<Onoff/>*/}
        {/*<Onoff/>*/}

        <UncontroledRating/>
        {/*<UncontroledAccordion titleValue={"Menu"}/>*/}
        <UncontroledAccordion titleValue={"Users"}/>
        <Accordion titleValue={"First example"}
                   collapsed={accordionCollapsed}
        onClick={(collapsed)=>setAccordionCollapsed(!accordionCollapsed)}/>

      {/*<PageTitle title={"This is APP component"}/>*/}
      {/*<PageTitle title={"My friends"}/>*/}
      {/*Article 1*/}
      {/*<Accordion titleValue={"First example"} collapsed={true}/>*/}
      {/*<Accordion titleValue={"Second example"} collapsed={false}/>*/}
      {/*Article 2*/}

      {/*<Rating value={1}/>*/}
      {/*<Rating value={2}/>*/}

      {/*<Rating value={4}/>*/}
      {/*<Rating value={5}/>*/}
    </div>
  )
}

type PageTitlePropsType = {
title: string
} 

function PageTitle(props:PageTitlePropsType){
  console.log("Title rendered")
return <h1>{props.title}</h1>
}








export default App;
