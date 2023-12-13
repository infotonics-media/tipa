import React from 'react'
import '../assets/css/pressRelase.css'
//import { SRLWrapper } from "simple-react-lightbox";
const PressCards = (props) => {
    return (


        <div className='pressbigcard'>
            <div className='presscrad'>

                <a href={'https://backend.theindianpoloawards.com' + props.item.pdf_file} target="_blank">
                    <img src={'https://backend.theindianpoloawards.com' + props.item.image} alt={props.item.name}
                    />
                </a>
            </div>
            <div>
                <p>{props.item.name}</p>
            </div>

        </div>



    )
}

export default PressCards
