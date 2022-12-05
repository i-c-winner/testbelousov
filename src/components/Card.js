import React, {useEffect, useState} from "react";
import styled from "styled-components";

const CardElement=({className, children, onDragstart, draggable, id})=>{
    return <div className={className} children={children} onDragStart={onDragstart} id={id} draggable={draggable}>
        {children}
    </div>
}

const CardWrapper=styled(CardElement)`
  &:first-child {
    margin-top: 41px;
  }
  padding: 15px;
  background-color: ${props=>{
    return  props.theme.bgColor
}};
  border-radius: 7px;
  width: 85%;
  margin-top: 10px;    
  min-width: 150px;
  text-decoration: ${props=>props.theme.textDecoration};
`
function getColor(title) {
    if (title==="Compeled") {
        return "#f0f0f0"
    }
    const render=Math.floor(Math.random()*4)
    const color=['#abedce', '#d8ddcc', '#ffdfba', '#f2bfa1']
    return color[render]
}

function getRandomId(length) {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function Card (props) {
    const textDecoration = props.title==='Compeled'? "line-through": 'initial'
    const color= getColor(props.title)
    const [propsTheme, setPropsTheme]= useState({
        bgColor: color,
        textDecoration
    })
    function actionDragStart(event) {
        event.dataTransfer.setData('card', event.target.id)
    }
    CardWrapper.defaultProps={
        theme:propsTheme
    }

    useEffect(()=>{
        setPropsTheme({
            bgColor: "red"
        })
    },[])
    return (
         <CardWrapper key={getRandomId(5)} id={getRandomId(8)} draggable="true" onDragstart={actionDragStart}>
           <p>{props.card.text}</p>
           <time>{props.card.time}</time>
         </CardWrapper>
    )
}

export default Card
