import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react";

import '../styles/contact.css'




function Contact(){
    const SUCCESS_DISPLAY_TIME = 5000; // 5 secs display msg

    const ACCESS_KEY = '429dbb26-6a99-458d-83df-ecbb15ab05ae';

    const [success, setSuccess] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        access_key: ACCESS_KEY
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
   
        event.preventDefault();

        // const formData = new FormData(form);
        // const object = Object.fromEntries(formData);
        
        const dataJSON = JSON.stringify(formData);

        // result.innerHTML = "Please wait..." 
      
          fetch('https://api.web3forms.com/submit', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                      'Accept': 'application/json'
                  },
                  body: dataJSON
              })
                .then(res => res.json())
                .then(data => {
                    setSuccess(true);
                    setTimeout(() => {
                        setSuccess(false);
                        // clear form
                        setFormData({
                            name: '',
                            email: '',
                            message: ''
                        })
                    }, SUCCESS_DISPLAY_TIME);
                    
                })
                .catch(err => console.log(err));

    };

    return (
        <>
        <div className="contactBg div-wrapper">

            <div className="background-div">
                <h2 className="form-h2">Let's Get in Touch</h2>

                <form onSubmit={handleSubmit} >
                    <input 
                        name="name" 
                        value={formData.name} 
                        type="text" 
                        placeholder="Name" 
                        onChange={handleChange} />

                    <input 
                        name="email" 
                        value={formData.email} 
                        placeholder="Email Address" 
                        onChange={handleChange}/>

                    <textarea 
                        name="message" 
                        value={formData.message} 
                        placeholder="Enter Your Message" 
                        cols="30" 
                        rows="10" 
                        onChange={handleChange} >
                    </textarea>

                    <button className="f-btn" >Submit</button>
                </form>

                <div className="icon-div">
                    <a href="https://www.facebook.com/">
                        <FontAwesomeIcon className="icon fb" icon="fa-brands fa-facebook-f" size="lg"/>
                    </a>
                    <a href="https://instagram.com/">
                        <FontAwesomeIcon className="icon ig" icon="fa-brands fa-instagram" size="lg" />
                    </a>
                    <a href="https://twitter.com/">
                        <FontAwesomeIcon className="icon tw" icon="fa-brands fa-twitter" size="lg"/>
                    </a>
                    <a href="https://linkedin.com/">
                        <FontAwesomeIcon className="icon in" icon="fa-brands fa-linkedin-in" size="lg"/>
                    </a> 
                </div>

                
                {/* Only display message once successfully sent */}
                {success && <p className="success_msg">Your message has be sent. &nbsp; We will be in contact as soon as possible.</p>}


            </div>
        </div>
        </>
    )
}

export default Contact