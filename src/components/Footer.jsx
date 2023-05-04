import { useRef, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { faTwitter, faInstagram, faFacebookSquare, faYoutube, faDiscord } from "@fortawesome/free-brands-svg-icons"
import us from "../assets/us.png"
import dan from "../assets/dansk.png"
import deu from "../assets/deutsch.png"
import es from "../assets/es.png"
import React from "react"

export default function Footer(){
    const [isClicked, setIsClicked] = useState(false)
    const ref = useRef()

    useEffect(()=>{
        let handler =(e) =>{
            ref?.current?.contains(e.target) ? setIsClicked(true) : setIsClicked(false)
        }
        
        document.addEventListener("mousedown",handler)
    })
    function onClickEvent(){
        setIsClicked(true)
        
    }
    return(
        <footer className="footer">
            <section className="links">
                <div className="social-links">
                    <h2 className="links-title">IMAGINE A PLACE</h2>
                    <ul className="social-network-links"> 
                        <li className="translate" ref={ref}>
                            {
                                isClicked &&
                            <ul className="lang">
                                <li className="lang-container">
                                    <img src={us} alt="" className="flag-icon"/>
                                    <span className="lang-container">English, USA</span> 
                                </li>
                                <li className="lang-container">
                                    <img src={dan} alt="" className="flag-icon"/> 
                                    <span className="lang-container">Dansk</span>
                                </li>
                                <li className="lang-container">
                                    <img src={es} alt="" className="flag-icon"/>
                                    <span className="lang-container">Español</span>
                                </li>
                                <li className="lang-container">
                                    <img src={deu} alt="" className="flag-icon"/>
                                    <span className="lang-container">Deutsch</span>
                                </li>
                            </ul>
                            }
                            <div className="selected-lang"
                                onClick={onClickEvent}  
                                id="selected"
                            >
                                <img src={us} alt="" className="flag-icon"/>
                                <span className="lang-text">
                                    English, USA
                                    <FontAwesomeIcon icon={faAngleDown} className="angle-down"/>
                                </span>
                            </div>
                        </li>
                        <li className="social-media-links">
                            <a href="" className="social-media-icons"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="" className="social-media-icons"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="" className="social-media-icons"><FontAwesomeIcon icon={faFacebookSquare} /></a>
                            <a href="" className="social-media-icons"><FontAwesomeIcon icon={faYoutube} /></a>
                        </li>
                    </ul>
                </div>
                <div className="discord-links">
                    <div className="products-links">
                        <h3>Products</h3>
                        <ul>
                            <li><a href="/download">Download</a></li>
                            <li><a href="">Nitro</a></li>
                            <li><a href="">Status</a></li>
                        </ul>
                    </div>
                    <div className="company-links">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="">About</a></li>
                            <li><a href="">Jobs</a></li>
                            <li><a href="">Branding</a></li>
                            <li><a href="">Newsroom</a></li>
                        </ul>
                    </div>
                    <div className="resources-links">
                        <h3>Resources</h3>
                            <ul>
                                <li><a href="">College</a></li>
                                <li><a href="">Support</a></li>
                                <li><a href="">Safety</a></li>
                                <li><a href="">Blog</a></li>
                                <li><a href="">Feedback</a></li>
                                <li><a href="">Build</a></li>
                                <li><a href="">StreamKit</a></li>
                                <li><a href="">Creators</a></li>
                                <li><a href="">Community</a></li>
                            </ul>
                    </div>
                    <div className="policies-links">
                        <h3>Policies</h3>
                        <ul>
                            <li><a href="">Terms</a></li>     
                            <li><a href="">Privacy</a></li> 
                            <li><a href="">Cookie Settings</a></li> 
                            <li><a href="">Guidelines</a></li> 
                            <li><a href="">Acknowledgements</a></li> 
                            <li><a href="">Licenses</a></li> 
                            <li><a href="">Moderation</a></li> 
                        </ul>     
                    </div>
                </div>
            </section>
            <section className="signup">
                <Link className="logo" to="/">     
                    <FontAwesomeIcon icon={ faDiscord } className="discord-logo"/>    
                    <h1 className="discord-text">Discord</h1>
                </Link>
                <div className="discord-btn-container-footer">
                    <a className="discord-btn-footer" href="https://discord.com/channels/@me">Open Discord</a>
                </div>
            </section>
        </footer>
    )
}