import { TextField } from '@material-ui/core';
import React from 'react'
import { Button, Col, Form, Modal } from 'react-bootstrap';
import data from '../../services/ph.json';
import { useStateValue } from '../../StateProvider';

function BookModal() {
    const [show, setShow] = React.useState(false);
    const [fname, setFname] = React.useState("");
    const [lname, setLname] = React.useState("");
    const [number, setNumber] = React.useState("09");
    const [address1, setAddress1] = React.useState("");
    const [address2, setAddress2] = React.useState("");
    const [city, setCity] = React.useState("");
    const [zip, setZip] = React.useState("");
    const [often, setOften] = React.useState("");
    const [sdate, setSdate] = React.useState("");
    const [edate, setEdate] = React.useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [{info}, dispatch] = useStateValue();

    const handleBook = () => {
        if(fname === "" || lname === "" || number === "" || address1 === "" || address2 === "" || city === "" || zip === "" || often === "" || sdate === "" || edate === ""){
            alert("Please Fill up the form");
        } else {
            dispatch({
                type: "ADD_BOOKING",
                client: {
                    fname: fname,
                    lname: lname,
                    number: number,
                    address1: address1,
                    address2: address2,
                    city: city,
                    zip: zip,
                    often: often,
                    sdate: sdate,
                    edate: edate,
                }
            })
            alert("Your are successfully booked.");
            handleClose();
        }
    }
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Book here
        </Button>
  
        <Modal
          size="lg"
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="name" placeholder="First Name" value={fname} onChange={(e) => setFname(e.target.value)}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="name" placeholder="Last Name"  value={lname} onChange={(e) => setLname(e.target.value)}/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridPhoneNumber">
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control type="telephone" placeholder="Phone Number" value={number} onChange={(e) => setNumber(e.target.value)}/>
                        </Form.Group>

                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" value={address1} onChange={(e) => setAddress1(e.target.value)}/>
                        </Form.Group>

                        <Form.Group controlId="formGridAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor"  value={address2} onChange={(e) => setAddress2(e.target.value)}/>
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control as="select" defaultValue="Choose..."  value={city} onChange={(e) => setCity(e.target.value)}>
                                <option>Choose..</option>
                                {data.map((data) => {
                                    return(
                                    <option>{data.city}</option>
                                    )
                                })}
                            </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control value={zip} onChange={(e) => setZip(e.target.value)}/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Group>
                            <Form.Label>How often do you need this service?</Form.Label>
                            <Form.Control as="select" defualtValue="Choose.." value={often} onChange={(e) => setOften(e.target.value)}>
                                <option>Choose..</option>
                                <option>One Time</option>
                                <option>Weekly</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Label>For What Dates?</Form.Label>

                        <Form.Row>
                            <Form.Group as={Col}>
                            <form noValidate>
                                <TextField
                                    id="datetime-local"
                                    label="Start of appointment"
                                    type="datetime-local"
                                    value={sdate}
                                    onChange={(e) => setSdate(e.target.value)}
                                    // defaultValue="2017-05-24T10:30"
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                />
                            </form>
                            </Form.Group>
                            
                            <Form.Group as={Col}>
                            <form noValidate>
                                <TextField
                                    id="datetime-local"
                                    label="End of appointment"
                                    type="datetime-local"
                                    value={edate}
                                    onChange={(e) => setEdate(e.target.value)}
                                    // defaultValue="2017-05-24T10:30"
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                />
                            </form>
                            </Form.Group>
                        </Form.Row>
                    </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleBook}>Book</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  
}

export default BookModal
