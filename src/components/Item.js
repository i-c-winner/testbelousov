import React from "react";
import styled from "styled-components";
import Icon from "./Icon";

const Div=styled.div`
  display: flex;
  padding: 15px 0;
`
const TextItem=styled.p`
  margin: 0;  
`
function Item (props) {
    return (<Div>
        <Icon className={props.classes} src={props.src||''}></Icon>
        <>{props.item}</>
    </Div>

           )
}

export default Item
