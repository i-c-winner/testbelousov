import React from "react";
import styled from "styled-components";
import {theme} from "../ui/theme";
import Icon from "./Icon";
import {Logo} from '../svg/index'

const {bgMenu} =theme
const styleForlogo={
    widthLogo: "131px",
    heightLogo: "36px",
    }
const Div=styled.div`
  width: 219px;
  background-color: ${bgMenu};
  height: 100vh;  
`
function MenuBox () {

    return (
        <Div>
            <div className="logo logo_main-box">
                <Icon styles={styleForlogo} src={Logo} />
            </div>
        </Div>
    )
}

export default MenuBox
