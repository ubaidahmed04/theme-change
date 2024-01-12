import React from 'react'
import { ThemeChange } from './Themes'
// import '../App.css'
function Footer() {
    return (
        <>
            <div className='navbar-div'>
                <div className='logo'>
    <img src={ require('.././images/image2.png')} />

                </div>




                <div className='icon-div'>
                    <div className='tab-div'>
                        <div className='tab'>
                            home  <i class="fa fa-fw fa-home"></i>
                            </div> 
                            <div className='tab'>
                            search  <i class="fa fa-fw fa-search"></i>
                            </div> 
                            <div className='tab'>
                            envelope  <i class="fa fa-fw fa-home"></i>
                        </div>
                    </div>
                </div>
                        {/* <ThemeChange  /> */}

                <div className='btn-div'>
                <div className='buttons'>
                    </div>

                    <div className='buttons'>
                    <a href='./Login'><button type="" className='btn btn-primary'>Login</button></a>

                    </div>
                    <div className='buttons'>
                    <a href='./SignUp'><button type="" className='btn btn-primary'>SignUp</button></a>



                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer