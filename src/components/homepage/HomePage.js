import React from 'react'
import { Container } from 'react-bootstrap'
import './HomePage.css'
import BookModal from './BookModal'

function HomePage() {
    
    const background = "https://images.pexels.com/photos/1938123/pexels-photo-1938123.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
    const background1 = "https://images.pexels.com/photos/4588019/pexels-photo-4588019.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";
    const background2 = "https://images.pexels.com/photos/1870301/pexels-photo-1870301.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
    const background3 = "https://images.pexels.com/photos/5731822/pexels-photo-5731822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

    const paddingLeftRight = {
        paddingLeft: "10px",
        paddingRight: "10px",
        paddingTop: "20px",
    }
    
    const styling  = {
        background: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        // objectFit: "contain",
        backgroundPosition: "center",
        backgroundColor: "#f6e571"
    }

    const padding = {
        paddingTop: "4rem",
        paddingBottom: "4rem"
    }

    return (
        // <div className="bg">
        <>
        <div style={styling}>
                <Container style={padding}>
                    <div className="flex">
                        <div>
                            <h1 style={{ color: "white", textAlign: "center"}}>We're always ready to take care of your pets</h1>
                        </div>
                    </div>
                </Container>
        </div>
            <Container style={padding}>
                <Container>
                    <h1 style={{ textAlign: "center"}}>Adoring Pet Care book trusted sitters and pet walkers who'll treat your cutie pets like family</h1>
                </Container>

                <Container style={{display: "flex", justifyContent: 'center', alignItems: "center", flexWrap: "wrap"}}>
                    <BookModal background1={background1} background2={background2} background3={background3}/>
                </Container>
            </Container>
        </>
    )
}

export default HomePage
