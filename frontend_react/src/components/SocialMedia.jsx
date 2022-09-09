import React from 'react';
import { BsGithub, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
 
const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <BsGithub onClick={() => window.open('https://github.com/mayk0l')}/>
        </div>
        <div>
            <FaFacebookF onClick={() => window.open('https://www.facebook.com/maykolsalgadoxd')}/>
        </div>
        <div>
            <BsInstagram onClick={() => window.open('https://www.instagram.com/maykol_dev/')}/>
        </div>
    </div>
  )
}

export default SocialMedia