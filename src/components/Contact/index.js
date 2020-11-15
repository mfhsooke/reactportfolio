import React from 'react'
import {ContactContainer,ContactH1,Img} from './ContactElements';
import {Col} from 'reactstrap';
import '../Contact/Contact.css';
import img from '../images/CONTACT.svg'
import * as emailjs from 'emailjs-com';

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
      
    function submit(){
        alert("메일을 보냈습니다.");
    }

    return (
            <ContactContainer>
            <ContactH1>Contact</ContactH1>
            <Img src={img} />   
            <Col sm={{size:4, offset:4}}>
            <form className="contact-form" onSubmit={sendEmail}>
            <input type="text" name="from_name" placeholder="NAME"/>
            <input type="email" name="from_email" placeholder="EMAIL"/>
            <textarea name="message" placeholder="MESSAGE"/>
            <input type="submit" value="Send" onClick={submit}/>
          </form>
          </Col>
          </ContactContainer>
    );
}

export default Contact;
