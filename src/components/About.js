import React from "react"
import AboutCSS from "../css/about.module.css"
import Card from "./Card"

function About() {
    return (
        <section className={AboutCSS.container}>
            <div className={AboutCSS.card1}>
                <div className={AboutCSS.title}>
                    About Me
                </div>
                <div className={AboutCSS.about}>
                    Front End Web Developer, with degrees in Applied Mathematics and Physics, bringing an analytical lens to building websites and online tools. Earned a certificate in Full Stack Web Development from the University of Connecticut Coding Boot Camp. Dependable problem-solver with a passion for detail oriented design. Strengths in analytical thinking, communication, and adaptability.
                </div>
            </div>
            <div className={AboutCSS.card2}>
                <div className={AboutCSS.work}>
                    <Card />
                    <Card />
                </div>
                <div className={AboutCSS.work}>
                    <Card />
                    <Card />
                </div>
            </div>

        </section>
    )
}

export default About