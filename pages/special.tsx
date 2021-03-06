import { useEffect, useState } from "react";
import styled from "styled-components";

const SpecialPage = () => {
    const [started, setStarted] = useState(false)
    const [audio, setAudio] = useState<HTMLAudioElement>()

    useEffect(() => {
        if (!audio) {
            setAudio(new Audio('/audio/katana_low.mp3'))
        }

    }, [audio])

    const start = () => {
        setStarted(true)
    }

    useEffect(() => {
        if (started) {
            audio && audio.play()
            window.scrollTo(0, 220)
        }

    }, [started, audio])

    useEffect(() => {
        return () => {
            if (!audio) return

            audio.pause()
            audio.remove()
            setAudio(undefined)
        }
    },[audio])

    return (
        <>
            {started ?
                <>
                    <Black />
                    <WebpImg src="/videos/real-hasl.webp" />
                </>
                :
                <>
                    <StartBtn src="/images/start-btn.jpg" onClick={start} />
                </>
            }
        </>
    );
}

export default SpecialPage;

const Black = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-color: black;
`

const WebpImg = styled.img`
    height: 95vh;
    z-index: 1;

    @media (max-width: 500px) {
        height: 75vh;
    }
`

const StartBtn = styled.img`
    margin-top: 100px;
    border-radius: 50%;
    cursor: pointer;
    transition: 200ms;

    &:hover {
        box-shadow: 0 4px 50px white;
    }

    &:active {
        transform: scale(0.8);
    }

    `