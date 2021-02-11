import React from 'react';
import logo from '../../../assets/image/logos/saint_logo.png';

import { IconContext } from 'react-icons/lib';

import {
    FaInstagram,
    FaYoutube,
    FaTwitter,
} from 'react-icons/fa'

import {
    FooterContainer,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink

} from './FooterStyles';

const Footer = () => {
    return (
        <FooterContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <IconContext.Provider value={{color: 'var(--ctaClr)'}}>
                        <SocialLogo to='/'>
                            <img src={logo} alt="Logo" />
                        </SocialLogo>
                    </IconContext.Provider>
                    
                    <WebsiteRights>Taguara Digital © 2021</WebsiteRights>
                     <SocialIcons>
                        <SocialIconLink
                            href='https://www.instagram.com/taguara_digital/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink
                            href={'https://www.youtube.com/channel/UC_sNC11A5AB0E5P7uK2loqQ'}
                            rel='noopener noreferrer'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink
                            href={ 'https://twitter.com/TaguaraDigital' }
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <FaTwitter />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
