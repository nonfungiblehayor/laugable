import React from 'react'
import copy from './copy.svg'
import laugh from './laugh.svg'
import scan from './scan-barcode.svg'

function Header2() {
    return <header>
         <div className='laugh-ddiv'>
            <img src={laugh} alt='laughing emoji'></img>
            <p>Laugh portal</p>
        </div>
        <nav>
            <span>0xfr4et6SJJD387ytS</span>
            <img src={copy} alt='copy logo'></img>
            <img src={scan} alt='bar-code'></img>
        </nav>
    </header>
}

export default Header2