import * as React from 'react'
import {Link} from 'gatsby'
import {container,
        heading,
        navLinks,
        navLinkItem,
        navLinkText
        } from './layout.module.css'
import { Col, Container, Row } from 'react-bootstrap'
        

const Layout = ({ pageTitle, children}) => {
    return(
        <Container fluid>
            <title>{pageTitle}</title>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/Home" className={navLinkText}>
                            Home</Link></li>
                    <li className={navLinkItem}>
                        <Link to="/about" className={navLinkText}>
                            About</Link></li>
                </ul>
            </nav>
            <main className="border">
                <Row>
                    <Col className="text-center">
                        <h1 className={heading}>{pageTitle}</h1>
                    </Col>
                </Row>
                {children}
            </main>
        </Container>
    )
}

export default Layout