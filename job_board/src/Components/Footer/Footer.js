import React from 'react'
import "./footer.css";

export default function Footer() {
    function handleSubscribe (){
        const inpdata = document.querySelector('.f1-inp');
        if(inpdata.value.toLowerCase().includes('@gmail.com')){
            alert('Congrates..! connected with us successfully.');
            inpdata.value = '';
        }
        else {
            alert('please enter an valid email');
        }
        
    }
  return (
    <>
        <div className='footer'>
            <div className='footerContainer'>
                <div className='f1'>
                    <img id='F-img' src="/source/logo.png" alt="logo" />
                    <p>rahullokhande11105@gmail.com</p>
                    <p>+91 7499916161</p>
                    <div className='F-icon'>
                        <p className='F-a'><i class="fa-brands fa-facebook"></i></p>
                        <a className='F-a' href="mailto:rahullokhande11105@gmail.com?subject=Job Inquiry"><i class="fa-brands fa-google-plus"></i></a>
                        <a className='F-a' href="https://x.com/rahullokha90999"><i class="fa-brands fa-twitter"></i></a>
                        <a className='F-a' href="https://www.instagram.com/rahul_l_11105/"><i class="fa-brands fa-square-instagram"></i></a>
                        
                    </div>
                </div>
                <div id='category' className='f1'>
                        <h3 className='f1-heading'>Category</h3>
                        <ul className='f1-list'>
                        <li>Design & Art</li>
                        <li>Engineering</li>
                        <li>Sales & Marketing</li>
                        <li>Finance</li>
                        </ul>
                </div>
                <div className='f1'>
                        <h3 className='f1-heading'>Subscribe</h3>
                        <div className="input-with-button">
                            <input
                                className="f1-inp"
                                type="text"
                                placeholder="Enter your mail"
                            />
                            <button className="f1-btn" onClick={handleSubscribe}>Subscribe</button>
                        </div>
                        <p>Esteem spirit temper too say adieus who direct esteem esteems luckily.</p>

                </div>
                
            </div>
            
        </div>
        <div className='copyright'>
                    <p>Copyright ©2025 All rights reserved | This template is made with <span className='f-heart'>&#9829;</span>  by <p id='my-name'>Rahul_Lokhande</p></p>
        </div>
    </> 
    
  )
}
