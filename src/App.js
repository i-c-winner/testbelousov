import React from "react";
import styled from "styled-components";
import MenuBox from "./components/MenuBox";
const Div =styled.div`
  display: flex;
  justify-content: space-between;
`

function App() {
  return (
    <Div>
     <MenuBox />
    </Div>
  );
}

export default App;
