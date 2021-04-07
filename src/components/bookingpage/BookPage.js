import React from 'react'
import { Button, Card, CardColumns, Container } from 'react-bootstrap'
import { useStateValue } from '../../StateProvider'

function BookPage() {
    const [{ info }] = useStateValue();
    return (
        <div>
            <Container>
                <h1>My Bookings</h1>
                <div style={{minHeight: "61vh"}}>
                <CardColumns>
                    {info.map(client => (
                            <Card style={{ width: '25rem' }} key={client.id}>
                                <Card.Header as="h5">{client.fname + " " + client.lname}</Card.Header>
                                <Card.Body>
                                    <Card.Title>{client.often}</Card.Title>
                                    <Card.Text>
                                    <p>{client.number}</p>
                                    {client.address1 + " " + client.address2 + ", " + client.city + " " + client.zip}
                                    <span>{client.sdate + " - " + client.edate}</span>
                                    </Card.Text>
                                    <Button variant="primary">Cancel</Button>
                                </Card.Body>
                            </Card>
                    ))
                    }
                </CardColumns>
                </div>
            </Container>
        </div>
    )
}

export default BookPage
