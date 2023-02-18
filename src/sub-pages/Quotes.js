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
        <div className="quoteDiv quoteBackground">
        <h1>Quotes</h1>
          <p className="quote">"{randomQuote.quote}"</p>
          <p className="author">- {randomQuote.author}</p>

          <div className="img-container">
          <img className="book" src={BookIcon} />
          </div>
        </div>
    
    );
  }

export default Quotes