import React, {useState} from "react";
import styled from "styled-components";
import WorkspaceItem from "./WorkspaceItem";
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
  margin-left: 5px;
`
const Items=styled.div`
padding: 16px;
  color: ${textGrey}`
function WorkSpaceItems(props) {
    const [visible, setVisile]= useState(true)

    return(
        <Items >
        <TitleWrapper onClick={()=>setVisile(!visible)} >
<Icon className= {visible? "array array_up": "array array_down"} src={IconArray} />
            {props.title}
        </TitleWrapper>
            {visible?<div >
                {props.items.map(item=>{

                    return <WorkspaceItem key={item} item={item}/>
                })   }
            </div> : null}


        </Items>

    )
}

export default WorkSpaceItems
