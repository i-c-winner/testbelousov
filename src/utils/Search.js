import {ReactSVG} from "react-svg";
import React from "react";
import styled from "styled-components";
import {IconSearch} from "../images/svg";
import Icon from "./Icon";
import {theme} from "../ui/theme";

const {textWhite} =theme
const Div=styled.div`
   padding: 16px;
   display: flex;
`

function Search (props){
    const Input=styled.input`
      padding-left: 5px;
      color: ${textWhite};
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
        <Input />
          <Icon className="search search_menu" src={IconSearch}/>
    </Div>
        )

}
export default Search
