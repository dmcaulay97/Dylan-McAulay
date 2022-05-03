import React, { useEffect } from "react";
import LandingCSS from "../css/landing.module.css"
import Modal from "react-modal"

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: 'black',
        borderRadius: '10px',
    },
};

function Landing() {

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = 'black';
    }

    function closeModal() {
        setIsOpen(false);
    }

    const linkHandler = (link) => {
        window.open(link);
    }

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
                    <a href='#about'>About Me</a>
                </div>
                <div className={`${LandingCSS.button} ${LandingCSS.lazy}`} onClick={openModal}>
                    Contact Me
                </div>
                <div className={`${LandingCSS.links} ${LandingCSS.lazy}`}>
                    <i class="fab fa-github" className={LandingCSS.icon} onClick={() => linkHandler("https://github.com/dmcaulay97")}></i>
                    <i class="fab fa-linkedin" className={LandingCSS.icon} onClick={() => linkHandler("https://www.linkedin.com/in/dylan-mcaulay-8a4693159/")}></i>
                    <i class="fas fa-file" className={LandingCSS.icon} onClick={() => linkHandler("https://docs.google.com/document/d/1vhE1tvwksdFUDy-DsHaw1vkE99hXh1Du2fgoCJQrtQM/edit?usp=sharing")}></i>
                </div>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Contact"
            >
                <h2 className={`${LandingCSS.title} ${LandingCSS.emailTitle}`} ref={(_subtitle) => (subtitle = _subtitle)}>Contact</h2>
                <div className={LandingCSS.email}>Email: dmcaulay97@gmail.com</div>
                <div className={`${LandingCSS.button} ${LandingCSS.emailButton}`} onClick={closeModal}>
                    Close
                </div>

            </Modal>
        </section >
    )
}

export default Landing;