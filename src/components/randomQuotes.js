import React, { useState } from 'react';
import quotes from './quotes.json'
    
    const RandomQuotes = () => {
    const randomQuoteIndex = Math.floor(Math.random() * (0, quotes.length));
    const [infoQuote, setInfoQuote] = useState(randomQuoteIndex);


    const randomQuote = () => {
       const randomQuoteIndex = Math.floor(Math.random() * (0, quotes.length))
        setInfoQuote(randomQuoteIndex);
    }

    const colors = ['#196F3D', '#154360', '#D35400', '#F1C40F','#4A235A', '#138D75', '#784212'];

    const randomColor = Math.floor(Math.random() * (0, colors.length));

    document.body.style = `background: ${colors[randomColor]}`;
        
    return (
        <div className='cardQuotes' style={{color: colors[randomColor]}}>

            <blockquote><i className="fa-solid fa-quote-left fa-7x"></i>
                <p>{quotes[infoQuote].quote}</p>
            </blockquote>
            <p className='author'>{quotes[infoQuote].author}</p>
            <div className='button-random'>
                <button onClick={randomQuote}><i className="fa-solid fa-circle-right fa-3x"></i></button>
            </div>
        </div>
    );
};

export default RandomQuotes;