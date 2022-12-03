import React from "react";
import styled from "styled-components";
import {theme} from "../ui/theme";

const {textBlack}=theme
const Modal=styled.div`
  position: absolute;
  background-color: white;
  box-shadow: 0 0 5px grey;
  top: 50px;
  padding: 18px 14px 5px;
  z-index: 10;
  white-space: nowrap;
`
const Item=styled.p`
  margin: 0;
  color: ${textBlack};
  height: 40px;
  border-radius: 3px;
  padding: 5px;
  line-height: 40px;
}
  &:hover {
    background-color: #f5f8fa;
   
  
`
const modal= ["Board View", "Table View", "Kanban"]

function HeaderModal() {
    return(
        <Modal>
            {modal.map(item=>{
                console.log(item)
                return <Item key={item}>
                    {item}
                </Item>
            })}
        </Modal>
    )
}

export default HeaderModal
