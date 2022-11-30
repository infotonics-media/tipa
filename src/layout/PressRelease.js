import React from 'react'
import Nav from './Nav'
import "../assets/css/Hero.css"
import "../assets/css/pressRelase.css"
import PressInmotion from './PressInmotion'
import GalleryPage from './GalleryPage'
import Footer from './Footer'
import PressReleasePopUp from '../components/PressReleasePopUp'

const PressRelease = () => {
    return (
        <div className='galleryPage'>
            <Nav />
            {/* <div className="hero"
                style={{
                    backgroundImage: `url(https://backend.theindianpoloawards.com/media/press/cover_image/photo6244514486107090148.jpg)`
                }}
            >
            </div> */}
            {/* <div className='pressrelsedes'>
                <p>
                    TIPA emerged from a vision to redefine the experience of Polo by hosting an iconic award show, an occasion inviting the most
                </p>
            </div> */}
            {/* <PressInmotion /> */}
            <PressReleasePopUp />
            <Footer />
        </div>
    )
}

export default PressRelease
