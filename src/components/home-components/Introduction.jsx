import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload } from "@fortawesome/free-solid-svg-icons"
import clouds from "../../assets/clouds.svg"
import cool from "../../assets/cool.svg"
import friends from "../../assets/friends.svg"


export default function Introduction(){
    return(
        <section className="intro">
            <article className="intro-content">
                <header className="intro-title">IMAGINE A PLACE...</header>
                <p className="intro-description">...where you can belong to a school club, a gaming group, or a worldwide art community. 
                    Where just you and a handful of friends can spend time together. 
                    A place that makes it easy to talk every day and hang out more often.
                </p>
                <div className="buttons">
                    <a href="" className="download-button"><FontAwesomeIcon icon={faDownload} className="download-icon"/>Download for Windows</a>
                    <a href="" className="black-button">Open Discord in your browser</a>
                </div>         
            </article>
            <div className="background-container">
                <img src={clouds} alt="" className="clouds-bg" />
                <img src={cool} alt="" className="cool-pictures"/>
                <img src={friends} alt="" className="friends-pictures"/>
            </div>       
        </section>
    )
}