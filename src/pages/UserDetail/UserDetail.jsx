import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios";
import "./UserDetail.css"
import Navbar from '../../components/Navbar/Navbar';

const UserDetail = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {

        const getUsers = async () => {
            const res = await axios("https://demo-server-ten.vercel.app/getUsers", {
                method: "GET",
            });
            setUsers(res.data.user)
        };

        getUsers();
    }, []);

    return (
        <>
            <Navbar />
            <div className="recent_purchase" style={{ margin: "3rem auto" }}>
                {users.length > 0 ? <>
                    <table>
                        <tr>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Contact</th>
                        </tr>
                        {users.map((elem, index) => {
                            return (
                                <>
                                    <tr>
                                        <td>{elem.username}</td>
                                        <td>{elem.email}</td>
                                        <td>{elem.contact[0].code} {elem.contact[0].phone}</td>
                                    </tr>
                                </>
                            )
                        })}
                    </table>
                </> : <><p>Loading Data...</p></>}
            </div>
        </>
    )
}

export default UserDetail