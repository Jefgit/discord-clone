import React from "react"
import groups from "../../assets/groups.svg"

export default function GroupChannel(){
    return(
        <section className="groupChannel">
            <img src={groups} alt="Group channel picture" className="group-picture"/>
            <article className="groupChannel-info">
                <h2 className="groupChannel-title">Create an invite-only place where you belong</h2>
                <p className="groupChannel-description">
                    Discord servers are organized into topic-based channels where you can 
                    collaborate, share, and just talk about your day without clogging up a group chat.
                </p>
            </article>
        </section>
    )
}