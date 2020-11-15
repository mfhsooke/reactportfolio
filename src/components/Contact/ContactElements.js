import styled from 'styled-components';

export const ContactContainer=styled.div`
    padding:140px 0;
    justify-content: center;
    align-items:center;
    text-align:center;
    width:100vw;
    height: 100vh;
    background-color:#6A7C9D;
    @media screen and (max-width:768px) {
        padding:40px 0;
        height:auto;
    }
`;

export const ContactH1=styled.div`
    
    color: #fff;
    font-size: 30px;
    font-weight: 800;
    line-height: 1.2;
    margin:0 0 30px;

    &:after{
        content:"";
        display:block;
        width:155px;
        border-bottom:2px solid #fff;
        margin:5px auto;
    }
`;

export const Img=styled.img`
    width:25%;
    margin:15px;

    @media screen and (max-width:768px) {
    width:70%;
    }
`;
