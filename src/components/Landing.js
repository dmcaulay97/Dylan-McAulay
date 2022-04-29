import React, { useEffect } from "react";
import LandingCSS from "../css/landing.module.css"

function Landing() {

    useEffect(() => {
        const hidden = document.getElementsByClassName(LandingCSS.lazy)
        for (let i = 0; i < hidden.length; i++) {
            const num = i.toString();
            hidden[num].classList.add(LandingCSS.appear);
        }

        const overlay = document.getElementsByClassName(LandingCSS.overlay)
        overlay[0].className = `${LandingCSS.hidden} ${LandingCSS.overlay}`
    })

    return (
        <section className={LandingCSS.container}>
            <div className={LandingCSS.card1}>
                <div className={`${LandingCSS.appear} ${LandingCSS.overlay}`}></div>
            </div>
            <div className={LandingCSS.card2}>
                <div className={`${LandingCSS.title} ${LandingCSS.lazy}`}>
                    Dylan McAulay
                </div>
                <div className={`${LandingCSS.button} ${LandingCSS.lazy}`}>
                    About Me
                </div>
                <div className={`${LandingCSS.button} ${LandingCSS.lazy}`}>
                    Contact Me
                </div>
                <div className={`${LandingCSS.links} ${LandingCSS.lazy}`}>
                    <i class="fab fa-github" className={LandingCSS.icon}></i>
                    <i class="fab fa-linkedin" className={LandingCSS.icon}></i>
                    <i class="fas fa-file" className={LandingCSS.icon}></i>
                </div>
            </div>
        </section >
    )
}

export default Landing;