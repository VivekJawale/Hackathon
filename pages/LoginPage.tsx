import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import swal from 'sweetalert';
import { useRouter } from 'next/navigation';

type LoginPayload={
    email:string,
    password:string
}

const LoginPage = () => {
    const [login,setlogin]=useState(true);
    const [signup,setSignup]=useState(false);
    const [email,setEmail]=useState("");
    const [pass,setPasss]=useState("");
    const [role,setRole]=useState("Student");
    const [name,setName]=useState("");
    const router = useRouter();
    const [payload,setPayload]=useState({
        email:"",
        password:""
    })



    const ToggleForm=()=>{
        setSignup(true);
        setlogin(false)
    }
    
    const ToggleFormlOGIN=()=>{
           setSignup(false);
           setlogin(true)
    }

    const lOGIN=()=>{
         
        if(email==""||pass==""){
            return swal({
                title:"Please fill all the fields",
                icon:"warning"
            })
        }

        swal({
          title:"Login Successfull",
          icon:"success"
        })

        router.push(`/HomePage`)

         let loginPayload={
              email:email,
              password:pass
         }
    }

    const Signup=()=>{

        if(name==""||email==""||pass==""){
            return swal({
                title:"Please fill all the fields",
                icon:"warning"
            })
        }

        let Sighnuppayload={
            name:name,
            email:email,
            password:pass,
            role:role
        }

        swal({
          title:"Signup Successfull",
          icon:"success"
        })

        setlogin(true);
        setSignup(false)
    }

  return (
    <>
         
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100vh",background: "radial-gradient(circle, rgba(13,204,197,0.9697128851540616) 45%, rgba(0,0,255,0.6783963585434174) 100%)"}} >

        {login==true?<div style={{boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",width:"30%",padding:"20px 20px",height:"500px",borderRadius:"10px",background:"#f1f1f1",margin:"auto"}}>
            <h4 style={{marginTop:"20px",marginBottom:"20px"}}>Login Now</h4>
        <Form>
        <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control  value={pass} onChange={(e)=>{setPasss(e.target.value)}} type="password" placeholder="Password" />
      </FloatingLabel>

     
      <Button  onClick={lOGIN} variant="primary" style={{marginTop:"20px",marginBottom:"20px",border:"none",background:"#0dccc5",width:"100%",height:"50px"}} >
        Log In
      </Button>
    </Form>
    <p onClick={ToggleForm} style={{cursor:"pointer"}}  >New user? sign up now</p>
        </div>:


        <div style={{boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",width:"30%",padding:"20px 20px",height:"500px",borderRadius:"10px",background:"#f1f1f1",margin:"auto"}}>
            <h4 style={{marginTop:"20px",marginBottom:"20px"}}>Create New Account</h4>
        <Form>
        <FloatingLabel style={{marginBottom:"20px"}} controlId="floatingPassword" label="Name">
        <Form.Control type="text"  value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Name" />
      </FloatingLabel>
        <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email"  value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password"  value={pass} onChange={(e)=>{setPasss(e.target.value)}} placeholder="Password" />
      </FloatingLabel>
      <Form.Select style={{marginTop:"20px"}}  value={role} onChange={(e)=>{setRole(e.target.value)}} aria-label="Default select example">
      <option value="Teacher">Teacher</option>
      <option value="Student">Student</option>
    </Form.Select>
     
      <Button onClick={Signup} variant="primary" style={{marginTop:"20px",marginBottom:"20px",border:"none",background:"#0dccc5",width:"100%",height:"50px"}} >
     Create New Account
      </Button>
    </Form>
    <p style={{cursor:"pointer"}} onClick={ToggleFormlOGIN}>Existing user? Login now</p>
        </div>}

    </div>
    </>
   
  )
}

export default LoginPage