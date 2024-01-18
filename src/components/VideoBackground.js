import { useSelector } from "react-redux"
import useVideoTrailer from "../utils/useVideoTrailer"
import { useEffect } from "react"

const VideoBackground = ({ movieId }) => {
    useVideoTrailer(movieId)
    const trailer = useSelector(store => store.movies?.videoTrailer)
    return (
        <div className=" ">
            <iframe className="w-screen h-screen aspect-video"
                src={`https://www.youtube.com/embed/${trailer?.key}?&autoplay=1&mute=1&si=D7HkVpEe1XpHt8FC`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    )
}

export default VideoBackground
