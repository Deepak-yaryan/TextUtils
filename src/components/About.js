import React from 'react'

export default function About(props) {
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
    <h1 className='my-3'>About Us</h1>
      <div className="accordion" id="accordionExample" style={{fontSize: "20px"}}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark'?'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Analyze Your Text
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark'?'white':'black'}}>
              Textutils gives you a way to analyze your text quickly and efficiently. Be it word Count, Character count etc. The Text Utilities Application is a tool that allows you to perform various functions on any given text. Built using ReactJS, it provides a user-friendly interface to help you analyze your text and make changes as needed. The application comes with both light and dark mode options, so you can use it in any lighting condition.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark'?'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Free To Use
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark'?'white':'black'}}>
              TextUtils is a free character counter tool that provide instant character count & word count statistics for a given text. Textutils report the number of words and chracters. Thus it is suitable for writing text with word character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark'?'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Browser Compatible
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark'?'white':'black'}}>
              This word counter software work in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count chracters in facebook, blogs, books, excel document, pdf document, essays etc.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button className="accordion-button collapsed" style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark'?'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            How It Works
            </button>
          </h2>
          <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark'?'white':'black'}}>
            Receive the text input from user. Tokenize it based on the new line character. Trim each token and collect them in a list or set or map depending on the user need. process each token based on user option. Finally it concatenate all the tokens and return as output.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
        <button onClick={togglestyle} type='button' className='btn btn-primary'>{btntext}</button>
      </div> */}
      </div>
    </>
  )
}
