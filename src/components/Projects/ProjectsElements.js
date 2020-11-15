import styled from 'styled-components';

export const ProjectsContainer=styled.div`
    padding:140px 0;
    justify-content: center;
    align-items:center;
    text-align:center;
    width:100vw;
    height: 100vh;
    background-color:#26282C;
    @media screen and (max-width:768px) {
        padding:40px 0;
        height:auto;
    }
`;

export const ProjectsH1=styled.div`
    color: #9CAAC4;
    font-size: 30px;
    font-weight: 800;
    line-height: 1.2;
    margin:0 0 70px;
    &:after{
        content:"";
        display:block;
        width:155px;
        border-bottom:2px solid #9CAAC4;
        margin:5px auto;
    }
`;

export const Button=styled.div`
    color:#000;
    border:1px solid #BDC4D0;
    padding:10px 20px;
    margin: 10px;
    text-align:center;
    font-size:16px;
    display:inline-block;
    cursor:pointer;
    border-radius:15px;

    &:hover{
        background:#BDC4D0;
        color:#000;
    }
`;