import React from 'react'
import "./Footer.css"
import { UilEnvelopeDownload } from '@iconscout/react-unicons'
import { UilPhoneAlt } from '@iconscout/react-unicons'
import { UilFacebookF } from '@iconscout/react-unicons'
import { UilTwitter } from '@iconscout/react-unicons'
import { UilYoutube } from '@iconscout/react-unicons'
import { UilTelegram } from '@iconscout/react-unicons'

const Footer = () => {
    return (
        <>
            <div className="footer_container">
                <div className="footer_contact_section">
                    <div className="row_1">
                        <UilPhoneAlt className="footer_icon" />
                        <div className="inner_div">
                            <p className="bold">Phone No.</p>
                            <p className="number">7023639107</p>
                        </div>
                    </div>
                    <div className="row_1">
                        <UilTelegram className="footer_icon" />
                        <div className="inner_div">
                            <p className="bold">Telegram</p>
                            <a href='https://t.me/tradelal' target="_blank" className="number">https://t.me/tradelal</a>
                        </div>
                    </div>
                    <div className="row_1">
                        <UilEnvelopeDownload className="footer_icon" />
                        <div className="inner_div">
                            <p className="bold">Mail Us</p>
                            <p className="number">tradelal.com@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="line_through"></div>
                <div className="site_description">
                    <div className="logo">TRADELAL<span className='dot'>.</span></div>
                    <div className="site_disc">
                        <p>Want to be the King Of The Market 📈📉, here at TRADELAL we offer variety of trading courses that will make your dream come true.</p>
                        <p>Our courses will help you build up the Fundamental Knowledge of Trading, you also gonna know about the Phycological Of Market and many more.</p>
                    </div>
                    <div className="social_links">
                        <h2 className='follow_us_header'>Follow Us</h2>
                        <div className="social_container">
                            <div className="facebook">
                                <a href="#" className='social_a'><UilFacebookF className="social_media_icon" /></a>
                            </div>
                            <div className="twitter">
                                <a href="#" className='social_a'><UilTwitter className="social_media_icon" /></a>
                            </div>
                            <div className="youtube">
                                <a href="#" className='social_a'><UilYoutube className="social_media_icon" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="usefull_links">
                    <h2 className='footer_bar'>Useful Link</h2>

                    <div className="flex_div">
                        <div className="links">
                            <a href="/">Home</a>
                            <a href="/about">About</a>
                            <a href="/courses">Courses</a>
                            <a href="/blogs">Blogs</a>
                            <a href="/contact">Contact Us</a>
                        </div>
                        <div className="links" style={{ marginInlineStart: "3rem" }}>
                            <a href="/terms&condition">Terms & Conditions</a>
                            <a href="/return-policy">Return Policy</a>
                            <a href="/shipping-policy">Shipping Policy</a>
                            <a href="/privacy-policy">Privacy Policy</a>
                        </div>
                    </div>
                </div>
                <div className="copyright_bar">
                    <p className="copyright_text">Copyright @ 2022, All Right Reserved <a href='#'>TRADELAL</a></p>
                </div>
            </div>
        </>
    )
}

export default Footer