import {ReactSVG} from "react-svg";
import React from "react";
import styled from "styled-components";
import {IconSearch} from "../images/svg";
import Icon from "./Icon";
import {theme} from "../ui/theme";

const {textWhite, textBlack} =theme
const Div=styled.div`
   padding: 0px 16px 15px 0;
   display: flex;
`

function Search (props){
    const Input=styled.input`
      padding-left: 5px;
      color: ${textBlack};
      border-radius: 5px 0 0 5px;
      height: 32px;  
      border-width: 0;
      width: 80%;
      background-color: ${props=>{
     return  props.theme.bgColor
    }}`
    Input.defaultProps= {
        theme: {
            bgColor: props.style.bgColor
        }
    }
    return (<Div>
        <Input  />
          <Icon className={props.classes} src={IconSearch}/>

    </Div>
        )

}
export default Search
