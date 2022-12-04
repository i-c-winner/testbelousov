import React from "react";
import styled from "styled-components";
import SectoionBox from "./components/SectoionBox";
import ToolsMenu from "./components/SectionTools";
import SectionMane from "./components/SectionMane";
const Div =styled.div`
  display: flex;
  height: 100vh;
`

function App() {
  return (
    <Div>
     <SectoionBox />
     <ToolsMenu />
     <SectionMane />
    </Div>
  );
}

export default App;
