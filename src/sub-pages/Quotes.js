import qData from '../qData.json'

const styles = {
    h3: {
        textAlign: 'center',
        marginTop: '2rem'
    }
}

function Quotes() {
    function generateRandomQuote() {
      let randomQuote = qData[Math.floor(Math.random() * qData.length)];
      return randomQuote;
    }
  
    const randomQuote = generateRandomQuote();
  
    return (
      <>
        <div className="quoteDiv">
        <h1 style={styles.h3}>Quotes</h1>
          <p className="quote">"{randomQuote.quote}"</p>
          <p className="author">- {randomQuote.author}</p>
        </div>
      </>
    );
  }
  
  
  

export default Quotes