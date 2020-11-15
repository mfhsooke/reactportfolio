import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom' ;

export const HomeContainer=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;

    background-image: url('https://images.unsplash.com/photo-1520188740392-665a13f453fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80');

    background-size: cover;
`;

export const HomeH1=styled.div`
    color: #eee;
    font-size: 60px;
    font-weight: 800;
    line-height: 1.2;
`;

export const Homespan=styled.div`
    font-size:20px;
    color:#BDC4D0;
`;

export const Button=styled(LinkR)`
    color:#fff;
    border:1px solid #BDC4D0;
    padding:15px 30px;
    margin: 10px;
    text-align:center;
    font-size:16px;
    display:inline-block;
    cursor:pointer;
    border-radius:15px;

    &:hover{
        background:#BDC4D0;
        color:#000;
        text-decoration:none;
    }
`;
