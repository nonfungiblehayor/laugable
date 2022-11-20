import React from 'react'
import twitter from '../../images/twitter.svg'
import github from '../../images/github.svg'
import email from '../../images/email.svg'
import linkedin from '../../images/linkedin.svg'

function SocialIcon() {
    return <div className='socials'>
        <a href='/app'> <img src={linkedin} alt='linkedin-logo'></img>  </a>
        <a href='/app'> <img src={github} alt='github-logo'></img></a>  
        <a href='/app'> <img src={twitter} alt='github-logo'></img></a>   
        <a href='/app'> <img src={email} alt='github-logo'></img></a>      
    </div>
}

export default SocialIcon