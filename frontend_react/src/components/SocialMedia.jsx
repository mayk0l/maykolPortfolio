import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
 
const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <BsTwitter onClick={() => window.open('https://twitter.com/?lang=es')}/>
        </div>
        <div>
            <FaFacebookF onClick={() => window.open('https://www.facebook.com/maykolsalgadoxd')}/>
        </div>
        <div>
            <BsInstagram onClick={() => window.open('https://www.instagram.com/999maykol/')}/>
        </div>
    </div>
  )
}

export default SocialMedia