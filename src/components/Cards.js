import React from "react";
import styled from "styled-components";
import Card from "./Card";

const CardsBoxElement=({className, children, onDragOver, onDrop})=>{
    return <div className={className} children={children} onDragOver={onDragOver} onDrop={onDrop}>
        {children}
    </div>
}
const CardsBox=styled(CardsBoxElement)`
  display: flex;
  width: 282px;
  flex-flow: column;
  align-items: center;
  border-right: 1px solid rgba(25, 25, 25, .1);
  padding-left: 4px;
  `
function Cards(props){
    function actionDragOver(event) {
        event.preventDefault()
    }

    function actionOnDrop(event) {
        const id=event.dataTransfer.getData('card')
        event.target.append(document.getElementById(id))
    }

    return (
        <CardsBox onDragOver={actionDragOver} onDrop={actionOnDrop}>
            {props.cards.cards.map((card, index)=>{
              return <Card card={card} title={props.cards.title}/>
            })}
        </CardsBox>
    )
}
export default Cards
