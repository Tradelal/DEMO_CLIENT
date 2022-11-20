import React from "react";
import Banner from "../../components/Banner/Banner"
import bannerImg from "../../assets/img/bg/page-title.jpg"
import Header from "../../components/Header/Header"
import our_team from "../../assets/img/about/our-team.jpg";
import about1 from "../../assets/img/about/about1.jpg";
import about2 from "../../assets/img/about/about2.jpg";
import "./About.css"
import Footer from "../../components/Footer/Footer";

const About = () => {
    return (
        <>
            <Header color="black" />
            <Banner bannerImg={bannerImg} title="ABOUT" component="Home/Pages/About" />

            <div className="sec1-wrapper">
                <h1 className="sec1-header">We Are Awesome People</h1>
                <div className="section1-content">
                    <div className="sec1-img">
                        <img src={our_team} alt="team Image" />
                    </div>
                </div>
            </div>
            <div className="sec2-wrapper">
                <div className="sec2">
                    <h1>About Us</h1>
                    <hr />
                    <div className="section2-content">
                        <p>Tradelal Course was founded in 2014 with the goal of teaching people about online trading. We offer seminars and online courses that cover topics like Forex trading, swing trading, and the stock exchange. Our curriculum is designed for people who want to learn about trading but don't have any experience. We also offer live trading sessions so that students can get a feel for how the stock market works in real-time.</p>
                        <p>Our mission is to educate as many people as possible about trading so they can live financial free lives. We believe that trading is a great way to make money and our goal is to help people learn how to do it so they can achieve financial independence.</p>
                    </div>
                </div>
                <div className="sec2-img">
                    <img src={about1} alt="Image" />
                    <img src={about2} alt="Image" />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About;