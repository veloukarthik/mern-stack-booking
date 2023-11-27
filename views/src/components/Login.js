import React from 'react'

export default function Login() {
    return (
        <div>
            <section className="w3l-hotair-form">
                <h1>User Login</h1>
                <div className="container">
                    <div className="workinghny-form-grid">
                        <div className="main-hotair">
                            <div className="content-wthree">
                                <h2>Log In</h2>
                                <form action="#" method="post">
                                    <input type="text" className="text" name="text" placeholder="User Name" required="" autoFocus />
                                    <input type="password" className="password" name="password" placeholder="User Password" required="" autoFocus />
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
