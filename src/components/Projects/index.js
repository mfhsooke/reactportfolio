import React from 'react'
import {ProjectsContainer, ProjectsH1 ,Button} from './ProjectsElements';
import {Col} from 'reactstrap';
import {Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle,CardDeck} from 'reactstrap';
import img from '../images/portfolio.PNG'
import img1 from '../images/bookmarket.PNG'

const Projects = () => {
    return (
        <ProjectsContainer>
            <ProjectsH1>Projects</ProjectsH1>
            <Col sm={{size:8, offset:2}}>
            <CardDeck>
            <Card>
                <CardImg top width="20%" src={img} />
                <CardBody>
                <CardTitle tag="h5">포토폴리오 사이트</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">#React #Styled-Components #React-strap</CardSubtitle>
                <CardText>React를 이용하여 만든 포토폴리오 사이트입니다.<br></br> 자바스크립트 안에 스타일을 선언하는 'CSS-in-JS' 방식을 택하여 만들었습니다. </CardText>
                <Button outline>Learn More</Button>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width="20%" src={img1} />
                <CardBody>
                <CardTitle tag="h5">북마켓</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">#JSP #Bootstrap #Tomcat9.0 #CSS #HTML #MySQL</CardSubtitle>
                <CardText>JSP를 이용하여 만든 북마켓 사이트입니다.<br></br> </CardText>
                <Button outline>Learn More</Button>
                </CardBody>
            </Card>
            </CardDeck>
            </Col>
        </ProjectsContainer>
    )
}

export default Projects;
