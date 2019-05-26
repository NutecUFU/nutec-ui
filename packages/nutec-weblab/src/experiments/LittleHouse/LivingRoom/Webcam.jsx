import React from 'react'
import { WebcamWrapper } from './styled'

const Webcam = () => {

  return (
    <WebcamWrapper>
      <iframe
        title="experiment-live" 
        width="600" 
        height="300" 
        src="https://www.youtube.com/embed/QGA0ApPtgWo" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
      ></iframe>
    </WebcamWrapper>
  )
}

export default Webcam