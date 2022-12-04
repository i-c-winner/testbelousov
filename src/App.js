import React from "react";
import styled from "styled-components";
import MenuBox from "./components/MenuBox";
import ToolsMenu from "./components/ToolsBox";
import MainBox from "./components/MainBox";
const Div =styled.div`
  display: flex;
  height: 100vh;
`

function App() {
  return (
    <Div>
     <MenuBox />
     <ToolsMenu />
     <MainBox />
    </Div>
  );
}

export default App;
