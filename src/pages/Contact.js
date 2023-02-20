import {useState} from 'react';
import '../styles/contact.css'

function Contact(){

    const [userName, setUserName] = useState('');

    return (
        <>
        <div className="contactBg contact-wrapper" >
        <h2>Contact Us</h2>

        <form onSubmit={handleSubmit} >
            <input value={userName} type="text" placeholder="Enter Your Name" />
            {/* add to value prop to input and set it to userName so it can be referenced above to clear the inputted search */}
            <input value="email" type="text" placeholder="Enter Email Address" />
            <textarea value="message" type="text" placeholder="Enter Message"></textarea>

            <button>Submit</button>
        </form>
        </div>
        </>
    )
}

export default Contact