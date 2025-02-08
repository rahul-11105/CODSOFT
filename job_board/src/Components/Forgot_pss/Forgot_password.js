import React from "react";
import "./forgotPass.css";
import { Link } from "react-router-dom";
//import Nav from "../Navbar/Nav";

const ForgotPassword = () => {
    return (
        <div div className="master">
            <section className="forgot">
                <div className="forgot-pass">
                    <h2>Need Help?</h2>
                    <p>If you forgot your password, please contact support.</p>
                    <p><strong>Mobile:</strong> +91 7499916161</p>
                    <p><strong>Email:</strong> rahullokhande11105@gmail.com</p>
                    
                    <Link to="/Login" className="contact-support">Back</Link>
                </div>
            </section>
        </div>
    );
};

export default ForgotPassword;
