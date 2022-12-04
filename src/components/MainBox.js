import React from "react";
import styled from "styled-components";
import Header from "./Header";
import {newTask, inProgress, scheduled, compeled, createData} from "../constants/constants";
import Cards from "./Cards";

const Main=styled.div`
  width: 100%;
  padding-right: 20px;
  background-color: #fff;
`
const Body=styled.div`
  padding: 0 20px;
  display: flex;
`
function MainBox(){
    return(<Main>
        <Header />
            <Body>
                <Cards cards={newTask} />
                <Cards cards={scheduled} />
                <Cards cards={inProgress} />
                <Cards cards={compeled} />
                <Cards cards={createData} />
            </Body>
    </Main>
    )
}
export default MainBox
