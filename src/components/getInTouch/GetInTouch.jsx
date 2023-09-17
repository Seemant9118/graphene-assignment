import React from 'react';
import './GetInTouch.css';
import LineBottom from '../../asserts/Line 19.png';

const GetInTouch = () => {
    return (
        <div className='getInTouch'>
            <div className="first">
                <div className="caption">
                    <p>Newsletter</p>
                    <span>Get News about articles and updates in your inbox</span>
                </div>
                <div className="form">
                    <form>
                        <input type='text' name='name' placeholder='NAME' />
                        <img src={LineBottom} alt='Line' />
                        <input type='text' name='mail' placeholder='EMAIL' style={{color:"rgba(255, 255, 255, 0.50)"}}/>
                        <img src={LineBottom} alt='Line' />
                        <input type='text' name='message' placeholder='MESSAGE' />
                        <img src={LineBottom} alt='Line' />
                    </form>
                </div>
            </div>
            <div className="second">
                <div className="head">
                    <span>GET</span>
                    <span>IN TOUCH</span>
                </div>
                <span className='send'>SEND</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="181" height="181" viewBox="0 0 181 181" fill="none">
                    <circle cx="90.5" cy="90.5" r="89.5" stroke="#F07E15" stroke-width="2" />
                </svg>
            </div>

        </div>
    )
}

export default GetInTouch