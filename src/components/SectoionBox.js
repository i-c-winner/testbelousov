import React from "react";
import styled from "styled-components";
import {theme} from "../ui/theme";
import Icon from "./Icon";
import {IconLogo} from '../images/svg/index'
import Search from "./Search";
import WorkSpace from "./WorkSpace";

const {bgMenu} =theme
const SectionBox=styled.div`
  min-width: 219px;
  background-color: ${bgMenu};
`
function SectoionBox () {
const style={
    bgColor: '#2D4071',
}

    return (
        <SectionBox>
            <div className="logo logo_main-box">
                <Icon src={IconLogo} />
            </div>
            <Search classes="search search_menu" style={style}/>
            <WorkSpace />
        </SectionBox>
    )
}

export default SectoionBox
