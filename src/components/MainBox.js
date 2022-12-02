import React from "react";
import styled from "styled-components";
import Header from "./Header";

const Main=styled.div`
  width: 100%;
  padding-right: 20px;
`
function MainBox(){
    return(<Main>
        <Header />
    </Main>
    )
}
export default MainBox
