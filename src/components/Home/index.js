import React from 'react'
import {Col } from 'reactstrap';
import {HomeContainer,HomeH1,Homespan,Button} from './HomeElements'

const Home = () => {
    return (
        <HomeContainer>
            <Col lg={{size: 8, offset: 1}}>
                <HomeH1>
                    Web Front-End Developer
                    <Homespan>91950929 임정우의 포토폴리오 사이트입니다.</Homespan>
                </HomeH1>
                <Button to='/Projects'>Projects</Button>
                <Button to='/Contact'>Contact</Button>
            </Col>
        </HomeContainer>
    )
}

export default Home;