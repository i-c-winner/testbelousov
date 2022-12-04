import React from "react";
import styled from "styled-components";
import WithCounter from "./WithCounter";


const TitleWrapper=styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
`
const Title=styled.div`
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
`
const stylesForCounter={
    bgColor: "#e8ebef",
    padding: "3px",
    position: "absolute",
    top: "0",
    left: "20px",
    width: "15px",
    height: "15px",
    borderRadius: '50%',
    color: "grey",
    fontSize: "13px"
}

function Titles(props) {
    return (
        <TitleWrapper>
            {
                props.titles.map(title=>{
                    return (
                        <Title key={title.title}>
                            {title.title}
                            {title.title!=='+ Create status'? <WithCounter styles={stylesForCounter} count={title.count}/>: null}
                        </Title>
                    )
                })
            }
        </TitleWrapper>
    )


}


export default Titles
