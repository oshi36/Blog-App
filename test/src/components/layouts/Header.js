import React from 'react';
import styled from 'styled-components';

const Header = ()=>{
return <MainContainer> <h1>Welcome To The <br/>
                        Blog Website!</h1>
 </MainContainer>;
};

export default Header;

const MainContainer = styled.header`
background : url(../../images/header-bg.jpg)no-repeat center/cover;
height : 25rem;
h1{
    transform : translate(-50%,-50%);
    color : #fff;
    font-weight: 900;
    position: absolute;
    top:20%;
    left:50%
}

`;

