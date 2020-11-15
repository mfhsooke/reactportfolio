import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

export const Nav=styled.nav`
    height:80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:15px;
    position: sticky;
    top:0;
    z-index:10;

    @media screen and(max-width:960px){
        trasition:0.8s all ease;
    }
`;

export const NavbarContainer=styled.div`
    display:flex;
    justify-content:center;
    width:100%;
    height:80px;
    z-index:1;
    padding:0 24px;
    max-width:1100px;
`;


export const MobileIcon=styled.div`
    display: none;

    @media screen and (max-width:768px) {
        display: block;
        margin: 24px;
        position: absolute;
        top:0;
        right:0;
        trasform: traslate(-100%,60%);
        font-size:1.8rem;
        cursor:pointer;
        color:#BDC4D0;
    }
`;

    export const NavMenu = styled.ul`
        position:absolute;
        top:15%;
        display:flex;
        align-items: center;
        list-style: none;
        text-align:center;
        justify-content:center;
        float:none;
        

        @media screen and (max-width: 768px){
            display: none;
        }
    `;

    export const NavItem = styled.li`
        height: 80px;
        
    `;

    export const NavLinks=styled(LinkR)`
        color: #BDC4D0;
        display:flex;
        align-items:center;
        text-decoration:none;
        padding:0 1rem;
        height:100%;
        cursor:pointer;

        &:hover{
            color:#6A7C9D;
            text-decoration:none;
        }
     
    `;

