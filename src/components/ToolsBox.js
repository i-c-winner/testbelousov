import React from "react";
import styled from "styled-components";
import {theme} from "../ui/theme";

const {textWhite, textGrey, bgTools} = theme
const Menu=styled.div`
  background-color: ${bgTools};
  width: 154px;
  height: 100vh;
`
function ToolsMenu () {
    return(
<Menu />
    )
}

export default ToolsMenu
