import React from "react";
import styled from "styled-components";
import MenuBox from "./components/MenuBox";
import ToolsMenu from "./components/ToolsBox";
const Div =styled.div`
  display: flex;
`

function App() {
  return (
    <Div>
     <MenuBox />
        <ToolsMenu />
    </Div>
  );
}

export default App;
