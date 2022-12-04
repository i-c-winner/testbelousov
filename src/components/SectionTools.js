import React from "react";
import styled from "styled-components";
import {theme} from "../ui/theme";
import {items} from "../constants/constants";
import Item from "./Item";

const { textGrey, bgTools} = theme

const SectionTools=styled.div`
  background-color: ${bgTools};
  min-width: 119px;
  padding: 25px 25px 25px 13px;
`

const ToolsTitle=styled.h2`
  color: ${textGrey};
  margin: 0;
  padding-bottom: 28px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 31px;`

function ToolsMenu () {
    return(
        <SectionTools>
            <ToolsTitle>Tools</ToolsTitle>
            {items.map(item=><Item  key={item.name} classes="icon icon_tools" src={item.icon} item={item.name}/>)}
        </SectionTools>
    )
}

export default ToolsMenu
