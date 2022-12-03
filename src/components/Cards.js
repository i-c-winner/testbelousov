import React from "react";
import styled from "styled-components";
import WithCounter from "./WithCounter";

const CardsBox=styled.div`
  
`
const Title=styled.h4`

`
const Card=styled.div`
  &:nth-child(2){
    margin-top: 50px;
  }
  padding: 15px;
  background-color: ${props=>{
      console.log(props)
     return  props.theme.bgColor
}};
  border-radius: 7px;
  width: 85%;
  height: 84px;
  margin-top: 10px;    
  min-width: 150px;
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
    return (
        <CardsBox>
            <Title>
                {props.cards.title}
            </Title>
            {props.cards.cards.map(card=>{
                const color= getColor(props.cards)
                Card.defaultProps={
                    theme:{
                        bgColor:color
                    }
                }
                return <Card>
                    <p>{card.text}</p>
                    <time>{card.time}</time>
                </Card>
            })}
        </CardsBox>
    )
}
export default Cards
