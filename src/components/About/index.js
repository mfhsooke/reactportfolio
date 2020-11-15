import React from 'react';
import {Row, Col,Progress} from 'reactstrap';
import {AboutContainer,AboutH1,Img,Content,Education,Progressname} from './AboutElements';
import img from '../images/ABOUT.svg'

const About = () => {
    return (
        <AboutContainer>
            <Row>
                <Col sm={{size:8, offset:2}}>
                    <AboutH1>ABOUT ME</AboutH1>
                    <Img src={img} />
                    <Content>안녕하세요, 저는 웹 프론트엔드 개발자 임정우입니다.<br></br>
                    반응형 웹을 만드는 것을 좋아하고 다양한 Ul/UX 디자인에 관심이 많습니다.
                    </Content>
                </Col>
            </Row>
            <Row>
                <Col sm={{size:4, offset:2}}>
                <AboutH1>Graduation</AboutH1>
                <br></br>
                <Education>
                    부천대학교 정보통신과<br></br>
                    2017.02~2019.02
                </Education>
                <Education>
                    중부대학교 게임소프트웨어학과<br></br>
                    2019.02~2021.02(졸업예정)
                </Education>
                </Col>
                <Col sm="4">
                    <AboutH1>Skill</AboutH1>
                    <Progressname>HTML&CSS</Progressname>
                    <Progress color="danger" value="90">90%</Progress>
                    <Progressname>JavaScript</Progressname>
                    <Progress color="warning" value="80">80%</Progress>
                    <Progressname>Jsp</Progressname>
                    <Progress color="success" value="80">80%</Progress>
                    <Progressname>React</Progressname>
                    <Progress color="info" value="70">70%</Progress>
                    <Progressname>Node.js</Progressname>
                    <Progress value="70">70%</Progress>
                </Col>
            </Row>
        </AboutContainer>
    )
}

export default About;
