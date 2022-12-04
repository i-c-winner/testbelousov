import React from "react";
import styled from "styled-components";

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

const CardElement=({className, children, onDragstart, draggable, id})=>{
    return <div className={className} children={children} onDragStart={onDragstart} id={id} draggable={draggable}>
        {children}
    </div>
}

const Card=styled(CardElement)`
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
function getColor(card) {
    if (card.title==="Compeled") {
        return "#f0f0f0"
    }
    const render=Math.floor(Math.random()*4)
    const color=['#abedce', '#d8ddcc', '#ffdfba', '#f2bfa1']
    return color[render]
}

function Cards(props){
    const textDecoration = props.cards.title==='Compeled'? "line-through": 'initial'

    function actionDragOver(event) {
        event.preventDefault()
    }
    function actionDragStart(event) {
        event.dataTransfer.setData('card', event.target.id)

    }
    function actionOnDrop(event) {
        const id=event.dataTransfer.getData('card')
        event.target.append(document.getElementById(id))
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

    return (
        <CardsBox onDragOver={actionDragOver} onDrop={actionOnDrop}>
            {props.cards.cards.map((card, index)=>{
                const color= getColor(props.cards)
                Card.defaultProps={
                    theme:{
                        bgColor:color,
                        textDecoration
                    }
                }
                return <Card key={getRandomId(5)} id={getRandomId(8)} draggable="true" onDragstart={actionDragStart}>
                    <p>{card.text}</p>
                    <time>{card.time}</time>
                </Card>
            })}
        </CardsBox>
    )
}
export default Cards
