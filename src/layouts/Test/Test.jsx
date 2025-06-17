import('./Test.scss')
import audio from '@assets/audio/для видео - СМЕШНАЯ МЕЛОДИЯ [audiovk.com].mp3'


export const Test = () => {
    return(
        <audio controls src={audio}></audio>
    )
}