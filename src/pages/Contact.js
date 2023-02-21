import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/contact.css'


function Contact(){

    const handleSubmit = event => {
        event.preventDefault()
    }
    return (
        <>
        <div className="contactBg div-wrapper">

            <div className="background-div">
                <h2 className="form-h2">Let's Get in Touch</h2>

                <form onSubmit={handleSubmit} >
                    <input type="text" placeholder="Name" />
                    <input  placeholder="Email Address" />
                    <textarea placeholder="Enter Your Message" cols="30" rows="10" ></textarea>
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
            </div>
        </div>
        </>
    )
}

export default Contact