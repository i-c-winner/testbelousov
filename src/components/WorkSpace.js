import React from "react";
import styled from "styled-components";
import avatar from '../images/img/avatar.png'
import {theme} from "../ui/theme";
import ItemsWrapper from "./ItemsWrapper";

const favorites=['Marceting', 'Mobille APP']
const meProjects=['Marceting', 'Lending Pages', "Wedding",
    'Mobille App', 'House Construction']
const {textWhite} =theme
const WorkSpaces=styled.div`
`
const TitlesWrapper=styled.div`
  padding: 6px 16px;
  display: flex;
  margin-top: 0;
`

const TextTitle=styled.p`
  color: ${textWhite};
  margin: 0 0 0 6px;
  font-size: 14px;
  line-height: 22px;
`
function WorkSpace () {
    return (
<WorkSpaces>
<TitlesWrapper>
    <img width="22px"  height="22px" src={avatar} alt='Аватар'/>
    <TextTitle>
        My Workspace
    </TextTitle>
</TitlesWrapper>
    <ItemsWrapper  title='Favorites' items={favorites}/>
    <ItemsWrapper  title='My Proejcts' items={meProjects}/>


</WorkSpaces>
    )
}

export default WorkSpace
