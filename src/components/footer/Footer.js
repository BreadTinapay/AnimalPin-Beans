import React from 'react'
import { Container } from 'react-bootstrap'
import './Footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <div style={{ background: "linear-gradient(to right, rgb(54, 54, 54), #181818)" }}>  
                <Container style={{ padding: '50px', color: "white"}}>
                    <h5>Follow us</h5>
                    <FacebookIcon style={{ color: "blue" }}/>
                    <TwitterIcon/>
                    <InstagramIcon style={{ color: "pink" }}/>
                </Container>
        </div>  
    )
}

export default Footer
