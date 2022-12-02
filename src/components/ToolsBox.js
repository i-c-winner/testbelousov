import React from "react";
import styled from "styled-components";
import {theme} from "../ui/theme";

const {textWhite, textGrey, bgTools} = theme

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

        </Tools>
    )
}

export default ToolsMenu
