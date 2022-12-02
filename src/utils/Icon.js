import React from "react";
import styled from "styled-components";
import {theme} from "../ui/theme";
import {ReactSVG} from "react-svg";

function Icon (props) {
    const {src}=props
    return (
        <ReactSVG className={props.className} src={src} />
    )
        }
export default Icon
