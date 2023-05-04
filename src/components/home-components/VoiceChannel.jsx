import React from "react"
import voiceChat from "../../assets/voicechat.svg"

export default function VoiceChannel(){
    return(
        <section className="voiceChannel">
            <article className="voiceChannel-info">
                <h2 className="voiceChannel-title">Where hanging out is easy</h2>
                <p className="voiceChannel-description">
                    Grab a seat in a voice channel when you're free. 
                    Friends in your server can see you're around and instantly pop in to talk without having to call.
                </p>
            </article>
            <img src={voiceChat} alt="Voice channel picture" className="voiceChannel-picture" />
        </section>
    )
}