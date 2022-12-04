import React from "react";
import styled from "styled-components";
import WithCounter from "./WithCounter";

const CardsBox=styled.div`
  display: flex;
  width: 270px;
  flex-flow: column;
  align-items: center;
  `
const TitleBox=styled.h4`
  text-align: center;
  position: relative;
  display: flex;
  ;
`

const Title=styled.p`
  margin-right: 25px;
`
const Card=styled.div`
  &:nth-child(2){
    margin-top: 50px;
  }
  padding: 15px;
  background-color: ${props=>{
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
const stylesForCounter={
    bgColor: "#efefff",
    padding: "3px",
    borderRadius: "50%",
    color: "black",
    fontSize: "13px",
    width: "15px",
    height: "15px",

}
function Cards(props){
    return (

        <CardsBox>
            <TitleBox>
                <Title>{props.cards.title}</Title>
                {props.cards.title==="+ Create status"? null:
                    <WithCounter styles={stylesForCounter} count={props.cards.count} />}
            </TitleBox>
            {props.cards.cards.map((card, index)=>{
                const color= getColor(props.cards)
                Card.defaultProps={
                    theme:{
                        bgColor:color
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
