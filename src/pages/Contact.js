import {useState} from 'react';
import '../styles/contact.css'

function Contact(){

    const [userName, setUserName] = useState('');

    const handleSubmit = event => {
        event.preventDefault()
        setUserName('')
    }
    return (
        <>
        <div className="contactBg div-wrapper">

            <div className="background-div">
                <h3 className="form-h3">Let's Get in Touch</h3>

                <form onSubmit={handleSubmit} >
                    <input value={userName} type="text" placeholder="Name" />
                    {/* add to value prop to input and set it to userName so it can be referenced above to clear the inputted search */}
                    <input  placeholder="Email Address" />
                    <textarea placeholder="Enter Your Message" cols="30" rows="10" ></textarea>
                    <button className="f-btn" >Submit</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default Contact