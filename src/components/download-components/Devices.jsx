import {useRef, useEffect, useState} from "react"
import ios from "../../assets/ios.svg"
import android from "../../assets/android.svg"
import mac from "../../assets/mac.svg"
import linux from "../../assets/linux.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"

export default function Devices(){

    const [isClicked , setIsClicked] = useState(false)
    const ref = useRef()

    useEffect(()=>{
        let handler =(e) =>{
            ref?.current?.contains(e.target) ? setIsClicked(true) : setIsClicked(false)
        }
        document.addEventListener("mousedown", handler)
    })

    function onClickEvent(){
        setIsClicked(true)
    }
    return(
        <main className="devices">
            <article className="device ios">
                <section className="device-details">
                    <h2 className="device-name">iOS</h2>
                    <div className="buttons">
                        <a href="" className="black-button">Download</a>
                    </div>
                </section>
                <figure className="img-container">
                    <img src={ios} alt="" className="device-image"/>
                </figure>
            </article>
            <article className="device android">
                <section className="device-details">
                    <h2 className="device-name">Android</h2>
                    <div className="buttons">
                        <a href="" className="black-button">Download</a>
                    </div>
                </section>
                <figure className="img-container">
                    <img src={android} alt="" className="device-image"/>
                </figure>
            </article>
            <article className="device linux">
                <section className="device-details">
                    <h2 className="device-name">Linux</h2>
                    <div className="buttons">
                        <a href="" className="black-button">Download</a>
                    </div>
                </section>
                <figure className="img-container">
                    <img src={linux} alt="" className="device-image"/>
                </figure>
            </article>
            <article className="device mac">
                <section className="device-details">
                    <h2 className="device-name">Mac</h2>
                    <div className="buttons">
                        <a href="" className="black-button">Download</a>
                    </div>
                </section>
                <figure className="img-container">
                    <img src={mac} alt="" className="device-image" />
                </figure>
            </article>
            <article className="test-build">
                <section>
                    <h2 className="test-title">Feeling experimental?</h2>
                    <p className="test-description">Try our Public Test Build and test new features before they launch.</p>
                    <div className="button-container">
                        <button className="test-button" onClick={onClickEvent}>
                            Download Public Test Build  
                            <FontAwesomeIcon icon={faAngleDown} className="angleDown-icon"/> 
                        </button>
                        {
                            isClicked &&
                            <ul className="test-platform" ref={ref}>
                                <a href=""><li>Windows</li></a>
                                <a href=""><li>Linux deb</li></a>
                                <a href=""><li>Linux tar.gz</li></a>
                                <a href=""><li>Mac</li></a>
                            </ul>
                        }
                        
                    </div>
                </section>
            </article> 
        </main>
    )
}