import './accordion.css'
import React,{useState} from 'react'

const accordion = document.getElementsByClassName('contentbox');
for(let i = 0; i < accordion.length; i++){
  accordion[i].addEventListener("click",function(){
    this.classList.toggle('active')
  })
}

export default function About() {

  const [myStyle, setmystyle] = useState({
    color: 'white',
    backgroundColor: 'black',
    border: '1px solid white'
  })

  const [btntext, setbtntext] = useState("Enable Dark Mode")

  const togglestyle = ()=>{
    if(myStyle.color === 'white'){
      setmystyle({
        color: 'black',
        backgroundColor: 'white',
        border: '1px solid black'
      })
      setbtntext("Enable Dark Mode")
    }
    else{
      setmystyle({
        color: 'white',
        backgroundColor: 'black',
        border: '1px solid white'
      })
      setbtntext("Enable Lite Mode")
    }
  }

  return (
    <>
    <div class="accordion" style={myStyle}>
      <h1>About Us</h1>
        <div class="contentbox" style={myStyle}>
          <div class="label" style={myStyle}>List One</div>
          <div class="content" style={myStyle}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptate architecto minima culpa, saepe inventore animi eveniet, dolorum similique sequi ea aperiam nam! Quo magnam natus laborum asperiores? Iste mollitia nam nesciunt aperiam repellat.</p>
          </div>
        </div>
  
        <div class="contentbox">
          <div class="label" style={myStyle}>List One</div>
          <div class="content" style={myStyle}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptate architecto minima culpa, saepe inventore animi eveniet, dolorum similique sequi ea aperiam nam! Quo magnam natus laborum asperiores? Iste mollitia nam nesciunt aperiam repellat.</p>
          </div>
        </div>
  
        <div class="contentbox">
          <div class="label" style={myStyle}>List One</div>
          <div class="content" style={myStyle}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptate architecto minima culpa, saepe inventore animi eveniet, dolorum similique sequi ea aperiam nam! Quo magnam natus laborum asperiores? Iste mollitia nam nesciunt aperiam repellat.</p>
          </div>
        </div>
        
        <div className="button">
        <button onClick={togglestyle} type='button' style={myStyle}>{btntext}</button>
      </div>
      </div>
    </>
  )
}