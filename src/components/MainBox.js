import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Cards from "./Cards";
import {newTask, createData, inProgress, scheduled, compeled} from "../constants/constants";
import Titles from "./Titles";

const createdStatus=[newTask, inProgress, scheduled, compeled]

const CreatedStatus=styled.div`
  height: 100%;  
`
const CreatingStatus=styled.div`;
  display: flex;
  flex-flow: column;
  width: 100%;
  border-left: 2px solid rgba(25, 25, 25, .1);
`
const StatusesWrapper=styled.div`
  display: flex;
  height: calc(100% - 61px);
`
const Main=styled.div`
  width: 100%;
  padding-right: 20px;
  background-color: #fff;
`
const Body=styled.div`
  display: flex;
  height: calc(100% - 83px);
`
const Separator=styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(25, 25, 25, .1);
`
function MainBox(){
    return(<Main>
        <Header />
            <Body>
               <CreatedStatus>
                   <Titles titles={createdStatus} />
                   <Separator />
                    <StatusesWrapper>
                        {createdStatus.map(card=>{
                            return <Cards key={card.title} cards={card}/>
                        })}
                    </StatusesWrapper>

               </CreatedStatus>
               <CreatingStatus>
                   <Titles titles={[createData]}/>
                   <Separator />
               </CreatingStatus>
            </Body>
    </Main>
    )
}
export default MainBox
