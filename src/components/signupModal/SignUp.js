import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { auth } from '../../firebase';

function SignUp() {
    const [show, setShow] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [pass, setPass] = React.useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const register = event => {
      auth.createUserWithEmailAndPassword(email, pass)
      .then(auth => {
          alert("Congratulations! You are now registered.");
          handleClose();
      }).catch(event => alert(event.message))
  }

  return (
    <>
      <p className="link" variant="primary" onClick={handleShow} style={{ marginTop: "50px", color: "blue"}}>
        Don't have an account yet?
      </p>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>SignUp</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)}/>
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={register}>Sign up</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SignUp
