import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import { Rating} from './components/Rating/Rating';



const App =() =>{
  console.log("App rendering")
  return(
    <div>
      <PageTitle title={"This is APP component"}/>
      <PageTitle title={"My friends"}/>
      Article 1
      <Accordion titleValue={"First example"} collapsed={true}/>
      <Accordion titleValue={"Second example"} collapsed={false}/>
      Article 2
      <Rating value={3}/>
      <Rating value={4}/>
      <Rating value={5}/>
      <Rating value={1}/>
      <Rating value={0}/>
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
