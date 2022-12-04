import React from "react";
import styled from "styled-components";

const CardsBox=styled.div`
  display: flex;
  width: 282px;
  flex-flow: column;
  align-items: center;
  border-right: 1px solid rgba(25, 25, 25, .1);
  padding-left: 4px;
  `

const Card=styled.div`
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

    return (
        <CardsBox>
            {props.cards.cards.map((card, index)=>{
                const color= getColor(props.cards)
                Card.defaultProps={
                    theme:{
                        bgColor:color,
                        textDecoration
                    }
                }
                return <Card key={index}>
                    <p>{card.text}</p>
                    <time>{card.time}</time>
                </Card>
            })}
        </CardsBox>
    )
}
export default Cards
