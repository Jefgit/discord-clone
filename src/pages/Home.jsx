import React from "react"
import Introduction from "../components/home-components/Introduction"
import GroupChannel from "../components/home-components/GroupChannel"
import VoiceChannel from "../components/home-components/VoiceChannel"
import StudyChannel from "../components/home-components/StudyChannel"
import VideoChannel from "../components/home-components/VideoChannel"

export default function Home(){
    return(
        <>
            <Introduction />
            <GroupChannel />
            <VoiceChannel />
            <StudyChannel />
            <VideoChannel />
        </>
    )
}