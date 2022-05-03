import React from "react";
import CardCSS from "../css/card.module.css"

function Card(props) {

    const linkHandler = (link) => {
        window.open(link);
    }

    return (
        <div className={CardCSS.container} onClick={() => linkHandler(props.link)}>
            <div className={CardCSS.title}>
                {props.title}
            </div>
        </div>
    )
}

export default Card