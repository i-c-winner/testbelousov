import React from "react";
import styled from "styled-components";
import SectoionBox from "./components/SectoionBox";
import SectionTools from "./components/SectionTools";
import SectionMain from "./components/SectionMain";
const Div =styled.div`
  display: flex;
  height: 100vh;
`

function App() {
  return (
    <Div>
     <SectoionBox />
     <SectionTools/>
     <SectionMain />
    </Div>
  );
}

export default App;
