import React from "react";
import styled from "styled-components";
import Icon from "../utils/Icon";

const Div=styled.div`
`
function Item (props) {
    return (<Div>
        <Icon src=""></Icon>
        <p>{props.item}</p>
    </Div>

           )
}

export default Item
