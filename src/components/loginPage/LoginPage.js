import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import './LoginPage.css'
import {auth} from '../../firebase'
import {useHistory} from 'react-router-dom'
import SignUp from '../signupModal/SignUp'
import { useStateValue } from '../../StateProvider'

function LoginPage() {
    const [{user}, dispatch] = useStateValue();

    const [email, setEmail] = React.useState("");
    const [pass, setPass] = React.useState("");

    const history = useHistory();
    const bruh = event => {
        if(email === "" || pass === ""){
            alert("Please fill up the forms");
        } else {
            auth.signInWithEmailAndPassword(email, pass)
            .then((auth) => {
                alert("you are now logged in")
                history.push("/")
                dispatch({
                    type: "SET_USER",
                    user: auth.email
                })
                console.log(`ima pro ${auth.email}`)
            }).catch((event) => alert(event.message))
           
        }
    }

    return (
        <div className="loginPage">
            <Container style={{ padding: 30}}>
            {user ? (
                <>
                <h1>You are already logged in</h1>
                </>
                ) :  (
                        <>
                        <h1 style={{ fontWeight: "700" }}>Welcome to Animal<span style={{color: "pink"}}>Pin</span></h1>
                <h5>We do services for every pet you have</h5>
                    <Container className="padding">
                        <Form style={{ marginTop: "20px"}}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)}/>
                            </Form.Group>
                            <Button variant="primary" style={{ float: "right" }} onClick={bruh}>
                                Submit
                            </Button>
                            <Form.Label>
                                <SignUp/>
                            </Form.Label>
                        </Form>
                    </Container>
                            
                        </>
                    )}
            </Container>
            
                   
            <Container>
                <img
                        className="picture"
                        src="https://scontent.xx.fbcdn.net/v/t1.15752-0/p403x403/48405315_523681971446782_9122640266191175680_n.png?_nc_cat=109&ccb=1-3&_nc_sid=f79d6e&_nc_ohc=52-aCGBqwusAX9JMFYM&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&_nc_tp=30&oh=2f996fe13dfc2242ab049dba6ebea9a3&oe=6093B363"
                        alt="Generic placeholder"
                    />
            </Container>
        </div>
    )
}

export default LoginPage

// 
// geee send daw pic sa messenger bai sa firebase
// yes <3 <3< 3 < 3<# <3 