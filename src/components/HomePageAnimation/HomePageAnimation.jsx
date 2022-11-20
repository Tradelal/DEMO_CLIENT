import React, { useEffect, useState } from 'react'
import './HomePageAnimation.css'

const HomePageAnimation = () => {

    return (
        <>
            <div className="banner-desc">
                <div className="home_content_box">
                    <div>
                        <h1 style={{textAlign: "left"}}>Meet with us to <br />success dream <br/><span>life</span></h1>
                        <p>Want to be the King Of The Market 📈📉, here at TRADELAL we offer variety of trading courses that will make your dream come true.</p>
                        <p>Our courses will help you build up the Fundamental Knowledge of Trading, you also gonna know about the Phycological Of Market and many more.</p>
                        <p>Learn about day trading, trading basic terminology, how online trading systems work, Forex trading, swing trading, stock prices, live trading, the stock exchange and more with online course. Become a professional trader today with Tradelal!</p>
                        <a href="courses" class="btn">View Courses</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePageAnimation