import React from "react";
import Card from "./Card"
import WorkCSS from "../css/work.module.css"

function Work() {
    return (
        <section className={WorkCSS.container}>
            <div className={WorkCSS.card1}>
                <div className={WorkCSS.title}> About Me </div>
                <div className={WorkCSS.about}>
                    Front End Web Developer, with degrees in Applied Mathematics and Physics, bringing an analytical lens to building websites and online tools. Earned a certificate in Full Stack Web Development from the University of Connecticut Coding Boot Camp. Dependable problem-solver with a passion for detail oriented design. Strengths in analytical thinking, communication, and adaptability.
                </div>
            </div>
            <div className={WorkCSS.card2}>
                <div className={WorkCSS.col}>
                    <Card />
                    <Card />
                </div>
                <div className={WorkCSS.col}>
                    <Card />
                    <Card />
                </div>

            </div>
        </section>
    )
}

export default Work;