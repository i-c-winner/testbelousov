import React, {useState} from "react";
import styled from "styled-components";
import Item from "./Item";
import {theme} from "../ui/theme";
import Icon from "./Icon";
import { IconArrow } from "../images/svg";

const {textWhite, textGrey}=theme
const TitleWrapper=styled.h3`
  display: flex;
  justify-content: start;
  color: ${textWhite}
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  margin-top: 0;
  padding-left: 8px;
  margin-bottom: 5px;
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
            <Icon className= {visible? "arrow arrow_up": "arrow arrow_down"} src={IconArrow} />
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
