import React from "react";
import styled from "styled-components";
import SectoionBox from "./components/SectoionBox";
import ToolsMenu from "./components/SectionTools";
import MainBox from "./components/MainBox";
const Div =styled.div`
  display: flex;
  height: 100vh;
`

function App() {
  return (
    <Div>
     <SectoionBox />
     <ToolsMenu />
     <MainBox />
    </Div>
  );
}

export default App;
