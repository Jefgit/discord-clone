import videoChat from "../../assets/videochat.svg"
import sparkle from "../../assets/sparkle.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload } from "@fortawesome/free-solid-svg-icons"

export default function VideoChannel(){
    return(
        <section className="videoChannel">
            <article className="videoChannel-info">
                <h2 className="videoChannel-title">RELIABLE TECH FOR STAYING CLOSE</h2>
                <p className="videoChannel-description">
                    Low-latency voice and video feels like you’re in the same room. 
                    Wave hello over video, watch friends stream their games, or gather up and 
                    have a drawing session with screen share.
                </p>
                <img src={videoChat} alt="Vided chat channel picture" className="videoChat-picture"/>
            </article>
            <div className="download-container">
                <img src={sparkle} alt="Spark effect" className="spark-effect" />
                <p className="videoChannel-start">Ready to start your journey?</p>
                <div className="buttons">
                <a href="" className="button-blue"><FontAwesomeIcon icon={faDownload} className="download-icon"/>Download for Windows</a>
                </div>
            </div>
        </section>
    )
}