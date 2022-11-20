import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HomePageBlogSection.css"

const HomePageBlogSection = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {

        const getBlogs = async () => {
            const res = await axios("https://demo-server-ten.vercel.app/getBlogs", {
                method: "GET",
            });
            setBlogs(res.data.blogs);
        };

        getBlogs();
    }, []);

    return (
        <>
            <section class="course-area grey-bg pb-70 pt-100" id='course'>
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12 text-center mb-40">
                            <div class="section-title service-title">
                                <h2 className='title'>Recent Blogs</h2>
                                <p>Read Our Recent Blogs on Stock Market.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        {
                            [...blogs]
                                .reverse()
                                .slice(0, 5)
                                .reverse()
                                .map((elem, index) => {
                                    return (
                                        <>
                                            <div className="blog_row">
                                                <img src={elem.image} alt="blogsImage" />
                                                <p className="date">8 April 2022</p>
                                                <h4 className="blogTitle">{elem.title}</h4>
                                                <a href="#">Read More</a>
                                            </div>
                                        </>
                                    )
                                })
                        }
                    </div>
                </div>
                <a href="/blogs" className="viewMoreBTN">Read More</a>
                <div className="section2-content" style={{width: "80%" , marginBottom: "3rem", color: "orangered"}}>
                    <h2>Disclaimer</h2>
                    <p>'Investments in securities market are subject to market risk, read all the related documents carefully before investing.'</p><br />
                    <p>Tradelal is exclusively for educational purposes and does not provide any advice/tips on Investment or recommend buying and selling of any stock.Tradelal is not exchange traded products and any dispute related to this will not be dealt on exchange platform.</p>
                </div>
            </section>
        </>
    )
}

export default HomePageBlogSection