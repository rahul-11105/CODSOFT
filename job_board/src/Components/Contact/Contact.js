import React, { useRef } from 'react';
import './contact.css';
import Nav from '../Navbar/Nav';
import Footer from '../Footer/Footer.js';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log('Form Data:', form.current);

    emailjs
      .sendForm(
        'service_hutrpgb',  
        'template_o9ou607',  
        form.current,
        'FCkzeOH5lW8eUPlnr'      
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
          console.log(result.text);
        },
        (error) => {
          alert('There was an error sending your message.');
          console.log(error.text);
        }
      );
      form.current.reset();
  };

  return (
    <>
      <Nav />
      <div className="contact">
        <h3>Contact</h3>
      </div>
      <section className="contact-map">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3778.4932731004724!2d73.42838797529699!3d18.731491282403397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be8018f99779941%3A0x6d8398f7fcc9db6f!2sSIT%20Sinhgad%20Institute%20Of%20Technology%20Lonavala!5e0!3m2!1sen!2sin!4v1736712137368!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: 10 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="contact-div">
          <h2>Get in Touch</h2>
          <div className="contact-information">
            <form className="inp-feilds" ref={form} onSubmit={sendEmail}>
              <textarea className="textArea" name="message" placeholder="Enter Message" required></textarea>
              <div className="inp-feilds-name-add">
                <input type="text" name="from_name" placeholder="Enter Your Name" required />
                <input type="email" name="your email" placeholder="Enter Your Email" required />
              </div>
              <input id="sub-inp" type="text" name="subject" placeholder="Enter Subject" required />
              <button id="sub-btn" type="submit">
                SEND MESSAGE
              </button>
            </form>

            <div className="contact-right">
              <h3 id="F-h3">
                <i className="fa-solid fa-house-chimney-window i"></i>AhmedNagar, Maharastra
              </h3>
              <h3>
                <i className="fa-solid fa-mobile-screen-button i"></i>+91 7499916161
              </h3>
              <p>Mon to Fri 9am to 6pm</p>
              <h3>
                <i className="fa-regular fa-envelope i"></i>rahullokhande11105@gmail.com
              </h3>
              <p>Send us your query anytime!</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
