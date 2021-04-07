import React from 'react'
import { Container } from 'react-bootstrap'
import './HomePage.css'
import BookModal from './BookModal'

function HomePage() {
    
    const background = "https://images.pexels.com/photos/1938123/pexels-photo-1938123.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
    // const background = "https://images.pexels.com/photos/1643456/pexels-photo-1643456.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
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
        <div style={styling}>
                <Container style={padding}>
                    <div className="flex">
                        <div>
                            <h1 style={{ color: "white" }}>We're always ready to take care of your pets</h1>
                            <BookModal/>
                        </div>
                        <div>

                        </div>
                        
                    </div>
                </Container>
        </div>
    )
}

export default HomePage
