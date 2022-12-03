import React from "react";
import styled from "styled-components";
import Header from "./Header";

const Main=styled.div`
  width: 100%;
  padding-right: 20px;
  background-color: #fff;
`
const Body=styled.div`
  padding: 27px 20px;
`
function MainBox(){
    return(<Main>
        <Header />
            <Body>

            </Body>
    </Main>
    )
}
export default MainBox
