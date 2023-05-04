import React from "react"
import study from "../../assets/study.svg"

export default function StudyChannel(){
    return(
        <section className="studyChannel">
            <img src={study} alt="Study channel picture" className="study-picture"/>
            <article className="studyChannel-info">
                <h2 className="studyChannel-title">From few to a fandom</h2>
                <p className="studyChannel-description">
                    Get any community running with moderation tools and 
                    custom member access. Give members special powers, set up private channels, and more.
                </p>
            </article>
        </section>
    )
}