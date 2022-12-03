import React from "react";
import styled from "styled-components";
import {theme} from "../ui/theme";
import Icon from "../utils/Icon";
import {IconLogo} from '../images/svg/index'
import Search from "../utils/Search";
import WorkSpace from "./WorkSpace";

const {bgMenu} =theme
const Div=styled.div`
  width: 219px;
  background-color: ${bgMenu};
  height: 100vh;  
`
function MenuBox () {
const style={
    bgColor: '#2D4071',
}

    return (
        <Div>
            <div className="logo logo_main-box">
                <Icon src={IconLogo} />
            </div>
            <Search classes="search search_menu" style={style}/>
            <WorkSpace />
        </Div>
    )
}

export default MenuBox
