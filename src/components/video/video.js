import React from 'react'
import videocouple from '../../assets/videos/dancingcouple.mp4';

const video = () => {
  return (
    <section>
        <video width='100%' controls autoPlay muted>
            <source src={videocouple} type="video/mp4"/>
        </video>
    </section>
  )
}

export default video