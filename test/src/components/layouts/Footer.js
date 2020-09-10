import React from 'react'
import styled from 'styled-components';

 const Footer = () => {
    return (
        <FooterContainer>
            <span 
            style = {{
                color: "#fff",
                top:"1.5rem",
                left:"1rem",
                positon:"relative"
            }}
            >
               <b> &copy;{new Date().getFullYear()} All Rights Reserved.<br/>
               &nbsp;Made With &#9829; By Oshi Gupta </b>
            </span>
            
        </FooterContainer>
    )
}

export default Footer;

const FooterContainer = styled.footer`
text-align : center;
background : #48C9B0;
height : 4rem;
left:0;
bottom: 0;
width : 100%;
`;