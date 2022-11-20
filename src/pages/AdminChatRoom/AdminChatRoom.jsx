import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

const AdminChatRoom = () => {
    const navigate = useNavigate();
    let link
    const [course, setCourse] = useState([]);
    const getCourse = async () => {
        const res = await axios("https://demo-server-ten.vercel.app/getCourse", {
            method: "GET",
        });
        setCourse(res.data.course);
    };

    useEffect(() => {
        getCourse();
    }, []);

    return (
        <>
            <Navbar />
            <div className="community_cont">
                <div className="chat_room_cont">
                    <div className="demoBox">
                        {
                            course.map((elem, index) => {
                                link = `https://tradelal.com/chat?userName=Admin&id=${elem.title.replaceAll(' ', '')}`
                                return (
                                    <div className="courseCard">
                                        <img src={elem.courseImage} className="imageCard" alt="" srcset="" />
                                        <h2>{elem.title}</h2>
                                        <a className="button" href={link} target="_blank">Click Here</a>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminChatRoom