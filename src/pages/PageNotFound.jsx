import React from "react";
import error404 from "../assets/error404.gif"

export default function PageNotFound(){
    return(
        <main className="pageNotFound">
            <article className="notFound-content">
                <section className="notFound-info">
                    <h1 className="notFound-title">WRONG TURN?</h1>
                    <p className="notFound-description">
                        You look lost, stranger. You know what helps when you're lost? 
                        A piping hot bowl of noodles. 
                        Take a seat, we're frantically at work here cooking up something good. 
                        Oh, you need something to read? These might help you:
                    </p>
                    <ul className="notFound-links">
                        <li><a href="">Status Page</a></li>
                        <li><a href="">@Discord</a></li>
                        <li><a href="">Discord Support</a></li>
                    </ul>
                </section>
                <figure>
                    <img className="error404-img" src={error404} alt="Error 404 Ramen Shop" />
                </figure>
            </article>
        </main>
    )
}