import React from "react";
import styled from "styled-components";
import Icon from "./Icon";

const ItemWrapper=styled.div`
  display: flex;
  padding: 15px 0 0;
`
const TextItem=styled.p`
  margin: 0;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
`
function Item (props) {
    return (<ItemWrapper>
        <Icon className={props.classes} src={props.src||''}></Icon>
        <TextItem>{props.item}</TextItem>
    </ItemWrapper>

           )
}

export default Item
