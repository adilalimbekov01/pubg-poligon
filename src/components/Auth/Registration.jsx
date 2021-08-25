
import { Grid, makeStyles } from "@material-ui/core"
import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
import Header from "../Header/Header"

const useStyles = makeStyles((theme) => ({
  size: {
    width: '30%',
    height: '60%',
   display:'flex',
   flexDirection:'column',
   border:'2px solid black',
   borderRadius:"10px",
   backgroundColor:'#1e2645',
   color:'white',
   textAlign:'center'

  },
  grid: {
    minHeight:"73vh"
  },
  color: {
    color:'white',
    fontSize:'14px'
  },
  btn: {
    width: '100px',
    height: '40px',
    fontSize:'18px',

    border: 0,
    borderRadius:'15px',
    cursor:"pointer"
  }
}))

const Registration = () => {
  const classes = useStyles()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (<>
  <Header/>
    <Grid container justify="center" alignItems="center" className={classes.grid}>
    
      <Card className={classes.size}>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Grid container justify="center" align="center">
          <Form onSubmit={handleSubmit}>
            <div style={{display: 'block', width: '150px', textAlign: 'left '}}>
            <Form.Group id="email">
            
              <Form.Control type="email" style={{width:'150px', height:'30px', borderRadius:"10px", marginBottom:"10px"}} placeholder="E-mail" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
            
              <Form.Control type="password" style={{width:'150px', height:'30px', borderRadius:"10px", marginBottom:"10px"}} placeholder="Password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
          
              <Form.Control type="password" style={{width:'150px', height:'30px', borderRadius:"10px"}} placeholder='Password Confirmation' ref={passwordConfirmRef} required />
            </Form.Group>
            </div>
            <div className="w-100 text-center mt-2" style={{marginTop: '10px'}}>
        <Link className={classes.color} to="/login">Already have an account? LogIn</Link>
      </div>
            <Button disabled={loading} className={classes.btn} type="submit" style={{margin: '10px 0'}}>
              SignUp
            </Button>
          </Form>
          </Grid>
        </Card.Body>
      
      </Card>
     
    </Grid>
    </>
  )
}
export default Registration;
