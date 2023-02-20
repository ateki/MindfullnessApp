import qData from '../qData.json'
import '../styles/quote.css'
import BookIcon from '../assets/BookIcon.png'


function Quotes() {
    function generateRandomQuote() {
      let randomQuote = qData[Math.floor(Math.random() * qData.length)];
      return randomQuote;
    }
  
    const randomQuote = generateRandomQuote();
  
    return (
        <div className="q-container quoteBackground">
        <h1 className ="quoteH1">Quote of the Day</h1>
        <div className="quote-div" >
          <p className="quote">"{randomQuote.quote}"</p>
          <p className="author">- {randomQuote.author}</p>
        </div>

          <div className="img-container">
          <img className="book-icon" src={BookIcon} />
          </div>
        </div>
    
    );
  }

export default Quotes