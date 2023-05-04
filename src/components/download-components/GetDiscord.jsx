import React from "react"
import vc from "../../assets/vc.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload } from "@fortawesome/free-solid-svg-icons"

export default function GetDiscord(){
    return(
        <main className="getDiscord">
            <article className="getDiscord-container">
                <section className="getDiscord-content">
                    <h1 className="getDiscord-header">GET DISCORD FOR ANY DEVICE</h1>
                    <p className="getDiscord-description">
                        An adventure awaits. 
                        Hang out with your friends on our desktop app 
                        and keep the conversation going on mobile.
                    </p>
                    <div className="download-container pc">
                        <a href="" className="dl-button"><FontAwesomeIcon icon={faDownload} /> Download for Windows</a>
                        <span className="dl-text">Windows 7 or higher</span>
                    </div>
                    <div className="download-container mobile">
                        <a href="" className="dl-button"><FontAwesomeIcon icon={faDownload} /> Download from Google Play</a>
                        <span className="dl-text">Available on Android 6.0.x and up</span>
                    </div>
                </section>
                {/* <figure> */}
                    <img src={vc} alt="" className="vc-image"/>
                {/* </figure> */}
            </article>
        </main>
    )
}