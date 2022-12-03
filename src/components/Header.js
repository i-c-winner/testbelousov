import React, {useState} from "react";
import styled from "styled-components";
import {theme} from "../ui/theme";
import HeaderModal from "./HeaderModal";
import {IconArrow} from "../images/svg";
import Icon from "../utils/Icon";
import Search from "../utils/Search";
import avatar from "../images/img/avatar.png";


const { bgButtonDisabled, bgButtonEnabled,textGrey, textWhite, textBlack, bgMain}=theme

const HeaderBox=styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  box-shadow: 5px 5px 10px grey;
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
  padding: 0 10px;
`
const buttons=['+ add New', 'kanbah', 'filter']

function Header() {

    const style={
        bgColor: "#f5f8fa"
    }
    const [selected, setSelected]= useState(buttons[0])
function clickButton () {
    setSelected(this.name)
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
                       {/*{getVisibleMenu.bind({name: button})()?<HeaderModal />: null}*/}
                           </Button>
                })}
            </ButtonsBox>
            <InfoBox>
                <Search classes='search search_info' style={style}/>
                <img width="22px"  height="22px" src={avatar} alt='Аватар'/>
            </InfoBox>
        </HeaderBox>
    )
}

export default Header
