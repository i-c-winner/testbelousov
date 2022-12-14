import React, {useState} from "react";
import styled from "styled-components";
import {theme} from "../ui/theme";
import {IconBall} from "../images/svg";
import {IconArrow} from "../images/svg";
import Icon from "./Icon";
import Search from "./Search";
import avatar from "../images/img/avatar.png";
import WithCounter from "./WithCounter";
import HeaderModal from "./HeaderModal";

const HeaderBox=styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  border-bottom: 3px solid rgba(25,25,25, .1);
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
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0 10px;
`
const buttons=['+ add New', 'kanbah', 'filter']

const stylesForCounter={
    bgColor: "red",
    padding: "3px",
    position: "absolute",
    top: "-15px",
    left: "9px",
    borderRadius: '4px',
    color: "white",
    fontSize: "13px"
}
const styleForSearch={
    bgColor: "#f5f8fa",
    borderRadius: "20px",
}

function Header() {
const [selected, setSelected]= useState(null)
function clickButton () {
    if (selected===this.name){
        setSelected(null)
    } else {
        setSelected(this.name)
    }
}

function getClasses() {
        if (this.name===selected) {
            return 'button button_header button_header_enabled'
        }  return 'button button_header button_header_disabled'
}
function getVisibleMenu () {
        return this.name===selected? true: false
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
                       <Icon className={getVisibleMenu.bind({name: button})()?'arrow arrow_header':
                           'arrow arrow_header arrow_header_up'}
                            src={IconArrow} />
                       {getVisibleMenu.bind({name: button})()?<HeaderModal />: null}
                           </Button>
                })}
            </ButtonsBox>
            <InfoBox>
                <Search classes='search search_info' style={styleForSearch}/>
                <WithCounter src={IconBall} styles={stylesForCounter} count="33+"/>
                <img width="40px"  height="40px" src={avatar} alt='????????????'/>
            </InfoBox>
        </HeaderBox>
    )
}


export default Header
