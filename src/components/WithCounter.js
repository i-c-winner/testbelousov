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
  background-color:${(props=>props.theme.styles.bgColor)};
  padding: ${props=>props.theme.styles.padding};
  position: ${props=>props.theme.styles.position};
  top: ${props=>props.theme.styles.top};
  left: ${props=>props.theme.styles.left};
  border-radius: ${props=>props.theme.styles.borderRadius};
  color: ${props=>props.theme.styles.color};
  font-size: ${props=>props.theme.styles.fontSize};  
  width: ${props=>props.theme.styles.width|| ''};
  height: ${props=>props.theme.styles.height|| ''};
`
function WithCounter(props) {
    Count.defaultProps={
        theme:{
            styles: props.styles
        }
    }
    return (
        <Div>
            {props.src? <Icon src={props.src} />: null}
            <Count>{props.count}</Count>
        </Div>
    )
}

export default WithCounter
