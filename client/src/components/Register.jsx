import React from 'react'

import { FcGoogle } from 'react-icons/fc'
import logo from '../assets/techcrk.svg'

import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="container-fluid d-Rcontainer">
            <div class="row container">
                <div class="col-sm logo">
                    <img src={logo} alt="" />
                    <p className="h1 text-light text-center"> SMART VOTE</p>
                </div>
                
                <div class="col-sm d-form">
                    <h6>Register</h6>
                    <form>
                        <div class="mb-3">
                            <input type="text" class="form-control" id="fullname" aria-describedby="emailHelp" placeholder="Full Name" />
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control" id="gender" placeholder="Gender" />
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" />
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control" id="password" placeholder="Password" />
                        </div>


                        <button type="submit" class="btn btn-warning">SIGN UP</button>

                        <div className = "title-comp">
                            <div className="bg-secondary line"></div>
                                <p className = "mx-2 heading-1"> Or Register With </p>
                            <div className="bg-secondary line"></div>
                        </div>

                        <div className="login-icons">
                            <a href = "/"><FcGoogle className = "google" /></a>
                        </div>

                        <div className="bottom">
                        <p>Already have an account? <Link to = "/LogIn" ><b>Log In</b></Link> </p>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default Register
