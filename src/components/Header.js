import React, {useState, useRef} from "react";
import styled from "styled-components";
import {theme} from "../ui/theme";
import {keyboardImplementation} from "@testing-library/user-event/dist/keyboard/keyboardImplementation";

const { bgButtonDisabled, bgButtonEnabled,textGrey, textWhite, textBlack, bgMain}=theme

const HeaderBox=styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  `
const ButtonsBox=styled.div`
  display: flex;
  width: 402px;
  justify-content: space-between;
  align-items: center;
`

const ButtonElement= ({className, children, onClick})=>{
  return   <button className={className}  onClick={onClick}>
        {children}
    </button>
}

const Button =styled(ButtonElement)`
  margin-left: 20px;
     width: 119px;
     height: 40px;
     border-radius: 50px;
     text-align: center;
     position: relative;
`

const InfoBox=styled.div`
  width:300px;
  border: 1px solid red;
  height: 80px;
`
const buttons=['+ add New', 'kanbah', 'filter']

function Header() {
    const [selected, setSelected]= useState(buttons[0])
function clickButton () {
    setSelected(this.name)
}

function getClasses() {
        if (this.name===selected) {
            return 'button button_header button_header_enabled'
        }  return 'button button_header button_header_disabled'
}

    return (
        <HeaderBox>
            <ButtonsBox>
                {buttons.map(button=>{
                   return <Button key={button}
                                  className={getClasses.bind({name: button})()}
                                  onClick={clickButton.bind({name: button})}
                                  value={button}>
                                     {button}

                           </Button>
                })}
            </ButtonsBox>
            <InfoBox />
        </HeaderBox>
    )
}

export default Header
