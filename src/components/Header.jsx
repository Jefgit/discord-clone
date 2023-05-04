import React, { useEffect, useRef } from "react"
import { Link, NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX, faDownload } from "@fortawesome/free-solid-svg-icons"
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { useLocation } from "react-router-dom"

export default function Header(){
    const [toggleClass, setToggleClass] = React.useState("close-mobile-links")
    const [lockScreen, setLockScreen] = React.useState("")
    const ref = useRef()
    const valid_Paths = ["/", "/download"]
    const {pathname} = useLocation();

    console.log(useLocation())

    useEffect(()=>{
        let handler =(e) =>{
            ref?.current?.contains(e.target) ? 
            setToggleClass("open-mobile-links") : setToggleClass("close-mobile-links") 
        }

        if (toggleClass === "close-mobile-links"){
            document.body.classList.remove("lock-screen")
            setLockScreen("")
        }else{   
            document.body.classList.add("lock-screen")
            setLockScreen("backdrop")
        }
        
        document.addEventListener("mousedown",handler)
    })
    
    function onClickHandler(){
        setToggleClass(prevClass => {
            return prevClass === "open-mobile-links" ? "close-mobile-links" : "open-mobile-links"
        })
 
        if (toggleClass === "close-mobile-links"){
            document.body.classList.add("lock-screen")
            setLockScreen("backdrop")
        }else{
            document.body.classList.remove("lock-screen")
            setLockScreen("")
        }
    }
    return(
        <header className="header">
            <Link className="logo" to="/">     
                <FontAwesomeIcon icon={ faDiscord } className={`discord-logo ${valid_Paths.includes(pathname) ? "":"discord-logo-black"}`}/>    
                <h1 className={`discord-text ${valid_Paths.includes(pathname) ? "":"discord-text-black"}`}>Discord</h1>
            </Link>
            <nav className={`navigations ${valid_Paths.includes(pathname) ? "":"navigations-black"}`} >
                <NavLink to="download" >Download</NavLink>
                <NavLink to="nitro" >Nitro</NavLink>
                <NavLink to="discover" >Discover</NavLink>
                <NavLink to="safety" >Safety</NavLink>
                <NavLink to="support" >Support</NavLink>
                <NavLink to="blog" >Blog</NavLink>
                <NavLink to="careers" >Careers</NavLink>
            </nav>
            <div className="discord-btn-container">
                <a className={`discord-btn ${valid_Paths.includes(pathname) ? "":"discord-btn-blue"}`}href="https://discord.com/channels/@me">Open Discord</a>
            </div>
            <div className="bars-container">
                <FontAwesomeIcon icon={faBars} className={`bars ${valid_Paths.includes(pathname) ? "":"bars-black"}`} onClick={onClickHandler}/>
            </div>
            <div className={`unlock-screen ${lockScreen}`}>
                <nav className={`navigations-mobile ${toggleClass}` } ref={ref}>
                    <div className="links-container">
                        <div className="mobile-logo">
                            <Link className="logo black" to="/" onClick={onClickHandler}>
                                <FontAwesomeIcon icon={ faDiscord } className="discord-logo black"/>   
                                <h1 className="discord-text black">Discord</h1>
                            </Link>
                        </div>
                        <div className="spacer"></div>
                        <NavLink to="/" onClick={onClickHandler} className={({isActive}) => isActive ?  "link-active" : "mobile-links"}>Home</NavLink>
                        <NavLink to="download" onClick={onClickHandler} className={({isActive}) => isActive ?  "link-active" : "mobile-links"}>Download</NavLink>
                        <NavLink to="nitro"  onClick={onClickHandler} className={({isActive}) => isActive ?  "link-active" : "mobile-links"}>Nitro</NavLink>
                        <NavLink to="discover" onClick={onClickHandler} className={({isActive}) => isActive ?  "link-active" : "mobile-links"}>Discover</NavLink>
                        <NavLink to="safety" onClick={onClickHandler} className={({isActive}) => isActive ?  "link-active" : "mobile-links"}>Safety</NavLink>
                        <NavLink to="modacademy" onClick={onClickHandler} className={({isActive}) => isActive ?  "link-active" : "mobile-links"}>Mod Academy</NavLink>
                        <NavLink to="support" onClick={onClickHandler} className={({isActive}) => isActive ?  "link-active" : "mobile-links"}>Support</NavLink>
                        <NavLink to="blog" onClick={onClickHandler} className={({isActive}) => isActive ?  "link-active" : "mobile-links"}>Blog</NavLink>
                        <NavLink to="careers" onClick={onClickHandler} className={({isActive}) => isActive ?  "link-active" : "mobile-links"}>Careers</NavLink>
                    </div>
                    <FontAwesomeIcon icon={ faX } className="close" onClick={onClickHandler}/>
                    <div className="button-mobile">
                        <a href="" className="download-button-mobile">
                            <FontAwesomeIcon icon={faDownload} className="download-icon"/>Download from Google Play
                        </a>
                    </div>     
                </nav>
            </div>    
        </header>
    )
}