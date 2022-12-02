import React, {useState} from "react";
import styled from "styled-components";
import avatar from '../images/img/avatar.png'
import {theme} from "../ui/theme";
import Items from "./WorkspacItems";

const favorites=['Marceting', 'Mobille APP']
const meProject=['Marceting', 'Lending Pages', 'Mobille App', 'House Construction']
const {textWhite, textGrey, textBlack} =theme
const Div=styled.div`
`
const Title=styled.div`
  padding: 6px 16px;
  display: flex;
`

const TextTitle=styled.p`
color: ${textWhite};
  margin: 0 0 0 20px;
  font-size: 14px;
  line-height: 22px;
`
function WorkSpace () {
    return (
<Div>
<Title>
    <img width="22px"  height="22px" src={avatar} alt='Аватар'/>
    <TextTitle>
        My Workspace
    </TextTitle>


</Title>
    <Items  title='Favorites' items={favorites}/>
    <Items  title='My Proejcts' items={meProject}/>


</Div>
    )
}

export default WorkSpace
