import React, { useState } from 'react'
import { redirect, Navigate } from 'react-router-dom';
export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setLoggedIn] = useState(false);

    const userLogin = (e) => {
        e.preventDefault();

        let data = {
            email: email,
            password: password
        }

        fetch('http://localhost:8000/api/login', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((result) => result.json())
            .then((res) => {
                if (res.status == true) {
                    localStorage.setItem('loggedIn', true);
                    localStorage.setItem('token', res.data.token);
                    setLoggedIn(true);
                }
                console.log("res", res);
            })
    }

    if (isLoggedIn) {
        window.location.reload();
    }

    return (
        <div>
            <section className="w3l-hotair-form">
                <h1>User Login</h1>
                <div className="container">
                    <div className="workinghny-form-grid">
                        <div className="main-hotair">
                            <div className="content-wthree">
                                <h2>Log In</h2>
                                <form action="#" onSubmit={(e) => userLogin(e)} method="post">
                                    <input type="email" className="text" name="text" onChange={(e) => setEmail(e.target.value)} placeholder="User Name" required="" autoFocus />
                                    <input type="password" className="text" onChange={(e) => setPassword(e.target.value)} name="password" placeholder="User Password" required="" autoFocus />
                                    <button className="btn" type="submit">Log In</button>
                                </form>

                                <p className="account">Don't have an account? <a href="/register">Register</a></p>
                            </div>
                            <div className="w3l_form align-self">
                                <div className="left_grid_info">
                                    <img src="images/1.png" alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}
