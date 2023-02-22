import '../styles/about.css'

function About(){
    return (
        <div className="aboutBg aboutContainer">
            <div className="contentContainer" >
            <h1 className="heading">Welcome to <span className="heading logo1">MINDFULL</span></h1>

                <h3 className="slogan">An app designed to help you focus, de-stress, and stay inspired. Our app offers a variety of features to help you cultivate mindfulness and a sense of calm in your daily life. </h3>

                <h3 className="slogan">At MindFull, we are committed to helping you live a more mindful and fulfilling life. Whether you're looking to improve your productivity, reduce stress, or enhance your well-being, our app is the perfect tool to support you on your journey.</h3> 
                
                <div className="textDiv">

                    <h4 className="aboutText">Focus on your tasks and eliminate distractions to improve productivity</h4>

                    <h4 className="aboutText">Take time to relax and de-stress through peaceful meditations and breathing exercises</h4>

                    <h4 className="aboutText">Stay inspired and become self-aware by reflecting on your personal growth through journaling </h4>
                    
                    {/* <p className="aboutText">
                    In addition to these features, our app includes a journaling feature, allowing you to write down your thoughts, feelings, and reflections. This helps you to gain clarity and perspective on your experiences, leading to greater self-awareness and personal growth.</p> */}
                </div>

            </div>  
                <a href="/menu">
                <button className="about-btn aboutText">Start Your Journey Today</button>
                </a>
        </div>
    )
}

export default About