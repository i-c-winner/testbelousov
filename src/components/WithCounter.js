import React from "react";
import styled from "styled-components";
import {IconBall} from "../images/svg";
import Icon from "./Icon";

const Div=styled.div`
 display: flex;
 position: relative;
 right: 10px; 
`
const Count=styled.p`
  background-color: red;
  padding: 3px;
  position: absolute;
  top: ${(props=> {
      console.log(props)
     return  props.theme.x+'px'
})};
  left: ${props=>props.theme.y+'px'};
  border-radius: 4px;
  color: white;
  font-size: 13px;  
`


function WithCounter(props) {
    Count.defaultProps={
        theme:{
            x: props.delta.x,
            y: props.delta.y
        }

    }
    return (
        <Div>
           <Icon src={IconBall} />
            <Count>{props.count}</Count>
        </Div>
    )
}

export default WithCounter
