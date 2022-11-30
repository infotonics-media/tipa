import React, { useEffect, useState } from 'react'
import VideoCards from '../components/VideoCards/VideoCards'
import "../assets/css/video.css";
import axios from "axios";

const AwardsVideoSection = () => {

    const [videoCrad, setVideoCrad] = useState([])

    useEffect(() => {
        axios.get('https://backend.theindianpoloawards.com/award_ceremonies/award_ceremony')
            .then((res) => setVideoCrad(res.data))
            .catch(err => console.log('awrdscard', err))
    }, [])


    const item = videoCrad.map((item) => <VideoCards key={item.id} item={item} />)

    return (
        <div className="interview-video-container">
            <h1 className="in-v-header"> Award ceremony </h1>
            <p className="in-v-desc">
                The grandeur of the night was nothing that could be forgotten.The grand palace, all shinny and bright, reflecting the joy of the enormous night with the smiles of the attendants and the gala of celebration.
        </p>
            <div className='awardsCeremonyvideo'>
                {item}
            </div>
        </div>

    )
}

export default AwardsVideoSection
