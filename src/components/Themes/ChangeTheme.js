import React, { useState } from 'react'
// import BulbOff from '../../images/bilboff.png'
// import BulbOn from '../../images/BulbON.png'
import './Theme.css'

// import Bulb from './Components/Bulb';
function ThemeChange() {

  const [IsWhiteTheme, setTheme] = useState(true)
  let color = IsWhiteTheme ? "white" : "black"
  console.log(color)
  function changecolor() {
    setTheme(!IsWhiteTheme)
  }

  return (
    <>
    <div style={{backgroundColor:color}}>
      
        <label class="switch">
          <input type="checkbox"
            onClick={changecolor}
          />
          <span class="slider round"></span>
        </label>
        <h3 className='heading'>Hi learning</h3>
        <div className='paragraph'>
          <p>
            It is a long established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using Lorem Ipsum is that
            it has a more-or-less normal distribution of letters, as opposed to using
            'Content here, content here', making it look like readable English. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as their default model
            text, and a search for 'lorem ipsum' will uncover many web sites still in their
            infancy. Various versions have evolved over the years,
            sometimes by accident, sometimes on purpose (injected humour and the like).
            text, and a search for 'lorem ipsum' will uncover many web sites still in their
            infancy. Various versions have evolved over the years,
            sometimes by accident, sometimes on purpose (injected humour and the like).
            
          </p>
          <p>
            It is a long established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using Lorem Ipsum is that
            it has a more-or-less normal distribution of letters, as opposed to using
            'Content here, content here', making it look like readable English. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as their default model
            text, and a search for 'lorem ipsum' will uncover many web sites still in their
            infancy. Various versions have evolved over the years,
            sometimes by accident, sometimes on purpose (injected humour and the like).
            text, and a search for 'lorem ipsum' will uncover many web sites still in their
            infancy. Various versions have evolved over the years,
            sometimes by accident, sometimes on purpose (injected humour and the like).
            
          </p>
          <p>
            It is a long established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using Lorem Ipsum is that
            it has a more-or-less normal distribution of letters, as opposed to using
            'Content here, content here', making it look like readable English. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as their default model
            text, and a search for 'lorem ipsum' will uncover many web sites still in their
            infancy. Various versions have evolved over the years,
            sometimes by accident, sometimes on purpose (injected humour and the like).
            text, and a search for 'lorem ipsum' will uncover many web sites still in their
            infancy. Various versions have evolved over the years,
            sometimes by accident, sometimes on purpose (injected humour and the like).
            sometimes by accident, sometimes on purpose (injected humour and the like).
            
          </p>

        </div>
       </div>
      {/* {(IsWhiteTheme) ? 
      <div className='main'>
        <label class="switch">
          <input type="checkbox"
            onClick={() => {
              setTheme(!IsWhiteTheme)
            }}
          />
          <span class="slider round"></span>
        </label>
      </div> :
        <div className='Bg-change' >
          <label class="switch">
            <input type="checkbox"
              onClick={() => {
                setTheme(!IsWhiteTheme)
              }}
            />
            <span class="slider round"></span>
          </label>
        </div>

      } */}

    </>
  )
}

export default ThemeChange