import React from 'react'
import "./KeyNotes.css"
import image1 from "../../assets/img/icons/layer-group-solid.svg"
import image2 from "../../assets/img/icons/algolia-brands.svg"
import image3 from "../../assets/img/icons/air-freshener-solid.svg"
import image4 from "../../assets/img/icons/address-card-solid.svg"
import image5 from "../../assets/img/icons/address-card-solid.svg"
import image6 from "../../assets/img/icons/address-card-solid.svg"
import Course from '../Course/Course'

const KeyNotes = () => {
    return (
        <>

            <section class="service-area grey-bg pb-70 pt-100" id='keynote'>
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12 text-center mb-40">
                            <div class="section-title service-title">
                                <h2 className='title'>Our Course Benefits</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">

                        <div class="col-lg-4 col-md-6 text-center mb-30">
                            <div class="features-wrap">

                                <div class="features-icon">
                                    <img src={image1} alt="Designs & interfaces" />
                                </div>

                                <h4>Latest Technology</h4>
                                <p>Our course teach you how to use latest Technologies to analyse the market efficently to increase the profit.</p>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 text-center mb-30">
                            <div class="features-wrap">

                                <div class="features-icon">
                                    <img src={image2} alt="Faster More  Then Speed" />
                                </div>

                                <h4>Advance Trading Strategy</h4>
                                <p>Our course come with most advance and safe trading strategy that allow you make money easily from market.</p>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 text-center mb-30">
                            <div class="features-wrap">

                                <div class="features-icon">
                                    <img src={image3} alt="Highly customizable" />
                                </div>

                                <h4>Made By Experts</h4>
                                <p>All courses are developed and designed by the industry experts, who have atleast 5 years of market experience.</p>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 text-center mb-30">
                            <div class="features-wrap">

                                <div class="features-icon">
                                    <img src={image6} alt="Official Support" />
                                </div>

                                <h4>High Profit Ratio</h4>
                                <p>Profit Ratio of all the strategy are so high as compared to other strategies in the market.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner_quote">
                    <p>An investment in knowledge always pay the best interest.</p>
                    <a href="/courses" class="btn">View Courses</a>
                </div>
            </section>
        </>
    )
}

export default KeyNotes