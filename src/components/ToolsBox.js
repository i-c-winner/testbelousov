import React from "react";
import styled from "styled-components";
import {theme} from "../ui/theme";
import {IconNotes, IconRoadMap, IconTasks, IconFiles, IconCalendar} from "../images/svg";
import Item from "./Item";

const {textWhite, textGrey, bgTools} = theme
const items=[{
    name: "Roadmap",
    icon: IconRoadMap
    },
    {
        name: "Schedule",
        icon: IconCalendar
    },
    {
        name: "Tasks",
        icon: IconTasks
    },
    {
        name: "Notes",
        icon: IconNotes
    },
    {
        name: "Files",
        icon: IconFiles
    }
]
const ToolsTitle=styled.h2`
  color: ${textGrey};
  margin: 0;
`
const Tools=styled.div`
  background-color: ${bgTools};
  width: 154px;
  height: 100vh;
  padding: 25px;
`
function ToolsMenu () {
    return(
        <Tools>
            <ToolsTitle>Tools</ToolsTitle>
            {items.map(item=><Item  key={item.name} classes="icon icon_tools" src={item.icon} item={item.name}/>)}
        </Tools>
    )
}

export default ToolsMenu
