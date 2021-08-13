import React from "react";
import { FaInstagram, FaLinkedin, FaGithub , FaYoutube , FaMedium} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./footerElement";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <WebsiteRights>
              Webwiz © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="//www.github.com/Webwiznitr"
                target="_blank"
                aria-label="Github"
              >
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink
                href="//www.instagram.com/webwiz.nitr"
                target="_blank"
                aria-label="Instagram"
              >
               <FaInstagram />
              </SocialIconLink>
              <SocialIconLink 
                href="//www.linkedin.com/company/webwiz-nitr/" 
                target="_blank" 
                aria-label="LinkedIn">
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.youtube.com/channel/UC9yM_PkV0QIIsPA3qPrp3zw"
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="https://medium.com/webwiznitr"
                target="_blank"
                aria-label="Medium"
              >
                <FaMedium />
              </SocialIconLink>
              
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;

//hello