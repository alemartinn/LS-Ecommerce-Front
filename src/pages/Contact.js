import React from 'react'
import { useSelector } from 'react-redux'
import '../styles/Contact.css'
export default function Contact() {
    const {fontColor, bcgColor,secondColor} = useSelector(state=>state.color)
    return (
        <div className='contact-container'
            style={{ backgroundColor: bcgColor, color: fontColor }}>
            <div className='contact-info'>
                <div className='contact'>
                    <div className='contact-me'>
                        <h2 className='contact-title'>Contact</h2>
                        <p className='contact-me-p'>📨 lsfoodco@gmail.com</p>
                        <p className='contact-me-p'>📞 011-12345678</p>
                        {/* <p className='contact-me-p'>🏠 San Francisco Solano</p> */}
                    </div>
                    <div className='contact-map'>
                        <img className='contact-map-img' src='/images/map.png' alt="map-location" />
                    </div>
                </div>
                <div className='contact-description'>
                    <p className='contact-description-p'>
                        Most of our client relationships are measured in years, not months.Learn more about how we can
                        improve your ecommerce generated from, and within, social media
                    </p>
                    <form onSubmit={e => e.preventDefault()}>
                        <div className='contact-inputs'>
                            <input className="effect-1" type="text" placeholder="Name"
                            style={{ color: fontColor }} />
                            <span className="focus-border1"></span>
                            <input className="effect-2" type="text" placeholder="Email"
                            style={{ color: fontColor }}/>
                            <span className="focus-border2"></span>
                        </div>
                        <textarea style={{ resize: "none", width: "100%",backgroundColor: secondColor,color: "#eee" }} rows="10" cols="32" ></textarea>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                            <button className='contact-inputs-send' type='submit'>Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
