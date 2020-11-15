import styled from 'styled-components';


export const AboutContainer=styled.div`
    padding:140px 0;
    justify-content: center;
    align-items:center;
    text-align:center;
    width:100vw;
    height: 100vh;
    background-color:#fff;

    @media screen and (max-width:768px) {
        padding:40px 0;
        height:auto;
    }
`;

export const AboutH1=styled.div`
    
    color: #9CAAC4;
    font-size: 30px;
    font-weight: 800;
    line-height: 1.2;

    &:after{
        content:"";
        display:block;
        width:155px;
        border-bottom:2px solid #9CAAC4;
        margin:5px auto;
    }
`;

export const Img=styled.img`
    width:40%;
    margin:10px auto;
`;

export const Content=styled.div`
    color: #9CAAC4;
    font-size: 20px;
    font-weight: 800;
    line-height: 1.2;
    margin: 20px 0 40px;
`;

export const Education=styled.div`
    color: #000;
    font-size: 15px;
    font-weight: 500;
    line-height: 1.2;
    margin:20px 0;
`;

export const Progressname=styled.div`
    text-align:left;
    color: #000;
    font-size: 15px;
    font-weight: 500;
    line-height: 1.2;
    margin:5px;
`;


