import React, {useState} from "react";
import styled from "styled-components";
import Item from "./Item";
import {theme} from "../ui/theme";
import Icon from "../utils/Icon";
import { IconArray } from "../images/svg";

const {textWhite, textGrey}=theme
const TitleWrapper=styled.h3`
  display: flex;
  justify-content: start;
  color: ${textWhite}
`
const TextTitle=styled.p`
color: ${textWhite};
  margin: 0;
  &:hover {
    cursor: pointer;
  }
`
const ItemsBox=styled.div`
  padding: 16px;
  color: ${textGrey}`
function Items(props) {
    const [visible, setVisile]= useState(true)

    return(
        <ItemsBox >
        <TitleWrapper onClick={()=>setVisile(!visible)} >
            <Icon className= {visible? "array array_up": "array array_down"} src={IconArray} />
              <TextTitle>
                  {props.title}
              </TextTitle>

        </TitleWrapper>
            {visible?<div >
                {props.items.map(item=>{
                    return <Item key={item} item={item}/>
                })   }
            </div> : null}
        </ItemsBox>

    )
}

export default Items
