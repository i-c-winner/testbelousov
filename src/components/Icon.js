import React from "react";
import {ReactSVG} from "react-svg";

function Icon (props) {
    const {src}=props
    return (
        <ReactSVG className={props.className} src={src} />
    )
        }
export default Icon
