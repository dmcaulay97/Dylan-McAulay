import React from "react";
import CardCSS from "../css/card.module.css"

function Card(props) {

    return (
        <div className={CardCSS.container}>
            <div className={CardCSS.title}>
                {props.title}
            </div>
        </div>
    )
}

export default Card