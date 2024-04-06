import React, { useState } from 'react'
import { redirect,Navigate } from 'react-router-dom';

export default function Register() {

    const tokens = localStorage.getItem('token');

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [mobile,setMobile] = useState('');
    const [gender,setGender] = useState('');
    const [password,setPassword] = useState('');

    const [isLoggedIn, setLoggedIn] = useState(false);

    
    const userRegister = (e) =>
    {
        e.preventDefault();

        let data = {
            name:name,
            email:email,
            mobile:mobile,
            gender:gender,
            password:password
        }

        fetch('http://localhost:8000/api/register', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((result) => result.json())
            .then((res) => {
                if (res.status == true) {
                    return redirect('/');
                }
                console.log("res", res);
            })

        console.log('data',data);
    }

    if(tokens)
    {
        return <Navigate to='/' />;
    }
    return (
        <div>
            <section className="w3l-hotair-form">
                <h1>User Register</h1>
                <div className="container">
                    <div className="workinghny-form-grid">
                        <div className="main-hotair">
                            <div className="content-wthree">
                                <h2>Register</h2>
                                <form action="#" onSubmit={(e)=>userRegister(e)} method="post">
                                    <input type="text" className="text" name="name" 
                                    onChange={(e)=> setName(e.target.value)} placeholder="User Name" 
                                    required="" autoFocus />

                                    <input type="email" className="text" name="email" 
                                    onChange={(e)=> setEmail(e.target.value)}
                                    placeholder="User email" required="" autoFocus />

                                    <input type="password" className="text" name="password" 
                                    onChange={(e)=> setPassword(e.target.value)}
                                    placeholder="User Password" required="" autoFocus />

                                    <input type="text" className="text" name="mobile" 
                                    onChange={(e)=> setMobile(e.target.value)}
                                    placeholder="User mobile" required="" autoFocus />

                                    <input type='radio' name="gender" onChange={(e)=> setGender(e.target.value)} value="Male" />Male
                                    <input type="radio" name="gender" onChange={(e)=> setGender(e.target.value)} value="Female" />Female
                                    <input type="radio" name="gender" onChange={(e)=> setGender(e.target.value)}   value="Others" />Others <br /><br />
                                    <button className="btn" type="submit">Log In</button>
                                </form>

                                <p className="account">Already have an account? <a href="/">Login</a></p>
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
