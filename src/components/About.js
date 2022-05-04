import React, { useEffect } from "react"
import AboutCSS from "../css/about.module.css"
import CardCSS from "../css/card.module.css"
import Card from "./Card"
import image1 from "../img/img_1.jpg"
import image2 from "../img/img_2.jpg"
import image3 from "../img/img_3.jpg"
import image4 from "../img/img_4.jpg"


function About() {

    useEffect(() => {
        const img = [image1, image2, image3, image4]
        const work = document.getElementsByClassName(CardCSS.container)
        for (let i = 0; i < Object.keys(work).length; i++) {
            work[i].style.backgroundImage = `url(${img[i]})`
        }

    })

    const descriptions = [
        "A music playlist creation application powered by Youtube Music. Key Technologies: Third Party API's, Express, JavaScript, MVC Design Structure.",

        "This application is designed to be used by runners looking to make pace calculations for races or training runs. Key Technologies: React, CSS, JavaScript",

        "A Readme generating command line application for programmers. Key Technologies: Inquirer, JavaScript, Node.",

        " A live event search engine powered by the Ticketmaster API. Key Technologies: Third Party API's, Bootstrap, JavaScript."
    ]

    return (
        <section className={AboutCSS.container} id="about">
            <div className={AboutCSS.card1}>
                <div className={AboutCSS.title}>
                    About Me
                </div>
                <div className={AboutCSS.about}>
                    Full Stack Web Developer, with degrees in Applied Mathematics and Physics, bringing an analytical lens to building websites and online tools. Earned a certificate in Full Stack Web Development from the University of Connecticut Coding Boot Camp. Dependable problem-solver with a passion for detail oriented design. Strengths in analytical thinking, communication, and adaptability.
                </div>
            </div>
            <div className={AboutCSS.card2}>
                <div className={AboutCSS.work}>
                    <Card title='Vibez' id='work1' description={descriptions[0]} link='https://thawing-shore-81087.herokuapp.com/' />
                    <Card title='Pace Calculator' id='work1' description={descriptions[1]} link='https://dmcaulay97.github.io/Pace-calculator/' />
                </div>
                <div className={AboutCSS.work}>
                    <Card title='Readme Generator' id='work1' description={descriptions[2]} link='https://github.com/dmcaulay97/readme-generator' />
                    <Card title='Weather App' id='work1' description={descriptions[3]} link='https://dmcaulay97.github.io/weather-dashboard/' />
                </div>
            </div>

        </section>
    )
}

export default About