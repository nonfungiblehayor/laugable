import React from 'react'
import laugh from '../images/laugh.svg'

function Header(props) {
    return <header>
        <div>
            <img src={laugh} alt='laughing emoji'></img>
            <p>Laugh portal</p>
        </div>
        <button type='submit'>send a laugh</button>
    </header>
}
export default Header