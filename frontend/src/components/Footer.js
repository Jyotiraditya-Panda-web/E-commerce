import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className='text-center py-3'>
                        {/* Jyotiraditya */}
                        <a
                            rel='noopener noreferrer'
                            href='https://github.com/Jyotiraditya-Panda-web'
                            target='_blank'
                            className='Jyotiraditya Panda'
                        >
                            <i className='fas fa-user-circle'></i> Jyotiraditya Github
                        </a>
                        <span style={{ marginLeft: '10px' }}>
                            Copyright &copy; React E-Commerce
                        </span>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer