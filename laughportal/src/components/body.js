import React from 'react'
import elipse from '../images/Ellipse25.svg'
import memoji from '../images/memoji.svg'

function Body() {
    return <section>
        <div className='round-div'>
            <nav>
                <img src={elipse} alt='elipse dot'></img>
                <img src={elipse} alt='elipse dot'></img>
            </nav>
            <div className='round-emoji'>
                <img src={memoji} alt='memoji'></img>
            </div>
            <nav className='dot'>
                <img src={elipse} alt='elipse dot'></img>
                <img src={elipse} alt='elipse dot'></img>
            </nav>
        </div>
        <div className='sq-div'>
                <p>Laugh count</p>
                <span>200</span>
        </div>
    </section>
}
export default Body